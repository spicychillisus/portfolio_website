import Head from "next/head";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import {
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
  isValidPhoneNumber,
  type CountryCode,
} from "libphonenumber-js/max";
import examples from "libphonenumber-js/mobile/examples";
import Layout from "@/components/Layout";
import { devName } from "@/data/socials";

type Enquiry = "" | "main-page" | "projects";

interface ContactForm {
  name: string;
  email: string;
  teleHandle: string;
  country: CountryCode;
  phone: string;
  enquiry: Enquiry;
}

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELE_HANDLE_PATTERN = /^@?[A-Za-z0-9_]{5,32}$/;

const initialForm: ContactForm = {
  name: "",
  email: "",
  teleHandle: "",
  country: "SG",
  phone: "",
  enquiry: "",
};

function validate(form: ContactForm): FormErrors {
  const errors: FormErrors = {};
  const example = getExampleNumber(form.country, examples);

  if (!form.name.trim()) errors.name = "Please enter your name.";

  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = "Please enter a valid email, e.g. name@example.com.";

  if (form.teleHandle && !TELE_HANDLE_PATTERN.test(form.teleHandle)) {
    errors.teleHandle = "Telegram handles are 5–32 letters, numbers, or underscores.";
  }

  if (!form.phone) errors.phone = "Please enter your phone number.";
  else if (!isValidPhoneNumber(form.phone, form.country)) {
    errors.phone = example
      ? `Not a valid number for +${getCountryCallingCode(form.country)}, e.g. ${example.nationalNumber}.`
      : `Not a valid number for +${getCountryCallingCode(form.country)}.`;
  }

  if (!form.enquiry) errors.enquiry = "Please choose what your enquiry is about.";

  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactForm, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const countries = useMemo(() => {
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return getCountries()
      .map((code) => ({
        code,
        name: regionNames.of(code) ?? code,
        callingCode: getCountryCallingCode(code),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const phonePlaceholder = getExampleNumber(form.country, examples)?.nationalNumber ?? "Phone number";

  function update<K extends keyof ContactForm>(field: K, value: ContactForm[K]) {
    const next = { ...form, [field]: value };
    setForm(next);
    // Re-validate the phone number too when the country changes, since its rules depend on it.
    if (touched[field] || (field === "country" && touched.phone)) {
      setErrors(validate(next));
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const field = event.target.name as keyof ContactForm;
    // Phone numbers only accept digits.
    const value = field === "phone" ? event.target.value.replace(/\D/g, "") : event.target.value;
    update(field, value as ContactForm[typeof field]);
  }

  function handleBlur(field: keyof ContactForm) {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors(validate(form));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, teleHandle: true, phone: true, enquiry: true });

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // TODO: send the form data to an API route or email service.
    setSubmitted(true);
  }

  function showError(field: keyof ContactForm) {
    return touched[field] ? errors[field] : undefined;
  }

  return (
    <Layout>
      <Head>
        <title>Contact | {devName}</title>
        <meta name="description" content={`Get in touch with ${devName}.`} />
      </Head>
      <section className="page-intro content-width" aria-labelledby="contact-heading">
        <p className="eyebrow">Get in touch</p>
        <h1 id="contact-heading">Contact</h1>
        <p className="page-intro-copy">
          Have a question about the site or one of my projects? Leave your details and I&apos;ll get back to you.
        </p>
      </section>
      <section className="section contact-section content-width" aria-label="Contact form">
        {submitted ? (
          <div className="contact-success" role="status">
            <h2>Thanks, {form.name.trim()}!</h2>
            <p>Your enquiry has been received. I&apos;ll be in touch soon.</p>
            <button
              type="button"
              className="button button-primary"
              onClick={() => {
                setForm(initialForm);
                setErrors({});
                setTouched({});
                setSubmitted(false);
              }}
            >
              Send another
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                aria-invalid={Boolean(showError("name"))}
                aria-describedby={showError("name") ? "contact-name-error" : undefined}
              />
              {showError("name") && <p className="form-error" id="contact-name-error">{showError("name")}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                aria-invalid={Boolean(showError("email"))}
                aria-describedby={showError("email") ? "contact-email-error" : undefined}
              />
              {showError("email") && <p className="form-error" id="contact-email-error">{showError("email")}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-teleHandle">
                Telegram handle <span className="form-optional">(optional)</span>
              </label>
              <input
                id="contact-teleHandle"
                name="teleHandle"
                type="text"
                placeholder="@username"
                value={form.teleHandle}
                onChange={handleChange}
                onBlur={() => handleBlur("teleHandle")}
                aria-invalid={Boolean(showError("teleHandle"))}
                aria-describedby={showError("teleHandle") ? "contact-teleHandle-error" : undefined}
              />
              {showError("teleHandle") && (
                <p className="form-error" id="contact-teleHandle-error">{showError("teleHandle")}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="contact-phone">Phone number</label>
              <div className="phone-group">
                <select
                  id="contact-country"
                  name="country"
                  aria-label="Country code"
                  autoComplete="tel-country-code"
                  value={form.country}
                  onChange={handleChange}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} (+{country.callingCode})
                    </option>
                  ))}
                </select>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="tel-national"
                  placeholder={phonePlaceholder}
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur("phone")}
                  aria-invalid={Boolean(showError("phone"))}
                  aria-describedby={showError("phone") ? "contact-phone-error" : undefined}
                />
              </div>
              {showError("phone") && <p className="form-error" id="contact-phone-error">{showError("phone")}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-enquiry">Enquiry</label>
              <select
                id="contact-enquiry"
                name="enquiry"
                value={form.enquiry}
                onChange={handleChange}
                onBlur={() => handleBlur("enquiry")}
                aria-invalid={Boolean(showError("enquiry"))}
                aria-describedby={showError("enquiry") ? "contact-enquiry-error" : undefined}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="main-page">Main page</option>
                <option value="projects">Projects</option>
              </select>
              {showError("enquiry") && (
                <p className="form-error" id="contact-enquiry-error">{showError("enquiry")}</p>
              )}
            </div>

            <button type="submit" className="button button-primary contact-submit">
              Send enquiry <span aria-hidden="true">↗</span>
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
}

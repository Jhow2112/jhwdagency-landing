/* PrivacyPage — Aralo Studio
   Design: Cream/forest palette, Inter sans + Fraunces display
   Route: /privacy */

import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const LAST_UPDATED = "April 15, 2026";
const EMAIL = "info@aralostudio.com";
const DOMAIN = "aralostudio.com";

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: "https://aralostudio.com/" },
          { name: "Privacy Policy", url: "https://aralostudio.com/privacy/" },
        ]}
      />
      <main className="bg-[#f3efe6] min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">

          {/* Header */}
          <div className="mb-10">
            <a href="/" className="inline-flex items-center gap-2 text-sm text-[#9a4528] hover:text-[#1f2a22] transition-colors mb-6 font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 12L6 8l4-4"/>
              </svg>
              Back to Home
            </a>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1f2a22] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              Privacy Policy
            </h1>
            <p className="text-sm text-[#1f2a22]/50" style={{ fontFamily: "Inter, sans-serif" }}>
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Body */}
          <div className="prose-custom space-y-8" style={{ fontFamily: "Inter, sans-serif", color: "#2f3b32", lineHeight: "1.75" }}>

            <section>
              <p className="text-base">
                Aralo Studio ("we," "us," or "our") operates the website{" "}
                <strong>{DOMAIN}</strong>. This Privacy Policy explains what information we collect when you visit our site or contact us, how we use it, and your rights regarding that information.
              </p>
              <p className="text-base mt-4">
                By using this website, you agree to the practices described in this policy. If you do not agree, please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1f2a22] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>1. Information We Collect</h2>
              <p className="text-base">
                We collect information in two ways: information you provide directly, and information collected automatically when you visit the site.
              </p>
              <h3 className="text-base font-bold text-[#1f2a22] mt-5 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Information You Provide</h3>
              <p className="text-base">
                When you submit the contact form on this site, we collect your name, email address, phone number (if you choose to provide it), and any message or details you choose to include. This information is transmitted to us via Formspree, a third-party form service, and is used solely to respond to your inquiry.
              </p>
              <h3 className="text-base font-bold text-[#1f2a22] mt-5 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Information Collected Automatically</h3>
              <p className="text-base">
                We use our own analytics software, self-hosted on our own infrastructure and served from this domain rather than by an analytics company. It sets no cookies. It records the pages you view, the site you arrived from, your approximate location, and your browser, device type, screen size and language, along with whether a visitor tapped our phone number or email address or successfully sent a form. It does not identify you personally and does not follow you to other websites.
              </p>
              <p className="text-base mt-3">
                We also use Google Analytics, which collects anonymized data about how visitors use this site, including pages visited, time spent on the site, general geographic region (city/country level), device type, and referring source. Google Analytics uses cookies to collect this information. You can opt out by installing the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#9a4528] hover:underline">Google Analytics Opt-out Browser Add-on</a>.
              </p>
              <p className="text-base mt-3">
                This site loads the Meta (Facebook) Pixel, which records page views and enquiries so we can measure how well our advertising performs. It sets cookies, and Meta may combine what it collects here with information it already holds about you. You can control this through your{" "}
                <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-[#9a4528] hover:underline">Meta ad preferences</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1f2a22] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>2. How We Use Your Information</h2>
              <p className="text-base">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-base">
                <li>To respond to consultation requests and inquiries submitted through the contact form.</li>
                <li>To understand how visitors use the site so we can improve its content and usability.</li>
                <li>To process payments when you purchase a service plan (payments are handled entirely by Stripe; we do not store your payment card information).</li>
              </ul>
              <p className="text-base mt-4">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1f2a22] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>3. Third-Party Services</h2>
              <p className="text-base">
                This website uses the following third-party services, each of which has its own privacy policy:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-base">
                <li>
                  <strong>Formspree</strong> processes contact form submissions.{" "}
                  <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#9a4528] hover:underline">Formspree Privacy Policy</a>
                </li>
                <li>
                  <strong>Stripe</strong> processes payments for service plans.{" "}
                  <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#9a4528] hover:underline">Stripe Privacy Policy</a>
                </li>
                <li>
                  <strong>Google Analytics</strong> collects anonymized site usage data.{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#9a4528] hover:underline">Google Privacy Policy</a>
                </li>
                <li>
                  <strong>Meta (Facebook)</strong> receives page views and enquiry events through the Meta Pixel, for advertising measurement.{" "}
                  <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#9a4528] hover:underline">Meta Privacy Policy</a>
                </li>
              </ul>
              <p className="text-base mt-3">
                Our own analytics is deliberately absent from this list. It runs on our infrastructure and is served from this domain, so your visit is not disclosed to a third party and there is no external privacy policy to point you at.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1f2a22] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>4. Cookies</h2>
              <p className="text-base">
                This site uses cookies placed by Google Analytics and by the Meta Pixel, as described above. Our own analytics sets none. The Meta Pixel's cookies are used for advertising measurement and can be controlled through your Meta ad preferences. You can disable cookies in your browser settings at any time, though doing so may affect how some parts of the site function.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1f2a22] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>5. Data Retention</h2>
              <p className="text-base">
                Contact form submissions are retained in our email inbox for as long as necessary to fulfill your request or maintain an ongoing business relationship. Google Analytics data is retained according to Google's standard retention settings. You may request deletion of your personal information at any time by contacting us at the email address below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1f2a22] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>6. Your Rights</h2>
              <p className="text-base">
                You have the right to request access to, correction of, or deletion of any personal information we hold about you. To make such a request, please contact us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#9a4528] hover:underline">{EMAIL}</a>. We will respond within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1f2a22] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>7. Children's Privacy</h2>
              <p className="text-base">
                This website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal information through this site, please contact us and we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1f2a22] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>8. Changes to This Policy</h2>
              <p className="text-base">
                We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the site after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1f2a22] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>9. Contact</h2>
              <p className="text-base">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-5 rounded-2xl bg-[#1f2a22]/5 border border-[#1f2a22]/10">
                <p className="font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>Aralo Studio</p>
                <p className="text-sm mt-1">Meridian, Idaho</p>
                <a href={`mailto:${EMAIL}`} className="text-sm text-[#9a4528] hover:underline mt-1 block">{EMAIL}</a>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}

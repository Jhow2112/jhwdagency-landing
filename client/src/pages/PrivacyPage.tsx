/* PrivacyPage — Jeremy Howard Web Design
   Design: Deep navy/sky blue palette, Syne headings, Nunito Sans body
   Route: /privacy */

import Navbar from "@/components/Navbar";

const LAST_UPDATED = "April 15, 2026";
const EMAIL = "info@jeremyhowardwebdesign.com";
const DOMAIN = "jeremyhowardwebdesign.com";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7F9FC] min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">

          {/* Header */}
          <div className="mb-10">
            <a href="/" className="inline-flex items-center gap-2 text-sm text-[#4A90D9] hover:text-[#1E3A5F] transition-colors mb-6 font-semibold" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 12L6 8l4-4"/>
              </svg>
              Back to Home
            </a>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
              Privacy Policy
            </h1>
            <p className="text-sm text-[#1E3A5F]/50" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Body */}
          <div className="prose-custom space-y-8" style={{ fontFamily: "Nunito Sans, sans-serif", color: "#2D3748", lineHeight: "1.75" }}>

            <section>
              <p className="text-base">
                Jeremy Howard Web Design ("we," "us," or "our") operates the website{" "}
                <strong>{DOMAIN}</strong>. This Privacy Policy explains what information we collect when you visit our site or contact us, how we use it, and your rights regarding that information.
              </p>
              <p className="text-base mt-4">
                By using this website, you agree to the practices described in this policy. If you do not agree, please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>1. Information We Collect</h2>
              <p className="text-base">
                We collect information in two ways: information you provide directly, and information collected automatically when you visit the site.
              </p>
              <h3 className="text-base font-bold text-[#1E3A5F] mt-5 mb-2" style={{ fontFamily: "Syne, sans-serif" }}>Information You Provide</h3>
              <p className="text-base">
                When you submit the contact form on this site, we collect your name, email address, and any message or details you choose to include. This information is transmitted to us via Formspree, a third-party form service, and is used solely to respond to your inquiry.
              </p>
              <h3 className="text-base font-bold text-[#1E3A5F] mt-5 mb-2" style={{ fontFamily: "Syne, sans-serif" }}>Information Collected Automatically</h3>
              <p className="text-base">
                We use Google Analytics to collect anonymized data about how visitors use this site, including pages visited, time spent on the site, general geographic region (city/country level), device type, and referring source. This data does not identify you personally. Google Analytics uses cookies to collect this information. You can opt out of Google Analytics tracking by installing the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline">Google Analytics Opt-out Browser Add-on</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>2. How We Use Your Information</h2>
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
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>3. Third-Party Services</h2>
              <p className="text-base">
                This website uses the following third-party services, each of which has its own privacy policy:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-base">
                <li>
                  <strong>Formspree</strong> processes contact form submissions.{" "}
                  <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline">Formspree Privacy Policy</a>
                </li>
                <li>
                  <strong>Stripe</strong> processes payments for service plans.{" "}
                  <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline">Stripe Privacy Policy</a>
                </li>
                <li>
                  <strong>Google Analytics</strong> collects anonymized site usage data.{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline">Google Privacy Policy</a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>4. Cookies</h2>
              <p className="text-base">
                This site uses cookies placed by Google Analytics to collect anonymized usage data as described above. We do not use cookies for advertising, tracking across other websites, or storing personal information. You can disable cookies in your browser settings at any time, though doing so may affect how some parts of the site function.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>5. Data Retention</h2>
              <p className="text-base">
                Contact form submissions are retained in our email inbox for as long as necessary to fulfill your request or maintain an ongoing business relationship. Google Analytics data is retained according to Google's standard retention settings. You may request deletion of your personal information at any time by contacting us at the email address below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>6. Your Rights</h2>
              <p className="text-base">
                You have the right to request access to, correction of, or deletion of any personal information we hold about you. To make such a request, please contact us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#4A90D9] hover:underline">{EMAIL}</a>. We will respond within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>7. Children's Privacy</h2>
              <p className="text-base">
                This website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal information through this site, please contact us and we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>8. Changes to This Policy</h2>
              <p className="text-base">
                We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the site after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>9. Contact</h2>
              <p className="text-base">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-5 rounded-2xl bg-[#1E3A5F]/5 border border-[#1E3A5F]/10">
                <p className="font-bold text-[#1E3A5F]" style={{ fontFamily: "Syne, sans-serif" }}>Jeremy Howard Web Design</p>
                <p className="text-sm mt-1">Meridian, Idaho</p>
                <a href={`mailto:${EMAIL}`} className="text-sm text-[#4A90D9] hover:underline mt-1 block">{EMAIL}</a>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}

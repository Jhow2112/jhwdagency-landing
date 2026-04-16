/* TermsPage — Jeremy Howard Web Design
   Design: Deep navy/sky blue palette, Syne headings, Nunito Sans body
   Route: /terms */

import { Link } from "wouter";
import Navbar from "@/components/Navbar";

const LAST_UPDATED = "April 15, 2026";
const EMAIL = "info@jeremyhowardwebdesign.com";
const DOMAIN = "jeremyhowardwebdesign.com";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7F9FC] min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">

          {/* Header */}
          <div className="mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#4A90D9] hover:text-[#1E3A5F] transition-colors mb-6 font-semibold" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 12L6 8l4-4"/>
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
              Terms of Service
            </h1>
            <p className="text-sm text-[#1E3A5F]/50" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Body */}
          <div className="space-y-8" style={{ fontFamily: "Nunito Sans, sans-serif", color: "#2D3748", lineHeight: "1.75" }}>

            <section>
              <p className="text-base">
                These Terms of Service ("Terms") govern your use of the website{" "}
                <strong>{DOMAIN}</strong> and any web design, development, SEO, or related services provided by Jeremy Howard Web Design ("we," "us," or "our"), a sole proprietorship based in Meridian, Idaho, operated by Jeremy Howard.
              </p>
              <p className="text-base mt-4">
                By using this website or engaging our services, you agree to be bound by these Terms. Please read them carefully before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>1. Services</h2>
              <p className="text-base">
                Jeremy Howard Web Design provides custom website design and development, visual identity design, search engine optimization (SEO), answer engine optimization (AEO), Google Business Profile setup and management, and website hosting and maintenance services. The specific scope of work, deliverables, timeline, and pricing for each project are agreed upon in writing (via email or a separate project agreement) before work begins.
              </p>
              <p className="text-base mt-4">
                We reserve the right to decline any project at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>2. Payment Terms</h2>
              <p className="text-base">
                One-time project fees are due as specified in the project agreement. Monthly hosting and maintenance fees are billed on a recurring basis through Stripe. All prices are listed in U.S. dollars.
              </p>
              <p className="text-base mt-4">
                Payments are processed securely by Stripe. By providing payment information, you authorize us to charge the agreed amount. We do not store your payment card details.
              </p>
              <p className="text-base mt-4">
                Monthly plans may be cancelled with 30 days written notice sent to{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#4A90D9] hover:underline">{EMAIL}</a>. No refunds are issued for partial months already billed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>3. Project Revisions</h2>
              <p className="text-base">
                Each service plan includes a specified number of revision rounds as described on our pricing page (1 round for Minimum, 2 rounds for Plus, 3 rounds for Premium). A revision round is defined as a single consolidated set of changes submitted after reviewing a design or development deliverable. Requests beyond the included revision rounds will be quoted and billed separately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>4. Client Responsibilities</h2>
              <p className="text-base">
                To complete your project on time, you agree to provide all required content (text, images, logos, and other materials) in a timely manner. Project timelines are contingent on prompt client feedback and content delivery. Delays caused by late content or feedback may extend the stated delivery timeline.
              </p>
              <p className="text-base mt-4">
                You represent that you own or have the legal right to use all content you provide to us, and that such content does not infringe on any third-party intellectual property rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>5. Intellectual Property</h2>
              <p className="text-base">
                Upon receipt of full payment for a completed project, you own the final website design and all custom content created specifically for your project. We retain the right to display the completed work in our portfolio and marketing materials unless you request otherwise in writing.
              </p>
              <p className="text-base mt-4">
                Third-party assets used in your project (such as stock photos, fonts, or plugins) remain subject to their respective licenses. We will inform you of any third-party licensing requirements that apply to your project.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>6. Hosting and Maintenance</h2>
              <p className="text-base">
                Monthly hosting and maintenance plans include website hosting, security updates, and minor content updates as described in the plan details. We make reasonable efforts to maintain uptime and site security, but we do not guarantee 100% uptime and are not liable for losses resulting from hosting interruptions outside our control.
              </p>
              <p className="text-base mt-4">
                If a monthly plan is cancelled or payment lapses, hosting services may be suspended after a reasonable notice period. You are responsible for maintaining a backup of your website files.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>7. SEO and AEO Services</h2>
              <p className="text-base">
                We provide on-page SEO and AEO optimization based on current best practices. We do not guarantee specific search engine rankings, placement in AI-generated answers, or particular traffic levels. Search engine and AI platform algorithms change frequently and are outside our control. Results vary based on industry, competition, content quality, and other factors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>8. Limitation of Liability</h2>
              <p className="text-base">
                To the fullest extent permitted by law, Jeremy Howard Web Design shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or this website, including but not limited to lost profits, lost data, or business interruption.
              </p>
              <p className="text-base mt-4">
                Our total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>9. Governing Law</h2>
              <p className="text-base">
                These Terms are governed by the laws of the State of Idaho, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be resolved in the courts of Ada County, Idaho.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>10. Changes to These Terms</h2>
              <p className="text-base">
                We may update these Terms from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of our services after any changes constitutes your acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: "Syne, sans-serif" }}>11. Contact</h2>
              <p className="text-base">
                If you have any questions about these Terms, please contact us at:
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

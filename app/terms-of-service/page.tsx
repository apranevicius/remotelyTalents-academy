import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { AcademyFooter } from "../_components/academy-footer";
import { AcademyHeader } from "../_components/academy-header";
import { absoluteUrl } from "../_lib/site-config";

const pageTitle = "Terms of Service";
const pageDescription =
  "Terms and Conditions for RemotelyTalents Academy courses, coaching programs, digital materials, payments, refunds, and buyer responsibilities.";
const pageUrl = absoluteUrl("/terms-of-service");
const headerConfig = {
  ctaLabel: "Find a Remote Job",
  ctaHref: "/coaching-programs",
  navLinks: [
    {
      href: "/find-remote-job-with-ai",
      label: "AI Course",
    },
    {
      href: "/coaching-programs",
      label: "Coaching",
    },
    {
      href: "/about",
      label: "About us",
    },
  ],
} as const;
const footerDescription =
  "RemotelyTalents Academy helps professionals improve their remote job search through education, tools, and coaching. Results vary and depend on your experience, market conditions, and execution.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: `${pageTitle} | RemotelyTalents Academy`,
    description: pageDescription,
  },
  twitter: {
    card: "summary",
    title: `${pageTitle} | RemotelyTalents Academy`,
    description: pageDescription,
  },
};

function Section({
  title,
  children,
}: Readonly<{
  title: string;
  children: ReactNode;
}>) {
  return (
    <section className="border-t border-[color:rgba(4,61,49,0.1)] pt-8">
      <h2 className="text-2xl font-extrabold tracking-normal text-[var(--rt-green)] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-[var(--rt-green)]/74">
        {children}
      </div>
    </section>
  );
}

function TermsList({ items }: Readonly<{ items: readonly string[] }>) {
  return (
    <ul className="space-y-3 pl-5">
      {items.map((item) => (
        <li key={item} className="list-disc pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TermsOfServiceRoute() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: pageUrl,
    description: pageDescription,
    isPartOf: {
      "@type": "WebSite",
      name: "RemotelyTalents Academy",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "RemotelyTalents Academy",
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <main className="min-h-screen bg-[var(--rt-cream)] text-[var(--rt-green)]">
        <AcademyHeader {...headerConfig} />
        <section className="bg-[var(--rt-green)] [background-image:var(--rt-hero-surface)] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--rt-yellow)]">
              RemotelyTalents Academy
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-normal sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/78">
              These Terms and Conditions govern access to and use of
              RemotelyTalents Academy courses, coaching programs, materials,
              calls, recordings, templates, and related services.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="rounded-[2rem] border border-[color:rgba(4,61,49,0.08)] bg-white p-6 shadow-[0_18px_60px_rgba(4,61,49,0.08)] sm:p-9">
            <dl className="grid gap-5 text-sm leading-6 text-[var(--rt-green)]/70 sm:grid-cols-2">
              <div>
                <dt className="font-bold uppercase tracking-[0.18em] text-[var(--rt-green)]">
                  Last updated
                </dt>
                <dd className="mt-1">May 7, 2026</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-[0.18em] text-[var(--rt-green)]">
                  Website
                </dt>
                <dd className="mt-1">https://academy.remotelytalents.com</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-[0.18em] text-[var(--rt-green)]">
                  Contact
                </dt>
                <dd className="mt-1">
                  <Link
                    href="mailto:hello@remotelytalents.com"
                    className="font-semibold text-[var(--rt-green)] underline decoration-[var(--rt-yellow)] decoration-2 underline-offset-4"
                  >
                    hello@remotelytalents.com
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-[0.18em] text-[var(--rt-green)]">
                  Company
                </dt>
                <dd className="mt-1">
                  Remotely Talents LLC, 30 N Gould ST STE R Sheridan, WY 82801,
                  USA
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-12 space-y-12">
            <Section title="1. Introduction">
              <p>
                These Terms and Conditions govern access to and use of
                RemotelyTalents Academy, including our website, digital courses,
                coaching programs, templates, materials, calls, recordings, and
                related services.
              </p>
              <p>
                By accessing the website, purchasing a course or program,
                booking a call, creating an account, or using any Academy
                materials, you agree to these Terms and Conditions. If you do
                not agree, you should not use the website or purchase Academy
                products or services.
              </p>
              <p>
                RemotelyTalents Academy is part of the RemotelyTalents brand.
                The Academy provides education, training, and coaching support
                for people who want to improve their remote job search. It is
                not a recruitment agency service, job placement service,
                employer introduction service, or guarantee of employment.
              </p>
            </Section>

            <Section title="2. Definitions">
              <p>
                <strong>Academy, we, us, or our</strong> means
                RemotelyTalents Academy and the legal company operating the
                Academy.
              </p>
              <p>
                <strong>Website</strong> means the Academy website and any
                Academy pages, checkout pages, learning platform pages, forms,
                or related online properties.
              </p>
              <p>
                <strong>Buyer, participant, client, user, you, or your</strong>{" "}
                means any person who visits the website, purchases an Academy
                product or service, joins a program, books a call, or uses
                Academy materials.
              </p>
              <p>
                <strong>Program</strong> means a paid Academy coaching or
                advisory offer, including Essential / Remote Job Reset, Pro /
                Remote Job Accelerator, Premium / Remote Job Advisory, or any
                future Academy program.
              </p>
              <p>
                <strong>Digital materials</strong> means any course content,
                videos, templates, worksheets, checklists, prompts, recordings,
                replays, documents, guides, or other resources provided through
                the Academy.
              </p>
              <p>
                <strong>Coach</strong> means the expert, consultant, instructor,
                advisor, or contractor delivering live sessions, feedback,
                reviews, or support as part of an Academy product or program.
              </p>
            </Section>

            <Section title="3. Eligibility and account responsibility">
              <p>
                You must be at least the age of majority in your country or
                region of residence to purchase Academy products or services.
              </p>
              <p>
                You agree to provide accurate, current, and complete information
                when purchasing, booking a call, completing an intake form, or
                creating an account.
              </p>
              <p>
                You are responsible for keeping your login details secure and
                for all activity under your account. You must not share paid
                access, login credentials, private links, recordings, templates,
                or program materials with anyone else unless we have given
                written permission.
              </p>
              <p>
                We may refuse access, suspend access, or cancel participation if
                we reasonably believe that information provided is false,
                payment is unauthorized, access is being shared, or these Terms
                have been breached.
              </p>
            </Section>

            <Section title="4. Academy products and services">
              <p>
                The Academy may offer digital courses, coaching programs, group
                calls, 1:1 sessions, workshops, templates, replays, application
                feedback, CV and LinkedIn reviews, job-search resources, and
                related educational products.
              </p>
              <p>
                The current coaching program ladder may include Remote Job
                Reset, Remote Job Accelerator, and Remote Job Advisory.
              </p>
              <p>
                Exact inclusions, durations, prices, and access terms are
                described on the relevant sales page, checkout page, program
                page, confirmation email, or written offer. If there is a
                conflict between a general website description and your specific
                checkout or written offer, the specific checkout or written
                offer will normally apply.
              </p>
              <p>
                We may update, improve, rename, replace, pause, or discontinue
                Academy products and services at any time. Changes will not
                remove access or services you have already paid for unless
                required for operational, legal, safety, or platform reasons, or
                unless a fair alternative or refund is provided where
                appropriate.
              </p>
            </Section>

            <Section title="5. Orders, prices, and payment">
              <p>
                Prices are shown on the relevant sales page or checkout page.
                Prices may be listed in USD or another currency. Taxes, VAT,
                payment processing fees, or currency conversion fees may be
                added or handled by the payment provider depending on your
                location and the checkout setup.
              </p>
              <p>
                Payment is due at the time of purchase unless a payment plan or
                other written arrangement is offered and accepted.
              </p>
              <p>
                Payments may be processed through third-party providers such as
                Stripe, Teachable, or another payment or learning platform. Your
                use of those services may also be subject to their own terms and
                privacy policies.
              </p>
              <p>
                You agree to provide accurate billing details and to keep your
                payment method valid for any agreed payment plan. If a payment
                fails, we may pause access, withhold services, or cancel
                participation until the payment issue is resolved.
              </p>
            </Section>

            <Section title="6. Program access and delivery">
              <p>
                Access instructions are normally sent after purchase or after
                approval for a program that requires an application or fit call.
              </p>
              <p>
                Program delivery may include digital materials, group calls, 1:1
                sessions, async support, feedback, reviews, replays, templates,
                and other resources depending on the package purchased.
              </p>
              <p>
                Group calls are normally delivered weekly during the active
                program period and may be delivered through Google Meet, Zoom,
                or another tool. Group calls may include participants from
                different packages if this is operationally appropriate.
              </p>
              <p>
                1:1 sessions are normally 60 minutes unless stated otherwise.
                Session count depends on the package purchased. The buyer is
                responsible for attending scheduled sessions, arriving prepared,
                and submitting requested materials on time.
              </p>
              <p>
                Async support, where included, means support for program-related
                questions during the active program period through the support
                channel chosen by the Academy. It does not mean emergency
                availability, unlimited consulting, unlimited reviews, or
                support outside the active program period.
              </p>
            </Section>

            <Section title="7. Coaching scope and no job guarantee">
              <p>
                The Academy provides education, structure, expert guidance,
                feedback, and support. It does not replace your own job-search
                execution.
              </p>
              <p>
                We may help you clarify your positioning, improve your CV and
                LinkedIn, structure your job search, improve application
                quality, prepare for interviews, and make stronger job-search
                decisions.
              </p>
              <p>We do not guarantee:</p>
              <TermsList
                items={[
                  "a job offer",
                  "interviews",
                  "employer responses",
                  "recruiter introductions",
                  "employer introductions",
                  "job placement",
                  "salary increases",
                  "immigration, relocation, or visa outcomes",
                  "a specific timeline for results",
                  "that any specific role, company, market, or salary level will be available to you",
                ]}
              />
              <p>
                Your results depend on many factors outside our control,
                including your background, skills, experience, target role,
                location, time zone, salary expectations, market conditions,
                application volume, interview performance, consistency, and
                hiring decisions made by third parties.
              </p>
              <p>
                Premium opportunity curation, where included, means that we may
                provide a limited number of hand-picked remote job opportunities
                based on your profile, target role, search criteria, seniority,
                location or time zone, salary direction, and realistic fit. This
                is not job placement, direct introduction, recruiter
                representation, or an application service.
              </p>
            </Section>

            <Section title="8. Buyer responsibilities">
              <p>
                To receive value from the Academy, you are expected to
                participate actively and take responsibility for your own
                job-search execution.
              </p>
              <TermsList
                items={[
                  "complete intake forms and questionnaires honestly and on time",
                  "attend scheduled 1:1 sessions and group calls where possible",
                  "arrive prepared for calls",
                  "submit requested CV, LinkedIn, application, or job-search materials on time",
                  "implement feedback and complete assigned actions",
                  "actively search, apply, follow up, and track your progress",
                  "use async support only for program-related questions within the active program period",
                  "communicate promptly if you need to reschedule a 1:1 session",
                  "behave respectfully toward coaches, staff, and other participants",
                  "avoid sharing confidential information from other participants",
                ]}
              />
              <p>
                Failure to participate, complete work, submit materials, attend
                calls, apply for roles, or implement feedback does not create a
                right to a refund except where required by applicable law.
              </p>
            </Section>

            <Section title="9. Missed calls, rescheduling, and replays">
              <p>
                Missed group calls do not include custom replacement sessions
                unless we expressly agree otherwise.
              </p>
              <p>
                Group-call replays may be provided where available and where
                recording consent, privacy rules, and platform setup allow it.
                We do not guarantee that every live session will be recorded or
                that every replay will be available indefinitely.
              </p>
              <p>
                1:1 sessions may be rescheduled with reasonable notice. Unless
                otherwise stated in writing, we recommend at least 24 hours&apos;
                notice for rescheduling.
              </p>
              <p>
                No-shows or late cancellations may count as used sessions unless
                the coach or Academy chooses to make an exception.
              </p>
              <p>
                Premium may include one pause option of up to 2 weeks if this is
                confirmed in the package terms. Any pause must be requested in
                advance and approved by the Academy.
              </p>
            </Section>

            <Section title="10. Refunds, cancellation, and withdrawal rights">
              <p>
                This section is intended to protect fair delivery while
                respecting mandatory consumer rights. Nothing in these Terms
                removes rights that cannot legally be excluded.
              </p>
              <p>
                Because Academy products may include digital content, templates,
                recordings, live coaching, 1:1 sessions, group calls,
                personalized feedback, and limited coach capacity, payments are
                generally non-refundable once value has started being delivered,
                except where required by law or where the Academy cannot deliver
                the purchased service.
              </p>
              <p>
                A refund may be available before the program has started, if
                required by applicable law, and if no 1:1 session, group call,
                platform access, digital material, template, recording, review,
                async support, personalized work, or coach preparation has been
                delivered.
              </p>
              <p>
                Once you receive access to digital materials, course content,
                templates, recordings, replays, or other program assets, your
                purchase may become non-refundable if you expressly agreed to
                immediate access and acknowledged any loss or limitation of your
                withdrawal right where required by law.
              </p>
              <p>
                Once you attend a 1:1 session or group call, receive CV review,
                LinkedIn review, application feedback, async support,
                personalized opportunity curation, or other personalized work,
                the package is generally non-refundable.
              </p>
              <p>
                If the Academy or coach cannot deliver a purchased program, we
                may offer a reschedule, replacement service, credit, partial
                refund, or full refund depending on what has already been
                delivered and what is legally required.
              </p>
            </Section>

            <Section title="11. Digital materials and intellectual property">
              <p>
                All Academy materials are owned by or licensed to the Academy,
                including videos, templates, prompts, checklists, worksheets,
                replays, slides, documents, written feedback frameworks, program
                structures, and website content.
              </p>
              <p>
                When you purchase an Academy product or program, you receive a
                personal, non-transferable, non-exclusive license to use the
                materials for your own personal career development and job
                search.
              </p>
              <TermsList
                items={[
                  "copy, resell, sublicense, publish, upload, distribute, or share Academy materials",
                  "give your login details or private access links to another person",
                  "record, reproduce, or redistribute calls or replays without written permission",
                  "use Academy materials to create a competing product, course, coaching service, or template library",
                  "remove copyright notices, branding, or ownership notices",
                  "use Academy content for commercial training or consulting without permission",
                ]}
              />
              <p>
                We may revoke access without refund if we reasonably believe you
                have shared, copied, resold, or misused Academy materials.
              </p>
            </Section>

            <Section title="12. Participant content, feedback, and testimonials">
              <p>
                You retain ownership of materials you submit, such as your CV,
                LinkedIn profile, application drafts, career information, or
                job-search notes.
              </p>
              <p>
                By submitting materials, you give us permission to review,
                comment on, process, and use those materials only as needed to
                deliver the Academy service, provide feedback, improve delivery,
                and maintain reasonable internal records.
              </p>
              <p>
                We will not publicly share your personal job-search materials,
                private feedback, or identifiable participant information
                without your permission, unless required by law or needed to
                protect legal rights.
              </p>
              <p>
                If you voluntarily provide a testimonial, review, comment,
                success story, or feedback, you grant us permission to use it
                for marketing, research, internal improvement, and product
                development, subject to any privacy commitments or written
                limitations agreed with you.
              </p>
            </Section>

            <Section title="13. Recordings and privacy">
              <p>
                Calls may be recorded for participant replay, internal
                improvement, note-taking, quality control, training, or product
                insight collection, where permitted and subject to consent and
                platform setup.
              </p>
              <p>
                If a call is recorded, participants may be notified before or at
                the start of the call. By joining a recorded call after notice is
                provided, you may be consenting to the recording where permitted
                by law.
              </p>
              <p>
                You should not share confidential, sensitive, or highly personal
                information in group settings unless you are comfortable doing
                so. You are responsible for deciding what information to share
                with the group.
              </p>
              <p>
                Our collection and use of personal data is governed by the
                Academy privacy policy or the applicable RemotelyTalents privacy
                policy. These Terms should be read together with that privacy
                policy.
              </p>
            </Section>

            <Section title="14. Acceptable use and prohibited conduct">
              <p>
                You agree not to misuse the website, learning platform, calls,
                materials, community spaces, forms, or communication channels.
              </p>
              <TermsList
                items={[
                  "use the Academy for unlawful, fraudulent, abusive, or harmful purposes",
                  "harass, threaten, discriminate against, or abuse any coach, staff member, or participant",
                  "upload malware, spam, or harmful content",
                  "attempt to access another user's account or private data",
                  "scrape, copy, or extract Academy content for unauthorized use",
                  "impersonate another person or misrepresent your identity",
                  "share false, misleading, defamatory, or infringing content",
                  "disrupt calls, communities, or support channels",
                  "violate another person's intellectual property, privacy, or confidentiality rights",
                ]}
              />
              <p>
                We may remove content, suspend access, or terminate
                participation if we reasonably believe these rules have been
                breached.
              </p>
            </Section>

            <Section title="15. Third-party tools and links">
              <p>
                The Academy may use third-party platforms, including payment
                processors, learning platforms, video-call tools, scheduling
                tools, email tools, analytics tools, transcription tools, and
                job-search websites.
              </p>
              <p>
                We are not responsible for third-party websites, tools,
                platforms, job boards, employers, recruiters, job descriptions,
                hiring decisions, or external content. Your use of third-party
                services may be governed by their own terms and privacy
                policies.
              </p>
              <p>
                Links to jobs, companies, resources, tools, or third-party
                websites are provided for educational or practical convenience
                only. They do not mean that we endorse, control, guarantee, or
                represent those third parties.
              </p>
            </Section>

            <Section title="16. Website information and availability">
              <p>
                We aim to keep website and program information accurate, but we
                do not guarantee that all information will always be complete,
                current, error-free, or available without interruption.
              </p>
              <p>
                We may correct errors, update information, change prices, update
                program descriptions, pause pages, change platform tools, or
                modify content at any time.
              </p>
              <p>
                We do not guarantee that the website, platform, videos,
                downloads, calls, replays, or support channels will be
                uninterrupted, secure, or free from technical problems. Where
                practical, we will try to resolve access or delivery issues
                within a reasonable time.
              </p>
            </Section>

            <Section title="17. Limitation of liability">
              <p>
                To the fullest extent permitted by law, the Academy is not
                liable for indirect, incidental, special, consequential,
                punitive, or economic losses, including lost income, lost
                profits, lost opportunities, lost job offers, lost data,
                business interruption, or reputational harm.
              </p>
              <p>
                To the fullest extent permitted by law, our total liability for
                any claim connected with an Academy product or service is
                limited to the amount you paid for the specific product or
                service giving rise to the claim.
              </p>
              <p>
                Nothing in these Terms limits liability that cannot legally be
                limited, including liability for fraud, intentional misconduct,
                or any consumer rights that cannot be excluded under applicable
                law.
              </p>
            </Section>

            <Section title="18. Termination or suspension">
              <p>
                We may suspend or terminate access to the website, learning
                platform, materials, calls, support, or community spaces if you
                breach these Terms, fail to pay, misuse access, share materials,
                behave abusively, or create legal, operational, or safety risk.
              </p>
              <p>
                If access is terminated because of your breach, you may lose
                access to materials, replays, calls, support, or community
                spaces, and you may not be entitled to a refund except where
                required by law.
              </p>
              <p>
                Sections relating to payment, intellectual property,
                confidentiality, participant conduct, disclaimers, limitation of
                liability, and dispute resolution continue to apply after
                termination where relevant.
              </p>
            </Section>

            <Section title="19. Changes to these Terms">
              <p>
                We may update these Terms from time to time. The updated version
                will be posted on the Academy website or otherwise made
                available.
              </p>
              <p>
                Changes normally apply from the date they are published. If a
                change materially affects an active paid program, we will take
                reasonable steps to avoid unfairly reducing the service you
                purchased.
              </p>
              <p>
                Your continued use of the website, materials, or services after
                updated Terms are published means you accept the updated Terms,
                except where additional consent is required by law.
              </p>
            </Section>

            <Section title="20. Governing law and disputes">
              <p>
                These Terms are governed by the laws of Wyoming, United States,
                unless mandatory consumer protection laws in your country or
                region require otherwise.
              </p>
              <p>
                If a dispute arises, both parties agree to first try to resolve
                it in good faith by contacting each other and discussing the
                issue.
              </p>
              <p>
                If the dispute cannot be resolved informally, it may be handled
                by the courts or dispute resolution process stated by the
                applicable governing law, subject to any mandatory consumer
                rights that apply.
              </p>
            </Section>

            <Section title="21. Contact">
              <p>
                For questions about these Terms, purchases, access, refunds, or
                Academy services, contact:
              </p>
              <p>
                <Link
                  href="mailto:hello@remotelytalents.com"
                  className="font-semibold text-[var(--rt-green)] underline decoration-[var(--rt-yellow)] decoration-2 underline-offset-4"
                >
                  hello@remotelytalents.com
                </Link>
                <br />
                Remotely Talents LLC
                <br />
                30 N Gould ST STE R Sheridan, WY 82801, USA
              </p>
            </Section>
          </div>
        </article>
        <AcademyFooter description={footerDescription} />
      </main>
    </>
  );
}

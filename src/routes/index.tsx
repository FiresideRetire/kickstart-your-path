import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { experts, faqs, services, type ServiceKey } from "@/data/experts";

const title = "Talk to a Former Social Security Insider | 24Help.org";
const description =
  "Book a private consultation with a former Social Security insider. Personalized guidance on retirement, disability, Medicare, and benefits. Flat rates from $199.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0B3D91" },
    ],
  }),
  component: ExpertsPage,
});

const serviceOrder: ServiceKey[] = ["general", "retirement", "disability", "drEd"];

const heroPills: { price: string; label: string }[] = [
  { price: "$199", label: "General Consultation" },
  { price: "$299", label: "Retirement & Disability App Help" },
  { price: "$499", label: "Private Consultation with Dr. Ed" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="/" className="flex items-stretch overflow-hidden rounded-[10px] leading-none">
          <span className="flex items-center bg-accent px-3 py-1.5 text-[26px] font-black tracking-tighter text-accent-foreground">
            24
          </span>
          <span className="flex items-center bg-primary px-3.5 py-1.5 text-[22px] font-bold text-primary-foreground">
            Help
          </span>
        </a>
        <nav className="hidden items-center gap-2 md:flex">
          {[
            ["How it works", "#how-it-works"],
            ["Experts", "#experts"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-3.5 py-2 text-[17px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {label}
            </a>
          ))}
          <a
            href="#experts"
            className="ml-2 rounded-pill bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Book a call
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-surface relative overflow-hidden px-6 pt-18 pb-16 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/2 -right-1/5 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.16 74 / 0.1) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl">
        <span className="mb-6 inline-flex items-center rounded-pill border border-accent/30 bg-accent/15 px-5 py-2 text-xs font-semibold tracking-widest text-accent uppercase">
          Former SSA Insiders
        </span>
        <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.15] font-extrabold tracking-tight">
          Talk to a Former <span className="text-accent">Social Security Insider</span>
        </h1>
        <p className="mx-auto mt-5 mb-8 max-w-xl text-[clamp(1.0625rem,2.5vw,1.25rem)] text-primary-foreground/80">
          Get personalized guidance from people who spent decades inside the Social Security
          Administration. Flat-rate pricing. No surprises. No upsells.
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {serviceOrder.map((key) => (
            <div
              key={key}
              className="flex items-center gap-2 rounded-pill border border-primary-foreground/15 bg-primary-foreground/10 px-5 py-2.5 text-[15px]"
            >
              <span className="text-lg font-bold text-accent">{services[key].price}</span>
              <span className="text-primary-foreground/70">
                {services[key].name.replace(" Application Help", " App Help")}
              </span>
            </div>
          ))}
        </div>
        <a
          href="#experts"
          className="inline-flex items-center gap-2 rounded-pill bg-accent px-9 py-4 text-lg font-bold text-accent-foreground shadow-gold transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
        >
          Meet Our Experts ↓
        </a>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    [
      "Choose Your Expert",
      "Browse our team of former SSA employees below. Each one has decades of insider experience.",
    ],
    [
      "Pick Your Service",
      "Select the level of help you need — from a quick consultation to a full application walkthrough.",
    ],
    [
      "Book Your Time",
      "Choose a date and time that works for you. You'll get a confirmation email with everything you need.",
    ],
  ];
  return (
    <section id="how-it-works" className="border-b border-border-subtle bg-card px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="section-label mb-2">Simple Process</p>
        <h2 className="section-title mb-10">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(([heading, body], i) => (
            <div
              key={heading}
              className="rounded-xl border border-border bg-background p-6 text-center shadow-soft"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {i + 1}
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary">{heading}</h3>
              <p className="text-base text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experts() {
  return (
    <section id="experts" className="px-6 py-18">
      <div className="mx-auto max-w-6xl">
        <p className="section-label mb-2">Our Team</p>
        <h2 className="section-title mb-10">Meet Your Experts</h2>
        <div className="grid gap-7">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <div className="border-b border-border-subtle p-7 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-extrabold tracking-tight text-primary-foreground">
                  {expert.initials}
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-primary">
                  {expert.name}
                </h3>
                <p className="mt-1 text-sm font-semibold tracking-wide text-teal uppercase">
                  {expert.title}
                </p>
                <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
                  {expert.bio}
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {expert.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-pill bg-teal-soft px-3 py-1.5 text-[13px] font-semibold text-teal"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-secondary/50 p-6">
                <p className="mb-4 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  Available Services
                </p>
                <div className="space-y-3">
                  {(expert.booking.drEd
                    ? (["drEd"] as ServiceKey[])
                    : serviceOrder.filter((k) => k !== "drEd" && (expert.initials !== "MJ" || expert.booking[k]))
                  ).map((key) => {
                    const service = services[key];
                    const url = expert.booking[key];
                    return (
                      <div
                        key={key}
                        className={`flex flex-wrap items-center gap-4 rounded-xl border p-4 ${
                          url
                            ? "border-border bg-card"
                            : "border-border-subtle bg-card/50 opacity-60"
                        }`}
                      >
                        <div className="min-w-[180px] flex-1">
                          <p className="font-bold text-primary">{service.name}</p>
                          <p className="mt-0.5 text-[13px] text-muted-foreground">
                            {service.meta}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-extrabold text-primary">{service.price}</p>
                          <p className="text-xs text-muted-foreground">{service.duration}</p>
                        </div>
                        <div className="w-full sm:w-auto">
                          {url ? (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-pill bg-accent px-5 py-2.5 text-center text-[15px] font-bold text-accent-foreground transition-colors hover:bg-accent-hover"
                            >
                              Book Now →
                            </a>
                          ) : (
                            <span className="block text-center text-[13px] text-muted-foreground italic">
                              Not offered by this consultant
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBanner() {
  const stats = [
    ["100+", "Years Combined SSA Experience"],
    ["5", "Former SSA Insiders"],
    ["$199", "Starting Price · Flat Rate"],
  ];
  return (
    <section className="hero-surface px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          {stats.map(([number, label]) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-accent">{number}</p>
              <p className="mt-1 text-sm text-primary-foreground/75">{label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-primary-foreground/70">
          All consultants are former Social Security Administration employees with decades of
          hands-on experience. They are not attorneys and do not provide legal advice. They provide
          educational guidance based on their insider knowledge of SSA processes and policies.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-card px-6 py-18">
      <div className="mx-auto max-w-3xl">
        <p className="section-label mb-2">Common Questions</p>
        <h2 className="section-title mb-10">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={item.q} className="overflow-hidden rounded-xl border border-border">
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 bg-background px-5 py-4 text-left text-[17px] font-semibold text-primary transition-colors hover:bg-secondary"
              >
                {item.q}
                <span
                  className={`shrink-0 text-accent transition-transform ${open === i ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▾
                </span>
              </button>
              {open === i && (
                <div className="border-t border-border-subtle px-5 py-4 text-base text-muted-foreground">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="bg-accent-soft px-6 py-18 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="section-title">Ready to Get the Answers You Need?</h2>
        <p className="mt-4 mb-8 text-lg text-muted-foreground">
          Stop guessing. Talk to someone who's been on the inside. Our former SSA employees are
          ready to help you navigate the system with confidence.
        </p>
        <a
          href="#experts"
          className="inline-flex items-center gap-2 rounded-pill bg-accent px-9 py-4 text-lg font-bold text-accent-foreground shadow-gold transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
        >
          Choose Your Expert ↑
        </a>
      </div>
    </section>
  );
}

function ExpertsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto mt-3 max-w-4xl rounded-lg border border-warning bg-warning-soft px-4 py-3 text-center text-[13px] text-warning-foreground">
        📚 <strong>Educational resource only.</strong> Not legal advice. Always verify with SSA at{" "}
        <a href="tel:18007721213" className="font-semibold underline">
          1-800-772-1213
        </a>
        .
      </div>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Experts />
        <TrustBanner />
        <Faq />
        <CtaBanner />
      </main>
      <footer className="border-t border-border bg-primary px-6 py-10 text-center text-sm text-primary-foreground/70">
        <p>© {new Date().getFullYear()} 24Help.org — Not affiliated with the Social Security Administration.</p>
      </footer>
    </div>
  );
}

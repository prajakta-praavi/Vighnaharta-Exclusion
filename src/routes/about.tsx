import { AppLink as Link } from "@/components/app-link";
import { SiteLayout, PageHero } from "@/components/site-layout";
import machineImg from "@/assets/extrusion-machine.jpeg";
import { aboutCopy, aboutValues, company, partnerMessage, productHighlights, supportPromise } from "@/content/extrusion";
import { ArrowRight, CheckCircle2, Lightbulb, Target, Users, Wrench } from "lucide-react";

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="Your reliable partner in extrusion." subtitle="Established in 2023, Vighnaharta Enterprise supports extrusion manufacturers with quality spares, die heads and practical process guidance." />
      <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "About" }]} />
      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={machineImg} alt="Extrusion machinery" loading="lazy" width={1200} height={800} className="rounded-xl shadow-2xl w-full" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">Our Story</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand">Committed to best quality and professional service.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{aboutCopy}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{aboutValues}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-x grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">Dear Valued Partner</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand">A message for pipe industry partners.</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {partnerMessage.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="font-semibold text-brand">{supportPromise}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {[
            { i: Target, t: "Our Commitment", d: "To provide quality extrusion machine spares and project support according to each customer's requirement." },
            { i: Lightbulb, t: "Our Approach", d: "To combine responsibility, innovation and teamwork so clients receive timely, practical and cost-aware solutions." },
          ].map((x) => (
            <div key={x.t} className="bg-card border border-border rounded-xl p-8">
              <x.i className="h-10 w-10 text-safety" />
              <h3 className="mt-4 text-2xl font-bold text-brand">{x.t}</h3>
              <p className="mt-3 text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">Core Competence</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand">What the documents define for the company</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productHighlights.map((item) => (
              <div key={item} className="rounded-xl bg-card border border-border p-6">
                <CheckCircle2 className="h-8 w-8 text-safety" />
                <p className="mt-4 text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { i: Wrench, t: "Spares", d: "Extrusion and post-extrusion machine spares supplied as per requirement." },
            { i: Users, t: "Customer Focus", d: "A team culture built to respond to client needs one step ahead." },
            { i: CheckCircle2, t: "Reliable Partner", d: "Support for machine selection, die heads, calibration, automation and process problems." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl bg-card border border-border p-6">
              <x.i className="h-8 w-8 text-safety" />
              <h3 className="mt-4 font-bold text-brand">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}

export function Breadcrumb({ items }: { items: Array<{ to?: string; label: string }> }) {
  return (
    <nav className="border-b border-border bg-secondary/50">
      <div className="container-x py-3 text-sm text-muted-foreground flex flex-wrap gap-2">
        {items.map((b, i) => (
          <span key={i} className="flex items-center gap-2">
            {b.to ? <Link to={b.to} className="hover:text-brand">{b.label}</Link> : <span className="text-brand font-medium">{b.label}</span>}
            {i < items.length - 1 && <span>/</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}

export function CTAStrip() {
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="container-x py-14 flex flex-wrap items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Talk to us about your extrusion process</h3>
          <p className="opacity-80 mt-1">Share your machine model, output target, pipe range, plant modification or spare requirement.</p>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-safety px-6 py-3 font-semibold text-safety-foreground">
          Get in touch <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}


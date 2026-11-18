import type { FormEvent } from "react";
import { Link } from "react-router";
import "./tmpHome.css";
import SectionHeader from "../components/SectionHeader";
import Card, { type BrandColor } from "../components/Card";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import PhotoCardRow from "../components/PhotoCardRow";
import BrandBlock from "../components/BrandBlock";

const pillars: { title: string; tone: BrandColor; body: string }[] = [
  {
    title: "Academic",
    tone: "orange",
    body: "Placeholder text about academic support. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Social & Community",
    tone: "navy",
    body: "Placeholder text about social and community events. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Professional Empowerment",
    tone: "powder-blue",
    body: "Placeholder text about professional development. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// Newsletter signup isn't wired up yet, so don't submit anywhere.
function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

export default function Home() {
  return (
    <div className="tmpHome">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="hero-eyebrow">Welcome to</p>
          <h1 id="hero-title">SHPE at Northeastern</h1>
          <p className="hero-text">
            Open to everyone, SHPE is the nation's largest association dedicated
            to fostering Hispanic leadership in the STEM field.
          </p>
        </div>
      </section>

      <section className="who-we-are" aria-labelledby="who-we-are-title">
        <SectionHeader id="who-we-are-title" title="Who We Are" />

        <Card title="Our Mission" tone="bright-blue" align="center">
          <p>
            Placeholder mission statement. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </Card>

        <div className="who-we-are-row">
          <Card tone="navy" align="center">
            <p>
              Placeholder text. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </Card>
          <PhotoPlaceholder />
        </div>
      </section>

      <section className="our-pillars" aria-labelledby="our-pillars-title">
        <SectionHeader id="our-pillars-title" title="Our Pillars" />

        <div className="pillars-list">
          {pillars.map(({ title, tone, body }, index) => (
            <PhotoCardRow
              key={title}
              title={title}
              tone={tone}
              photoSide={index % 2 === 0 ? "left" : "right"}
            >
              <p>{body}</p>
            </PhotoCardRow>
          ))}
        </div>
      </section>

      <section className="get-involved" aria-labelledby="get-involved-title">
        <SectionHeader id="get-involved-title" title="Get Involved" />

        <div className="get-involved-cards">
          <Card title="Become a Member" tone="red">
            <p>Join the chapter and the national SHPE network.</p>
            {/* TODO: point to the membership page once it exists. */}
            <a className="get-involved-link" href="#">
              Join SHPE →
            </a>
          </Card>
          <Card title="Come to an Event" tone="red">
            <p>General meetings, workshops, and social events!</p>
            <Link className="get-involved-link" to="/events">
              See Events →
            </Link>
          </Card>
        </div>

        <div className="stay-in-loop">
          <Card tone="bright-blue">
            <h3>Stay in the Loop</h3>
            <p className="caption">Get our newsletter in your inbox</p>
            <a className="stay-in-loop-link" href="#newsletter">
              Subscribe ↓
            </a>
          </Card>
        </div>

        <form
          id="newsletter"
          className="newsletter"
          aria-labelledby="newsletter-title"
          onSubmit={handleNewsletterSubmit}
        >
          <h3 id="newsletter-title" className="newsletter-title">
            Subscribe to Our Newsletter
          </h3>
          <label htmlFor="newsletter-email" className="visually-hidden">
            Email address
          </label>
          <input
            id="newsletter-email"
            className="newsletter-input"
            type="email"
            name="email"
            placeholder="email@example.com"
            autoComplete="email"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </section>

      <BrandBlock />
    </div>
  );
}

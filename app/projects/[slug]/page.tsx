import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import ContactLink from "@/components/contact-link";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project)
    return { title: "Project not found | Luxa", robots: { index: false } };
  const path = `/projects/${project.slug}`;
  return {
    title: `${project.title} | Luxa`,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${project.title} | Luxa`,
      description: project.summary,
      url: path,
      type: "website",
      images: [
        { url: project.images[0], alt: `${project.title} website preview` },
      ],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-header dark-surface">
        <div className="container header-inner">
          <Link href="/" className="wordmark" aria-label="Luxa Web Studio home">
            luxa<span>.</span>
          </Link>
          <Link href="/#work" className="header-contact">
            <ArrowLeft size={16} /> Back to our work
          </Link>
        </div>
      </header>
      <main id="main-content" className="project-page">
        <div className="container">
          <section className="project-intro">
            <p className="eyebrow">Selected work / {project.category}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="action-row">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-brown"
              >
                {project.status === "Concept build"
                  ? "View concept website"
                  : "View website"}
                <ArrowUpRight size={17} />
                <span className="sr-only"> (opens a new tab)</span>
              </a>
              <span className="project-status">
                {project.status || "Website project"}
              </span>
            </div>
          </section>
          <div className="project-overview">
            <div>
              <p className="eyebrow">The work</p>
              <h2>What the website includes.</h2>
              <p>
                This example is from {project.category.toLowerCase()}. It shows
                the layout and functions of the website.
              </p>
            </div>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="project-gallery">
            {project.sections.map((section, index) => (
              <figure key={section.name}>
                <div className="project-image">
                  <Image
                    src={project.images[index]}
                    alt={`${project.title}: ${section.name}`}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1300px) 1200px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption>
                  <span className="eyebrow">
                    0{index + 1} / {section.name}
                  </span>
                  <p>{section.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="project-evidence">
            <p className="eyebrow">About this example</p>
            <h2>See the work. Check the details.</h2>
            <p>
              The screenshots show the website design and functions. No sales or
              conversion results are claimed for this project. This is not
              restaurant-specific work.
            </p>
          </div>
          <section className="project-contact">
            <p className="eyebrow">For your restaurant</p>
            <h2>
              A different business.
              <br />
              <span className="editorial">The same care.</span>
            </h2>
            <p>
              We can discuss a website shaped around your menu, customers and
              team.
            </p>
            <ContactLink
              placement="project-contact"
              className="button button-brown"
            >
              Discuss my restaurant <ArrowUpRight size={17} />
            </ContactLink>
            <Link href="/" className="text-link">
              Explore restaurant websites <ArrowUpRight size={16} />
            </Link>
          </section>
          <footer className="secondary-footer">
            <span>
              © {new Date().getFullYear()} {site.legalName}
            </span>
            <Link href="/privacy">Privacy</Link>
          </footer>
        </div>
      </main>
    </>
  );
}

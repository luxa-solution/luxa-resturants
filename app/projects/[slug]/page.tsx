import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { getProject, projects } from '@/lib/projects'
import { site } from '@/lib/site'

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const project = getProject((await params).slug); return { title: project ? `${project.title} | Luxa` : 'Project | Luxa', description: project?.summary } }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug)
  if (!project) notFound()
  return <main className="min-h-screen bg-[#100b08] px-5 py-8 sm:px-8"><div className="mx-auto max-w-6xl"><header className="flex items-center justify-between"><Link href="/" className="text-xl font-bold tracking-[-.06em]">luxa<span className="text-orange-300">.</span></Link><Link href="/" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#cbb9aa] hover:text-white"><ArrowLeft className="size-4" /> Back home</Link></header><section className="py-24 sm:py-36"><p className="text-xs font-bold uppercase tracking-[.24em] text-orange-300">{project.category} {project.status ? `· ${project.status}` : ''}</p><h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-.07em] sm:text-7xl">{project.title}</h1><p className="mt-6 max-w-2xl text-xl leading-8 text-[#cbb9aa]">{project.summary}</p><a href={project.live} className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#ffb347] to-[#ff7a1a] px-5 py-3 text-sm font-semibold text-[#1a0e08]">Visit live site <ArrowUpRight className="size-4" /></a></section><div className="glass grid gap-5 rounded-3xl p-5 sm:grid-cols-4 sm:p-7"><div><p className="text-xs text-[#9d8a7b]">Industry</p><p className="mt-2 text-sm">{project.category}</p></div><div><p className="text-xs text-[#9d8a7b]">Type</p><p className="mt-2 text-sm">Responsive website</p></div><div><p className="text-xs text-[#9d8a7b]">Key features</p><p className="mt-2 text-sm">{project.features.slice(0,2).join(' · ')}</p></div><div><p className="text-xs text-[#9d8a7b]">Status</p><p className="mt-2 text-sm">{project.status || 'Live project'}</p></div></div><section className="grid gap-16 py-24 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-orange-300">The brief</p><h2 className="mt-4 text-3xl font-semibold">A digital experience with a clear next step.</h2><ul className="mt-8 grid gap-4 text-sm leading-6 text-[#cbb9aa]">{project.features.map(feature=><li key={feature} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-orange-300" />{feature}</li>)}</ul></div><div className="grid gap-8">{project.sections.map((section, index) => (
              <figure key={section.name} className="group">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/15">
                  <Image
                    src={project.images[index % project.images.length]}
                    alt={`${project.title} — ${section.name}`}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b0705]/85 via-[#0b0705]/25 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-[#100b08]/88 p-4 shadow-2xl backdrop-blur-xl sm:inset-x-5 sm:bottom-5">
                    <p className="text-xs uppercase tracking-[.2em] text-orange-300">
                      Section {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#fff6e9]">{section.name}</p>
                  </div>
                </div>
                <figcaption className="mt-4 max-w-2xl text-sm leading-6 text-[#cbb9aa]">
                  {section.caption}
                </figcaption>
              </figure>
            ))}</div></section><section className="glass rounded-[2rem] p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.24em] text-orange-300">Results & takeaways</p><h2 className="mt-4 text-3xl font-semibold">Clarity does the heavy lifting.</h2><p className="mt-4 max-w-2xl leading-7 text-[#cbb9aa]">This project focused on making the offer easier to understand, the experience easier to navigate and the next action easier to take. We do not invent metrics — the work should speak honestly for itself.</p></section><section className="py-24 text-center"><p className="text-xs font-bold uppercase tracking-[.24em] text-orange-300">For your restaurant</p><h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Want a site like this for your <span className="font-serif italic text-orange-300">restaurant?</span></h2><a href="/#audit" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#ffb347] to-[#ff7a1a] px-5 py-3 text-sm font-semibold text-[#1a0e08]">Get My Free Website Audit</a></section><footer className="border-t border-white/10 py-8 text-sm text-[#9d8a7b]">{site.legalName} · {site.url}</footer></div></main>
}


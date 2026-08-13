import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Navigation — fixed so it persists on scroll */}
      <nav className="bg-bg/40 fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-white/40 px-11 py-7 backdrop-blur-xl">
        <div className="text-deep-purple font-serif text-[26px] tracking-[-0.3px]">
          Plan<span className="text-sage">It</span>
        </div>
        <div className="flex gap-7">
          <a href="#" className="text-ink-mid text-sm no-underline">
            Features
          </a>
          <a href="#" className="text-ink-mid text-sm no-underline">
            About
          </a>
        </div>
        <Link
          href="/login"
          className="bg-deep-purple cursor-pointer rounded-full px-5 py-2 font-sans text-[13.5px] font-medium text-white"
        >
          Get started
        </Link>
      </nav>

      {/* Hero card — pt-24 pushes content below the fixed nav */}
      <div className="bg-bg relative min-h-[680px] overflow-hidden rounded-[28px] pt-24">
        {/* Background Shapes */}
        <div className="bg-lavender absolute -top-[120px] -right-[120px] size-[560px] rounded-full opacity-45" />
        <div className="border-lavender absolute top-20 -right-[200px] h-[200px] w-[700px] -rotate-[18deg] rounded-[9999px] border-[18px] opacity-25" />
        <div className="bg-sage-light absolute top-[60px] right-20 size-[60px] rounded-full opacity-60" />
        <div className="bg-sage absolute top-[280px] right-[260px] size-[18px] rounded-full opacity-50" />

        {/* Hero */}
        <div className="relative z-[2] max-w-[600px] px-11 pt-[60px]">
          {/* Tag pill */}
          <div className="bg-lavender text-deep-purple mb-[22px] inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
            <div className="bg-sage size-1.5 rounded-full" />
            Your assignments. Organized automatically.
          </div>

          {/* Headline */}
          <h1 className="text-ink mb-5 font-serif text-[52px] leading-[1.1] tracking-[-1px]">
            Stop orbiting
            <br />
            your <em className="text-deep-purple italic">to-do list.</em>
          </h1>

          {/* Subtitle */}
          <p className="text-ink-mid mb-9 max-w-[460px] text-[17px] leading-[1.6]">
            PlanIt connects to your LMS and pulls every assignment into one
            clean view. No manual entry. No spreadsheets. Just the work.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="bg-deep-purple cursor-pointer rounded-full px-7 py-3 font-sans text-[14.5px] font-medium text-white"
            >
              Connect your LMS
            </Link>
            <button className="text-ink-mid flex cursor-pointer items-center gap-1.5 border-none bg-transparent font-sans text-sm">
              <span className="text-[18px]">▶</span> See how it works
            </button>
          </div>
        </div>

        {/* Platform row */}
        <div className="relative z-[2] flex items-center gap-4 px-11 pt-12 pb-11">
          <span className="text-ink-mute mr-2 text-sm">Works with</span>
          <div className="text-ink-mid flex items-center gap-[7px] rounded-full border bg-white px-[14px] py-[6px] text-[12.5px] font-medium">
            <div className="size-[18px] rounded-sm bg-[#4285F4]" />
            Google Classroom
          </div>
          <div className="text-ink-mid flex items-center gap-[7px] rounded-full border bg-white px-[14px] py-[6px] text-[12.5px] font-medium">
            <div className="size-[18px] rounded-sm bg-[#F98012]" />
            Moodle
          </div>
        </div>

        {/* Floating card */}
        <div className="absolute right-11 bottom-[60px] z-[3] w-[300px] rounded-[20px] border bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-ink text-[13px] font-medium">
              Upcoming assignments
            </span>
            <span className="text-sage text-[11px]">Synced just now</span>
          </div>
          <div className="flex items-center gap-[10px] border-b py-2">
            <div className="size-2 rounded-full bg-[#E8856A]" />
            <span className="text-ink-mid flex-1 text-[12.5px]">
              Week 11 Lab Report
            </span>
            <span className="text-ink-mute text-[11px]">Due today</span>
          </div>
          <div className="flex items-center gap-[10px] border-b py-2">
            <div className="bg-mid-purple size-2 rounded-full" />
            <span className="text-ink-mid flex-1 text-[12.5px]">
              Problem Set 4 — Integrals
            </span>
            <span className="text-ink-mute text-[11px]">Jun 9</span>
          </div>
          <div className="flex items-center gap-[10px] py-2">
            <div className="bg-sage size-2 rounded-full" />
            <span className="text-ink-mid flex-1 text-[12.5px]">
              Rhetorical Analysis Essay
            </span>
            <span className="text-ink-mute text-[11px]">Jun 12</span>
          </div>
        </div>
      </div>
      {/* Video Demo Section */}
      <section className="bg-[#ECEAF5] px-11 py-24">
        <div className="mx-auto flex aspect-video max-w-[720px] items-center justify-center rounded-[20px] bg-white">
          <div className="text-ink-mute text-[48px]">▶</div>
        </div>
      </section>

      {/* About / Founder Section */}
      <section className="bg-[#ECEAF5] px-11 py-24">
        <div className="mx-auto flex max-w-[860px] items-center gap-16">
          <img
            src="/dylan-brooks.jpg"
            alt="Dylan Brooks"
            className="size-[220px] flex-shrink-0 rounded-full object-cover"
          />
          {/* Bio */}
          <div>
            <p className="text-ink-mute mb-1 text-xs font-medium tracking-widest uppercase">
              Founder of PlanIt
            </p>
            <h2 className="text-ink mb-4 font-serif text-[36px] leading-tight">
              Dylan Brooks
            </h2>
            <p className="text-ink-mid mb-6 max-w-[420px] text-[16px] leading-[1.7]">
              CS Major. I built PlanIt because juggling assignments across
              Google Classroom and Moodle was a mess — one place for everything
              just made sense.
            </p>
            <a
              href="https://dylan-brooks2.github.io/Dylan-Brooks-Portfolio/"
              className="text-deep-purple text-[14px] font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View portfolio →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg border-t border-[rgba(107,95,175,0.12)] px-11 py-10">
        <div className="mx-auto max-w-[1100px]">
          {/* Top row */}
          <div className="mb-8 flex items-center justify-between">
            {/* Logo */}
            <div className="text-deep-purple font-serif text-[22px]">
              Plan<span className="text-sage">It</span>
            </div>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dylan-brooks-7870a5232/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-mute hover:text-deep-purple text-sm no-underline transition-colors"
            >
              LinkedIn →
            </a>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between border-t border-[rgba(107,95,175,0.08)] pt-6">
            <p className="text-ink-mute text-xs">
              © 2026 PlanIt. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:dylanbrooks0215@gmail.com"
                className="text-ink-mute hover:text-deep-purple text-xs no-underline transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-ink-mute hover:text-deep-purple text-xs no-underline transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-ink-mute hover:text-deep-purple text-xs no-underline transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

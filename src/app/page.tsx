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
        <button className="bg-deep-purple cursor-pointer rounded-full px-5 py-2 font-sans text-[13.5px] font-medium text-white">
          Get started
        </button>
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
            <button className="bg-deep-purple cursor-pointer rounded-full px-7 py-3 font-sans text-[14.5px] font-medium text-white">
              Connect your LMS
            </button>
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
    </>
  )
}

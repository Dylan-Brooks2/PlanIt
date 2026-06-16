export default function Home() {
  return (
    <div className="bg-bg rounded-[28px] overflow-hidden min-h-[680px] relative">
      <nav className="relative z-[2] flex items-center justify-between px-11 py-7">
        <div className="font-serif text-[26px] text-deep-purple tracking-[-0.3px]">
          Plan<span className="text-sage">It</span>
        </div>
        <div className="flex gap-7">
          <a href="#" className="text-sm text-ink-mid no-underline">Features</a>
          <a href="#" className="text-sm text-ink-mid no-underline">About</a>
        </div>
        <button className="font-sans text-[13.5px] font-medium px-5 py-2 rounded-full bg-deep-purple text-white cursor-pointer">
          Get started
        </button>
      </nav>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-bg relative min-h-[680px] overflow-hidden rounded-[28px]">
      <nav className="relative z-[2] flex items-center justify-between px-11 py-7">
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
    </div>
  )
}

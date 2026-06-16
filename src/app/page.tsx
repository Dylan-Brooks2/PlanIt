export default function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between px-10 py-6">
        <div>
          <span className="text-deep-purple font-serif text-2xl">Plan</span>
          <span className="text-sage font-serif text-2xl">It</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-deep-purple">
            Features
          </a>
          <a href="#" className="text-deep-purple">
            About
          </a>
        </div>
        <button className="bg-deep-purple rounded-full px-4 py-2 text-white">
          Get Started
        </button>
      </nav>
    </div>
  )
}

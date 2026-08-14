import Link from 'next/link'

export default function Welcome() {
  return (
    <>
      <main className="bg-bg relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background Decorative Shapes */}
        <div className="bg-lavender absolute -top-[200px] -left-[200px] size-[600px] rounded-full opacity-40" />
        <div className="bg-sage-light absolute -right-[200px] -bottom-[200px] size-[500px] rounded-full opacity-30" />

        {/* Welcome Card */}
        <div className="relative z-[2] flex w-[380px] flex-col items-center gap-3 overflow-hidden rounded-[28px] border-transparent bg-white/50 px-10 py-12 text-center backdrop-blur-md">
          <img
            src="/dylan-brooks.jpg"
            alt="Dylan Brooks"
            className="size-[140px] flex-shrink-0 rounded-full object-cover"
          />
          <div className="flex flex-col items-center gap-1">
            <p className="text-ink-mute text-sm">Welcome back,</p>
            <h2 className="text-ink font-serif text-[28px]">Dylan Brooks</h2>
          </div>
          <div className="bg-lavender text-deep-purple rounded-full px-4 py-1.5 text-xs font-medium">
            2 Upcoming Assignments Due
          </div>
          <Link href="/dashboard">
            <button className="bg-deep-purple mt-2 cursor-pointer rounded-full px-6 py-2.5 text-sm font-medium text-white">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}

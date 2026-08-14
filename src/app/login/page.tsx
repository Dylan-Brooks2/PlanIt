'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function Login() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <>
      <main className="bg-bg relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background Decorative Shapes */}
        <div className="bg-lavender absolute -top-[200px] -left-[200px] size-[600px] rounded-full opacity-40" />
        <div className="bg-sage-light absolute -right-[200px] -bottom-[200px] size-[500px] rounded-full opacity-30" />

        {/* Login Card */}
        <div className="relative z-[2] w-[420px] overflow-hidden rounded-[28px] border-transparent bg-white/60 p-10 backdrop-blur-md">
          <Link href="/">
            <div className="mb-8 text-center">
              <span className="text-deep-purple font-serif text-[28px]">
                Plan<span className="text-sage">It</span>
              </span>
            </div>
          </Link>
          <div className="bg-bg mb-8 flex rounded-full p-1">
            <button
              onClick={() => setActiveTab('login')}
              className={
                activeTab === 'login'
                  ? 'text-deep-purple flex-1 rounded-full bg-white py-2 text-sm font-medium'
                  : 'text-ink-mute flex-1 rounded-full bg-transparent py-2 text-sm font-medium'
              }
            >
              Log In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={
                activeTab === 'signup'
                  ? 'text-deep-purple flex-1 rounded-full bg-white py-2 text-sm font-medium'
                  : 'text-ink-mute flex-1 rounded-full bg-transparent py-2 text-sm font-medium'
              }
            >
              Sign Up
            </button>
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="text-ink w-full rounded-[12px] border bg-white/70 px-4 py-3 text-sm outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="text-ink w-full rounded-[12px] border bg-white/70 px-4 py-3 text-sm outline-none"
            />
          </div>
          <button className="bg-deep-purple mb-4 w-full cursor-pointer rounded-full py-3 text-sm font-medium text-white">
            Log In
          </button>
          {/* Divider and Google Sign In */}
          <button className="text-ink-mid flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border bg-white/70 py-3 text-sm">
            Continue with Google
          </button>
        </div>
      </main>
    </>
  )
}

"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const accountType =
    role === "parent"
      ? "Parent"
      : role === "teacher"
        ? "Teacher / Admin"
        : "Student";

  const description =
    role === "parent"
      ? "Access your child's performance and progress."
      : role === "teacher"
        ? "Manage students, tests and performance."
        : "Take tests and track your performance.";

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-10">

        <div className="grid w-full max-w-5xl items-center gap-12 lg:grid-cols-2">

          {/* Left side */}
          <div className="hidden lg:block">

            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white">
                <img
                  src="/ihbi-logo.png"
                  alt="IHBI Logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-lg font-semibold tracking-wide">
                  IHBI
                </p>

                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6E6E73]">
                  Test Series
                </p>
              </div>
            </Link>

            <h1 className="mt-12 max-w-md text-5xl font-semibold leading-[1.05] tracking-[-0.04em]">
              Your progress
              <br />
              starts with
              <br />
              <span className="text-[#007AFF]">one test.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-[#6E6E73]">
              Take focused tests, understand your performance and
              continuously improve.
            </p>

          </div>

          {/* Login card */}
          <div className="w-full max-w-md lg:ml-auto">

            <div className="rounded-[28px] border border-[#E5E5EA] bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:p-9">

              {/* Mobile logo */}
              <div className="mb-8 flex items-center gap-3 lg:hidden">

                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <img
                    src="/ihbi-logo.png"
                    alt="IHBI Logo"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-semibold">
                    IHBI
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#6E6E73]">
                    Test Series
                  </p>
                </div>

              </div>

              <div className="mb-8">

                <p className="text-sm font-medium text-[#007AFF]">
                  {accountType}
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  Welcome back.
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6E6E73]">
                  {description}
                </p>

              </div>

              {/* Login form */}
              <form className="space-y-5">

                <div>
                  <label
                    htmlFor="identifier"
                    className="mb-2 block text-sm font-medium"
                  >
                    Student ID, Email or Mobile
                  </label>

                  <input
                    id="identifier"
                    type="text"
                    placeholder="Enter your ID, email or mobile"
                    className="w-full rounded-2xl border border-[#E5E5EA] bg-[#FAFAFA] px-4 py-3.5 text-sm outline-none transition focus:border-[#007AFF] focus:bg-white focus:ring-4 focus:ring-[#007AFF]/10"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="block text-sm font-medium"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-medium text-[#007AFF] hover:underline"
                    >
                      Forgot password?
                    </button>

                  </div>

                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-[#E5E5EA] bg-[#FAFAFA] px-4 py-3.5 text-sm outline-none transition focus:border-[#007AFF] focus:bg-white focus:ring-4 focus:ring-[#007AFF]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#007AFF] py-4 text-sm font-semibold text-white transition hover:bg-[#0066D6] active:scale-[0.99]"
                >
                  Sign In
                </button>

              </form>

              {/* Register */}
              {role !== "teacher" && (
                <div className="mt-7 text-center">

                  <p className="text-sm text-[#6E6E73]">
                    Don't have an account?
                  </p>

                  <Link
                    href="/register"
                    className="mt-1 inline-block text-sm font-semibold text-[#007AFF] hover:underline"
                  >
                    Create an account
                  </Link>

                </div>
              )}

              {/* Back */}
              <div className="mt-7 border-t border-[#E5E5EA] pt-6 text-center">

                <Link
                  href="/"
                  className="text-sm text-[#6E6E73] hover:text-[#1D1D1F]"
                >
                  ← Back to IHBI
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
            <Image
              src="/ihbi-logo.png"
              alt="IHBI Logo"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-base font-semibold tracking-wide">
              IHBI
            </p>

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6E6E73]">
              Test Series
            </p>
          </div>
        </div>

        <p className="hidden text-sm text-[#6E6E73] sm:block">
          NEET Test & Performance
        </p>
      </header>

      {/* Main */}
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-6 py-12 sm:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Hero */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-[#F0F6FF] px-4 py-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#007AFF]" />

              <span className="text-sm font-medium text-[#0066D6]">
                NEET Test Series
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Test.
              <br />
              Analyse.
              <br />
              <span className="text-[#007AFF]">Improve.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#6E6E73] sm:text-lg">
              A focused testing platform designed to help students
              understand their performance, identify weak areas and
              improve consistently.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-4 py-2 text-sm text-[#6E6E73] shadow-sm">
                Performance
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm text-[#6E6E73] shadow-sm">
                Rankings
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm text-[#6E6E73] shadow-sm">
                Progress
              </span>
            </div>
          </div>

          {/* Login Card */}
          <div className="w-full max-w-md lg:ml-auto">
            <div className="rounded-[28px] border border-[#E5E5EA] bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:p-9">

              <div className="mb-8">
                <p className="text-sm font-medium text-[#007AFF]">
                  Welcome to IHBI
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Sign in
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6E6E73]">
                  Select your account type to continue.
                </p>
              </div>

              <div className="space-y-3">

                {/* Student */}
               <Link
  href="/login?role=student"
  className="group flex w-full items-center justify-between rounded-2xl bg-[#007AFF] px-5 py-4 text-left text-white transition-all duration-200 hover:bg-[#0066D6] active:scale-[0.99]"
>
  <div>
    <p className="font-semibold">
      Student
    </p>

    <p className="mt-1 text-xs text-white/75">
      Take tests & track your progress
    </p>
  </div>

  <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">
    →
  </span>
</Link>

                {/* Parent */}
                <Link
  href="/login?role=parent"
  className="group flex w-full items-center justify-between rounded-2xl border border-[#E5E5EA] bg-white px-5 py-4 text-left transition-all duration-200 hover:bg-[#F8F8FA] active:scale-[0.99]"
>
  <div>
    <p className="font-semibold">
      Parent
    </p>

    <p className="mt-1 text-xs text-[#6E6E73]">
      View your child's performance
    </p>
  </div>

  <span className="text-xl text-[#007AFF] transition-transform duration-200 group-hover:translate-x-1">
    →
  </span>
</Link>

                {/* Teacher */}
               <Link
  href="/login?role=teacher"
  className="group flex w-full items-center justify-between rounded-2xl border border-[#E5E5EA] bg-white px-5 py-4 text-left transition-all duration-200 hover:bg-[#F8F8FA] active:scale-[0.99]"
>
  <div>
    <p className="font-semibold">
      Teacher / Admin
    </p>

    <p className="mt-1 text-xs text-[#6E6E73]">
      Manage tests & students
    </p>
  </div>

  <span className="text-xl text-[#007AFF] transition-transform duration-200 group-hover:translate-x-1">
    →
  </span>
</Link>

              </div>

              <div className="mt-8 border-t border-[#E5E5EA] pt-6 text-center">
                <p className="text-xs text-[#8E8E93]">
                  Secure access for IHBI students, parents and teachers.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
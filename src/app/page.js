import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(9, 97, 245, 0.12), transparent 70%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        }}
      >
        {/* Subtle decorative background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0961F5 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto py-16 flex flex-col items-center">
          {/* Campus Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200/70 bg-blue-50/80 text-xs sm:text-sm font-semibold text-[#0961F5] mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0961F5] animate-pulse" />
            <span>µLearn Campus Chapter • CUCEK, CUSAT</span>
          </div>

          {/* College Sub-heading */}
          <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Cochin University College of Engineering Kuttanad
          </p>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Empowering Student Innovators at{" "}
            <span className="text-[#0961F5] inline-block">CUCEK</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            The official µLearn campus community of Cochin University College of
            Engineering Kuttanad. Discover micro study circles, build real-world
            projects, participate in hackathons, and accelerate your tech career.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base text-white bg-[#0961F5] hover:bg-[#074ec4] shadow-md shadow-[#0961F5]/25 hover:shadow-lg hover:shadow-[#0961F5]/35 active:scale-95 transition-all duration-200"
            >
              Discover CUCEK Chapter
            </Link>
            <Link
              href="#events"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs active:scale-95 transition-all duration-200"
            >
              Campus Events
            </Link>
          </div>
        </div>
      </section>

      {/* Anchor Section: About */}
      <section
        id="about"
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100"
      >
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0961F5]">
            About the Campus Chapter
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            About µLearn @ CUCEK
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            µLearn CUCEK is the campus-led chapter of the µLearn movement at
            Cochin University College of Engineering Kuttanad (CUSAT). We
            foster a collaborative learning culture where engineering students
            upskill together through interest groups, peer mentorship, and
            open-source contribution.
          </p>
        </div>
      </section>

      {/* Anchor Section: Events */}
      <section
        id="events"
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 bg-slate-50/50 rounded-3xl my-8"
      >
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0961F5]">
            Campus Activities
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            CUCEK Events, Hackathons & Bootcamps
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            From hands-on coding workshops and tech speaker sessions to
            all-night campus hackathons, discover the exciting learning events
            happening right here at CUCEK.
          </p>
        </div>
      </section>

      {/* Anchor Section: Team */}
      <section
        id="team"
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100 mb-16"
      >
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0961F5]">
            Chapter Leadership
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Meet the CUCEK Core Team
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Passionate student leads, technical mentors, and community
            enablers dedicated to empowering fellow students across all
            branches and semesters at CUCEK.
          </p>
        </div>
      </section>
    </main>
  );
}

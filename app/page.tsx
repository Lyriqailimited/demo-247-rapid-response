export default function Home() {
  const services = [
    "Emergency Plumbing",
    "Heating & Boilers",
    "Drains & Blockages",
    "Leak Detection",
    "Air-Conditioning",
    "Electrics",
    "Roofing",
    "Doors & Windows",
  ];

  const bookingLink = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_LINK || "#book";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative py-24 px-6 text-center text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1863DC 0%, #fc0102 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest opacity-80 mb-4 font-medium">
            London
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            247 Rapid Response
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">
            London&apos;s 24/7 emergency property maintenance experts - fast response, every time
          </p>
          <a
            href="#widget"
            className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: "#ffffff22", border: "2px solid white", color: "white" }}
          >
            Try AI Receptionist
          </a>
        </div>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Talk to Our AI Receptionist
          </h2>
          <p className="text-gray-500">
            Available 24/7 — get instant answers and book a call with our team.
          </p>
        </div>
        <iframe
          src="/widget.html"
          title="AI Voice Receptionist"
          width="100%"
          height="600"
          style={{ border: "none", borderRadius: "12px" }}
        />
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div
                  className="w-10 h-10 rounded-full mb-4 flex items-center justify-center"
                  style={{ background: "#1863DC22" }}
                >
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Why an AI Receptionist?
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Never miss a call, book instantly, and serve customers around the clock.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🕐",
                title: "24/7 Availability",
                desc: "Your AI receptionist answers every call — day, night, weekends, and holidays.",
              },
              {
                icon: "⚡",
                title: "Instant Booking",
                desc: "Callers can schedule appointments in seconds without waiting on hold.",
              },
              {
                icon: "📞",
                title: "Never Miss a Call",
                desc: "Every missed call is a lost job. AI ensures zero calls go unanswered.",
              },
            ].map((f) => (
              <div key={f.title} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center text-white"
        style={{ background: "#1863DC" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to See It in Action?
        </h2>
        <p className="text-xl opacity-90 mb-10">
          Book a demo call and see how AI can transform your customer experience.
        </p>
        <a
          href={bookingLink}
          className="inline-block px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          style={{ background: "#fc0102", color: "white" }}
        >
          Book a Demo Call
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-400 text-sm border-t">
        <p>© 2024 247 Rapid Response · +44 20 8050 5306 · info@247rapidresponse.co.uk</p>
      </footer>
    </main>
  );
}

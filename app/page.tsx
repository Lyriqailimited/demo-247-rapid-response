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

export default function Home() {
  const bookingLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || "#book";

  return (
    <main className="min-h-screen font-sans">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 px-6 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #1863DC 0%, #0f44a8 50%, #fc0102 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-80">
            London · 24/7 Emergency Response
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            247 Rapid Response
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            {"London's 24/7 emergency property maintenance experts — fast response, every time"}
          </p>
          <a
            href="#widget"
            className="inline-block px-10 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: "#fc0102", color: "#fff" }}
          >
            Try AI Receptionist
          </a>
        </div>
      </section>

      {/* Widget */}
      <section id="widget" className="py-20 px-6 bg-gray-950">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">AI Voice Receptionist</h2>
          <p className="text-gray-400">Talk to our AI — available 24/7, instant answers.</p>
        </div>
        <div className="max-w-xl mx-auto">
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "#1863DC" }}
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "#1863DC" }}
                >
                  <span className="text-white text-lg font-bold">&#x2713;</span>
                </div>
                <p className="font-semibold text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 px-6" style={{ background: "#f0f5ff" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1863DC" }}>
            Why an AI Receptionist?
          </h2>
          <p className="text-gray-500 mb-12 text-lg">Never miss a lead — day or night.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Availability",
                desc: "Our AI answers calls around the clock — no voicemail, no missed opportunities.",
                icon: "🕐",
              },
              {
                title: "Instant Booking",
                desc: "Customers can book jobs on the spot, without waiting for a callback.",
                icon: "📅",
              },
              {
                title: "Never Miss a Call",
                desc: "Every enquiry is captured, qualified, and routed to the right team member.",
                icon: "📞",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1863DC" }}>
                  {f.title}
                </h3>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-20 px-6 text-center text-white" style={{ background: "#1863DC" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg opacity-80 mb-8">
            Book a demo call and see how AI can transform your business.
          </p>
          <a
            href={bookingLink}
            className="inline-block px-10 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all hover:scale-105"
            style={{ background: "#fc0102", color: "#fff" }}
          >
            Book a Demo Call
          </a>
          <p className="mt-6 opacity-70 text-sm">Call us: +44 20 8050 5306</p>
        </div>
      </section>
    </main>
  );
}

type Testimonial = {
  title: string;
  client: string;
  clientInfo: string;
  img: string;
};

const testimonials: Testimonial[] = [
  {
    title:
      "The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!",
    client: "Precious",
    clientInfo: "Project Manager",
    img: "icon.png",
  },
  {
    title:
      "It has broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    client: "Reuben",
    clientInfo: "Farmer",
    img: "afric.png",
  },
];

function TestimonialCard({ title, client, clientInfo, img }: Testimonial) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
      <p className="text-lg font-semibold text-gray-900 mb-6 leading-relaxed">
        “{title}”
      </p>

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-gray-900">{client}</p>
          <p className="text-sm text-gray-500">{clientInfo}</p>
        </div>

        <img
          src={img}
          alt={client}
          className="h-12 w-12 rounded-full object-contain border border-gray-200"
        />
      </div>
    </div>
  );
}

export default function Testimony() {
  return (
    <section className="px-6 py-16 lg:py-28 bg-linear-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
            What our community is saying
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            From life-enhancing products to outstanding support and real impact,
            hear directly from people who use our platform every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-12">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </div>

        {/* Highlight Testimonial */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-12 text-center">
          <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-snug max-w-4xl mx-auto mb-6">
            “Its intuitive design and powerful features make it indispensable. I
            can’t imagine going back to life before it!”
          </p>

          <div className="flex flex-col items-center gap-3">
            <img
              src="shop4mi-icon.png"
              alt="Success"
              className="h-16 w-16 object-contain grayscale"
            />
            <p className="font-semibold text-gray-900">Success</p>
            <p className="text-sm text-gray-500">Trader</p>
          </div>
        </div>
      </div>
    </section>
  );
}

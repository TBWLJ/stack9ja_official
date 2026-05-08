type Testimonial = {
  title: string;
  client: string;
  clientInfo: string;
  img: string;
};

const testimonials: Testimonial[] = [
  {
    title:
      "Stack9Ja gave us clear direction from the first conversation and delivered a product our users could understand immediately.",
    client: "Precious",
    clientInfo: "Project lead",
    img: "icon.png",
  },
  {
    title:
      "The process felt organized and transparent. We always knew what was being built, why it mattered, and what was coming next.",
    client: "Reuben",
    clientInfo: "Business owner",
    img: "afric.png",
  },
];

function TestimonialCard({ title, client, clientInfo, img }: Testimonial) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
      <p className="mb-6 text-lg font-semibold leading-relaxed text-slate-900">
        “{title}”
      </p>

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-slate-950">{client}</p>
          <p className="text-sm text-slate-500">{clientInfo}</p>
        </div>

        <img
          src={`/${img}`}
          alt={client}
          className="h-12 w-12 rounded-full border border-slate-200 object-contain"
        />
      </div>
    </div>
  );
}

export default function Testimony() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Proof of care</p>
          <h2 className="mb-4 mt-4 text-3xl font-black tracking-tight text-slate-950 lg:text-5xl">
            Clients should feel informed before, during, and after launch.
          </h2>
          <p className="text-base leading-8 text-slate-600 lg:text-lg">
            We build trust through realistic scopes, direct communication, reliable delivery, and products that are easy to maintain.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-12">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </div>

        <div className="relative overflow-hidden rounded-xl border border-emerald-900/10 bg-emerald-950 p-8 text-center text-white lg:p-12">
          <p className="mx-auto mb-6 max-w-4xl text-xl font-black leading-snug lg:text-3xl">
            We treat every project like a business asset: planned carefully, built responsibly, and supported after launch.
          </p>

          <div className="flex flex-col items-center gap-3">
            <img
              src="/shop4mi-icon.png"
              alt="Shop4Mi"
              className="h-16 w-16 rounded-lg bg-white p-2 object-contain"
            />
            <p className="font-semibold text-white">Stack9Ja delivery standard</p>
            <p className="text-sm text-emerald-200">Clarity, quality, accountability</p>
          </div>
        </div>
      </div>
    </section>
  );
}

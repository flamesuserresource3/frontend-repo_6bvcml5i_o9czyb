import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rhea Kapoor',
    quote:
      'Pepart Interiors transformed our apartment into a sanctuary. Every material and detail feels considered and timeless.',
  },
  {
    name: 'Arjun Mehta',
    quote:
      'Professional, thoughtful, and design-forward. The team balanced aesthetics with functionality flawlessly.',
  },
  {
    name: 'Studio Nimbus',
    quote:
      'A seamless collaboration from concept to installation. The final space elevates our brand experience.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-xs tracking-widest text-neutral-500">TESTIMONIALS</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Words from our clients</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-neutral-800">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-medium text-neutral-600">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

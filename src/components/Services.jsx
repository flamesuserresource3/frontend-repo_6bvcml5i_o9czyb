import React from 'react';
import { Home, Building2, Brush, Ruler } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Interiors',
    desc: 'Tailored homes with calming palettes, natural textures, and bespoke detailing.'
  },
  {
    icon: Building2,
    title: 'Commercial Spaces',
    desc: 'Functional, brand-forward environments for offices, hospitality, and retail.'
  },
  {
    icon: Brush,
    title: 'Styling & Staging',
    desc: 'Artful composition and finish selections to elevate photography and presentation.'
  },
  {
    icon: Ruler,
    title: 'Full-Service Design',
    desc: 'Concept to completion: space planning, sourcing, project management, and install.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest text-neutral-500">SERVICES</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Crafted for beautiful living</h2>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition hover:bg-neutral-50 md:inline-block"
          >
            Start a project
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-neutral-600">{desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-neutral-200 to-transparent" />
              <button className="mt-4 text-sm font-medium text-neutral-800 underline-offset-4 hover:underline">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';

const projects = [
  {
    title: 'Skyline Residence',
    img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1600&auto=format&fit=crop',
    tag: 'Residential'
  },
  {
    title: 'Gallery Loft',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    tag: 'Residential'
  },
  {
    title: 'Atrium Office',
    img: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1600&auto=format&fit=crop',
    tag: 'Commercial'
  },
  {
    title: 'Marble Suite',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
    tag: 'Hospitality'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest text-neutral-500">PORTFOLIO</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Selected works</h2>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition hover:bg-neutral-50 md:inline-block"
          >
            Request full lookbook
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <figure
              key={p.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800">
                  {p.tag}
                </span>
              </div>
              <figcaption className="flex items-center justify-between p-4">
                <span className="font-medium">{p.title}</span>
                <span className="text-sm text-neutral-500">View project</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

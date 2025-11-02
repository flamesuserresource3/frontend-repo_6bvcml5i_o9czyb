import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 py-24">
        <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-wider text-white/80 backdrop-blur-sm">
          PEPART INTERIORS
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Contemporary spaces crafted with intention and quiet luxury
        </h1>
        <p className="mt-6 max-w-2xl text-white/80 md:text-lg">
          We design refined residential and commercial interiors that balance form and function—timeless, elegant, and uniquely yours.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Explore Portfolio <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <Mail className="h-4 w-4" /> Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Simple top nav */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-widest">PEPART INTERIORS</a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#portfolio" className="hover:opacity-80">Portfolio</a>
            <a href="#testimonials" className="hover:opacity-80">Testimonials</a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-black hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />

        {/* Contact Section */}
        <section id="contact" className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-widest text-white/60">CONTACT</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Let’s discuss your space</h2>
              <p className="mt-4 text-white/80">
                Share your project goals and we’ll follow up to schedule a consultation.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="col-span-1">
                  <label className="mb-1 block text-sm text-white/70">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-span-1">
                  <label className="mb-1 block text-sm text-white/70">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-white/30"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm text-white/70">Message</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-white/30"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-white px-4 py-2 font-medium text-black transition hover:opacity-90"
              >
                Send inquiry
              </button>
              <p className="mt-3 text-center text-xs text-white/60">
                Prefer email? Write to hello@pepartinteriors.com
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-10 text-sm text-neutral-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p>© {new Date().getFullYear()} Pepart Interiors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#portfolio" className="hover:text-neutral-900">Portfolio</a>
            <a href="#testimonials" className="hover:text-neutral-900">Testimonials</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

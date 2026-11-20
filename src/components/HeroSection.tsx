import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

const STUDIO_HIGHLIGHTS = [
  { label: 'Curated Rituals', detail: 'Hair, Skin, Nails & Bridal' },
  { label: 'Bespoke Bridal Suite', detail: 'Makeup & Silk Saree Draping' },
  { label: 'Botanical Formulations', detail: 'Gentle, Skin-First Care' },
  { label: 'Private Sanctuaries', detail: 'Sanitised Before Every Visit' },
];

export function HeroSection() {
  return (
    <section id="home" className="bg-[#FAF6F1] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center py-2 lg:py-8"
          >
            <p className="text-sm font-medium tracking-[0.14em] uppercase text-[#945B58] mb-5">
              Your Beauty, Our Passion.
            </p>

            <h1
              className="font-editorial font-medium text-[#2B1C16] tracking-[-0.02em] leading-[1.06] mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 4.4vw, 4.1rem)',
                textWrap: 'balance',
              }}
            >
              Discover Your Natural Beauty
            </h1>

            <p className="text-base sm:text-lg text-[#5C473E] leading-[1.65] max-w-xl mb-9">
              Relax, refresh and rediscover yourself with our professional beauty services.
              Thoughtfully crafted hair, skincare, nail, and bridal rituals in a serene, sunlit
              sanctuary.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#2B1C16] hover:bg-[#4A342B] rounded-full transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#945B58]"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-[#2B1C16] bg-white hover:bg-[#EFE6DC] border border-[#D8C8B8] rounded-full transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#945B58]"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Right Arch-Inspired Rounded Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] rounded-t-[160px] rounded-b-[28px] overflow-hidden border border-[#E2D5C7] bg-[#EFE6DC] shadow-sm">
              <ResilientImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fallbackTitle="Lumière Beauty Studio"
                className="w-full h-full object-cover lg:h-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Architectural Highlights Strip Below Split */}
        <div className="mt-14 pt-8 border-t border-[#E2D5C7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STUDIO_HIGHLIGHTS.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="font-editorial text-xl font-semibold text-[#2B1C16]">{item.label}</p>
              <p className="text-sm text-[#5C473E]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

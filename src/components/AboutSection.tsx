import { ArrowUpRight } from 'lucide-react';
import { ABOUT_IMAGE } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24 lg:py-28 border-y border-[#E2D5C7]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Lounge Image */}
          <div className="lg:col-span-6 flex">
            <div className="w-full aspect-[4/3] lg:aspect-auto lg:min-h-[460px] rounded-[24px] overflow-hidden border border-[#E2D5C7] bg-[#EFE6DC]">
              <ResilientImage
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                fallbackTitle="Consultation Lounge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#945B58] mb-3">
              About Our Studio
            </p>

            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#2B1C16] leading-[1.12] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Beauty Begins With You.
            </h2>

            <div className="space-y-4 text-[#5C473E] text-base leading-[1.7] max-w-xl">
              <p>
                Conceived as a tranquil luxury destination, <strong className="font-semibold text-[#2B1C16]">LUMIÈRE BEAUTY STUDIO</strong>{' '}
                is a fictional beauty sanctuary where unhurried artistry meets gentle, restorative
                care. Rather than rushing through crowded appointments, every visit begins in our
                sunlit consultation lounge with a quiet conversation about what makes you feel most
                at ease.
              </p>
              <p>
                From botanical scalp rituals and skin-calming facials to heirloom silk saree
                draping and luminous bridal artistry, our studio palette—warm cream plaster, travertine
                stone, and soft dusty rose—sets a calm cadence designed around your natural beauty.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EFE6DC] flex flex-wrap items-center gap-6">
              <a
                href="#why-choose-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B1C16] hover:text-[#945B58] transition-colors group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#945B58]"
              >
                <span>Our Studio Philosophy</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <span className="text-xs text-[#786259]" aria-hidden="true">
                ·
              </span>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#945B58] hover:text-[#2B1C16] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#945B58]"
              >
                <span>Request a Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

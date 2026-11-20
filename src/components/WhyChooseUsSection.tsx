import { PILLARS } from '../data/salonData';

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#EFE6DC] py-20 sm:py-24 lg:py-28 border-t border-[#E2D5C7]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#945B58] mb-3">
            The Lumière Standard
          </p>
          <h2
            className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#2B1C16] leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="pt-6 border-t border-[#C9B7A6] flex flex-col justify-between"
            >
              <div>
                <p className="font-editorial text-lg font-medium text-[#945B58] tabular-nums mb-3">
                  {pillar.number}
                </p>
                <h3 className="font-editorial text-2xl font-semibold text-[#2B1C16] mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#5C473E] leading-[1.7]">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

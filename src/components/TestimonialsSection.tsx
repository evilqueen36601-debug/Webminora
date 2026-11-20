import { TESTIMONIALS } from '../data/salonData';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-[#FAF6F1] py-20 sm:py-24 lg:py-28 border-t border-[#E2D5C7]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#945B58] mb-3">
              Client Stories (Sample Demo Content)
            </p>
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#2B1C16] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Kind Words From Sample Visits
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#786259] max-w-md leading-relaxed">
            Disclosure: The testimonials below are illustrative demonstration examples created for
            this portfolio showcase and do not represent genuine customer reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between bg-white rounded-[22px] border border-[#E2D5C7] p-7 sm:p-8"
            >
              <div>
                <p className="text-xs font-medium text-[#945B58] mb-4">{item.sampleLabel}</p>
                <blockquote className="font-editorial text-xl sm:text-[22px] text-[#2B1C16] leading-[1.5] mb-7">
                  {item.quote}
                </blockquote>
              </div>

              <div className="pt-5 border-t border-[#EFE6DC]">
                <p className="text-sm font-semibold text-[#2B1C16]">{item.name}</p>
                <p className="text-xs text-[#786259] mt-0.5">{item.serviceTag}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

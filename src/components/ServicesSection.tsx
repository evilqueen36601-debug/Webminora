import { ArrowRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="bg-[#FAF6F1] py-20 sm:py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#945B58] mb-3">
              Curated Rituals
            </p>
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#2B1C16] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Our Services
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C473E] max-w-md leading-relaxed">
            Illustrative salon rituals and starting prices thoughtfully tailored to hair, skin,
            hands, and bridal celebrations.
          </p>
        </div>

        {/* 3-Column Uniform Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <article
              key={service.id}
              className="group flex flex-col bg-white rounded-[22px] border border-[#E2D5C7] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Uniform 4:3 Media Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFE6DC]">
                <ResilientImage
                  src={service.image}
                  alt={service.imageAlt}
                  fallbackTitle={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                {/* Quiet Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#786259] mb-2">
                  <span>{service.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{service.duration}</span>
                </div>

                {/* Title & Aligned Illustrative Price */}
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="font-editorial text-2xl font-semibold text-[#2B1C16]">
                    {service.title}
                  </h3>
                  <span className="text-sm font-semibold text-[#945B58] tabular-nums whitespace-nowrap shrink-0">
                    {service.priceLabel}
                  </span>
                </div>

                <p className="text-sm text-[#5C473E] leading-[1.65] mb-6 flex-1">
                  {service.description}
                </p>

                {/* Functional Action Handler */}
                <div className="pt-4 border-t border-[#EFE6DC]">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center justify-between w-full py-2 text-sm font-semibold text-[#2B1C16] hover:text-[#945B58] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#945B58]"
                  >
                    <span>Book This Service</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

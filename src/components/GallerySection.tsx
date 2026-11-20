import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

type FilterCategory = 'All' | GalleryItem['category'];

const FILTER_OPTIONS: FilterCategory[] = [
  'All',
  'Interiors',
  'Hair & Draping',
  'Skincare & Nails',
  'Bridal',
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  const activeLightboxItem =
    selectedIndex !== null && filteredItems[selectedIndex]
      ? filteredItems[selectedIndex]
      : null;

  return (
    <section id="gallery" className="bg-white py-20 sm:py-24 lg:py-28 border-t border-[#E2D5C7]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header + Interactive Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#945B58] mb-3">
              Studio Visuals
            </p>
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#2B1C16] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Our Gallery
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter gallery images by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF6F1] border border-[#E2D5C7] rounded-xl"
          >
            {FILTER_OPTIONS.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveFilter(category);
                    setSelectedIndex(null);
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#945B58] ${
                    isActive
                      ? 'bg-[#2B1C16] text-white'
                      : 'text-[#5C473E] hover:text-[#2B1C16] hover:bg-[#EFE6DC]/70'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            const isHeroSpan = activeFilter === 'All' && idx === 0;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                aria-label={`View ${item.title} in gallery lightbox`}
                className={`group relative text-left rounded-[22px] overflow-hidden border border-[#E2D5C7] bg-[#EFE6DC] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#945B58] ${
                  isHeroSpan ? 'sm:col-span-2 sm:row-span-2 min-h-[300px]' : 'aspect-[4/3]'
                }`}
              >
                <ResilientImage
                  src={item.image}
                  alt={item.imageAlt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />

                {/* Measured Contrast Scrim for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E120D]/85 via-[#1E120D]/20 to-transparent flex flex-col justify-end p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#E9D5D3] mb-1">
                        {item.category}
                      </p>
                      <h3 className="font-editorial text-xl sm:text-2xl font-medium text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white opacity-90 group-hover:opacity-100 group-hover:bg-white/25 transition-all shrink-0"
                      aria-hidden="true"
                    >
                      <Expand className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeLightboxItem && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
          className="fixed inset-0 z-50 bg-[#1E120D]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF6F1] rounded-[24px] overflow-hidden border border-[#E2D5C7] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-[#EFE6DC]">
              <ResilientImage
                src={activeLightboxItem.image}
                alt={activeLightboxItem.imageAlt}
                fallbackTitle={activeLightboxItem.title}
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close gallery preview"
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#2B1C16]/85 text-white hover:bg-[#2B1C16] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex - 1 + filteredItems.length) % filteredItems.length
                      )
                    }
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#2B1C16]/75 text-white hover:bg-[#2B1C16] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex((selectedIndex + 1) % filteredItems.length)
                    }
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#2B1C16]/75 text-white hover:bg-[#2B1C16] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#945B58] mb-1">
                  {activeLightboxItem.category}
                </p>
                <h3 className="font-editorial text-2xl font-semibold text-[#2B1C16]">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-sm text-[#5C473E] mt-1">{activeLightboxItem.caption}</p>
              </div>
              <span className="text-xs font-medium text-[#786259] tabular-nums shrink-0">
                {selectedIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

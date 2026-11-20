import { useState } from 'react';
import { Instagram, Facebook, Share2 } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleSocialPlaceholder = (platform: string) => {
    setSocialNotice(
      `${platform} link is a portfolio placeholder for LUMIÈRE BEAUTY STUDIO (no live social profile).`
    );
  };

  return (
    <footer className="bg-[#2B1C16] text-[#FAF6F1] pt-16 pb-12 border-t border-[#4A342B]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-10">
        {/* Top Row: Brand, Nav Links, Social Placeholders */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-[#4A342B]">
          <div>
            <a
              href="#home"
              className="font-editorial text-2xl sm:text-3xl font-semibold tracking-[0.06em] text-white inline-block"
            >
              LUMIÈRE BEAUTY STUDIO
            </a>
            <p className="text-sm text-[#E9D5D3] mt-1.5">Your Beauty, Our Passion.</p>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#EFE6DC] hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleSocialPlaceholder('Instagram')}
              aria-label="Instagram placeholder"
              className="w-10 h-10 rounded-full border border-[#5C473E] hover:border-[#E9D5D3] flex items-center justify-center text-[#EFE6DC] hover:text-white transition-colors cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleSocialPlaceholder('Facebook')}
              aria-label="Facebook placeholder"
              className="w-10 h-10 rounded-full border border-[#5C473E] hover:border-[#E9D5D3] flex items-center justify-center text-[#EFE6DC] hover:text-white transition-colors cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleSocialPlaceholder('Pinterest')}
              aria-label="Pinterest placeholder"
              className="w-10 h-10 rounded-full border border-[#5C473E] hover:border-[#E9D5D3] flex items-center justify-center text-[#EFE6DC] hover:text-white transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Social Placeholder Feedback */}
        {socialNotice && (
          <div
            role="status"
            className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-[#3A2720] border border-[#5C473E] text-xs text-[#EFE6DC]"
          >
            <span>{socialNotice}</span>
            <button
              type="button"
              onClick={() => setSocialNotice(null)}
              className="font-semibold text-white underline cursor-pointer shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Required Portfolio Disclaimer Notice */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#3A2720] border border-[#5C473E]">
          <p className="text-xs sm:text-sm text-[#EFE6DC] leading-relaxed">
            DEMO WEBSITE – PORTFOLIO PROJECT. LUMIÈRE BEAUTY STUDIO is a fictional brand created
            by WEBMINORA DIGITAL STUDIO for website design demonstration purposes only. Services,
            prices, testimonials and business details are illustrative examples. No real
            appointments are accepted.
          </p>
        </div>

        {/* Copyright Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#C9B7A6]">
          <p>© 2026 LUMIÈRE BEAUTY STUDIO. All rights reserved (Illustrative Demo).</p>
          <p>Crafted by WEBMINORA DIGITAL STUDIO</p>
        </div>
      </div>
    </footer>
  );
}

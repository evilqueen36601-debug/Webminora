import { useState } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Phone, X } from 'lucide-react';
import { FICTIONAL_CONTACT } from '../data/salonData';

export function ContactSection() {
  const [whatsappPreviewOpen, setWhatsappPreviewOpen] = useState(false);

  const placeholderMessage = encodeURIComponent(
    'Hello Lumière Beauty Studio (Demo Enquiry), I would like to enquire about your beauty services.'
  );

  return (
    <section
      id="contact"
      className="bg-[#FAF6F1] py-20 sm:py-24 lg:py-28 border-t border-[#E2D5C7]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Fictional Studio Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#945B58] mb-3">
                Visit & Enquiries
              </p>
              <h2
                className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#2B1C16] leading-[1.12] mb-4"
                style={{ textWrap: 'balance' }}
              >
                Connect With Our Studio
              </h2>
              <p className="text-sm sm:text-base text-[#5C473E] leading-relaxed max-w-lg">
                All studio address, phone, email, and WhatsApp details shown below are strictly
                fictional placeholders for demonstration purposes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E2D5C7]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#945B58]">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Studio Address</span>
                </div>
                <p className="text-sm font-medium text-[#2B1C16]">
                  {FICTIONAL_CONTACT.addressLine1}
                </p>
                <p className="text-sm text-[#5C473E]">{FICTIONAL_CONTACT.addressLine2}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#945B58]">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>Studio Hours</span>
                </div>
                <p className="text-sm font-medium text-[#2B1C16]">{FICTIONAL_CONTACT.hours}</p>
                <p className="text-sm text-[#5C473E]">{FICTIONAL_CONTACT.closedDay}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#945B58]">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Telephone</span>
                </div>
                <p className="text-sm font-medium text-[#2B1C16] tabular-nums">
                  {FICTIONAL_CONTACT.phoneDisplay}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#945B58]">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Email</span>
                </div>
                <p className="text-sm font-medium text-[#2B1C16] break-all">
                  {FICTIONAL_CONTACT.email}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Placeholder Enquiry Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[24px] border border-[#E2D5C7] p-7 sm:p-10 space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#945B58] mb-2">
                  Direct Concierge Demo
                </p>
                <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#2B1C16] mb-3">
                  Quick WhatsApp Enquiry
                </h3>
                <p className="text-sm text-[#5C473E] leading-[1.7]">
                  Demonstrating how prospective salon guests can initiate a quick WhatsApp message
                  regarding bridal consultations, service pricing, or schedule availability.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF6F1] border border-[#E2D5C7] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
                <span className="text-[#5C473E]">Placeholder Demo Number:</span>
                <span className="font-semibold text-[#2B1C16] tabular-nums">
                  {FICTIONAL_CONTACT.whatsappDisplay} (Not a Real Line)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setWhatsappPreviewOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#2B1C16] hover:bg-[#4A342B] rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#945B58]"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Enquiry (Demo)</span>
                </button>

                <a
                  href="#booking"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#2B1C16] hover:bg-[#EFE6DC] border border-[#D8C8B8] rounded-full transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#945B58]"
                >
                  Use Enquiry Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Placeholder Enquiry Modal */}
      {whatsappPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-demo-title"
          className="fixed inset-0 z-50 bg-[#1E120D]/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setWhatsappPreviewOpen(false)}
        >
          <div
            className="max-w-md w-full bg-[#FAF6F1] rounded-[24px] border border-[#E2D5C7] p-6 sm:p-8 shadow-xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#945B58] mb-1">
                  Placeholder Number Notice
                </p>
                <h3
                  id="whatsapp-demo-title"
                  className="font-editorial text-2xl font-semibold text-[#2B1C16]"
                >
                  WhatsApp Enquiry Demo
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setWhatsappPreviewOpen(false)}
                aria-label="Close WhatsApp enquiry preview"
                className="w-10 h-10 rounded-full border border-[#E2D5C7] bg-white text-[#2B1C16] hover:bg-[#EFE6DC] flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-[#5C473E] leading-relaxed">
              This button uses a clearly marked placeholder number (
              <strong className="text-[#2B1C16] tabular-nums">
                {FICTIONAL_CONTACT.whatsappDisplay}
              </strong>
              ). No real salon account is connected.
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#E2D5C7] text-xs text-[#5C473E] leading-relaxed">
              <span className="block font-semibold text-[#2B1C16] mb-1">Sample Message Preview:</span>
              “Hello Lumière Beauty Studio (Demo Enquiry), I would like to enquire about your
              beauty services.”
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`https://wa.me/${FICTIONAL_CONTACT.whatsappNumber}?text=${placeholderMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#2B1C16] hover:bg-[#4A342B] rounded-full transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Open Placeholder Link</span>
              </a>
              <button
                type="button"
                onClick={() => setWhatsappPreviewOpen(false)}
                className="px-5 py-2.5 text-xs font-semibold text-[#2B1C16] bg-white border border-[#D8C8B8] hover:bg-[#EFE6DC] rounded-full transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

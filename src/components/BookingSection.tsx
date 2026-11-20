import { FormEvent, useEffect, useState } from 'react';
import { AlertCircle, CalendarCheck, RotateCcw } from 'lucide-react';
import { SERVICES } from '../data/salonData';

interface BookingSectionProps {
  preselectedService: string;
}

interface FormState {
  customerName: string;
  phoneNumber: string;
  service: string;
  preferredDate: string;
  message: string;
}

interface FormErrors {
  customerName?: string;
  phoneNumber?: string;
  service?: string;
  preferredDate?: string;
}

function getTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function BookingSection({ preselectedService }: BookingSectionProps) {
  const [formData, setFormData] = useState<FormState>({
    customerName: '',
    phoneNumber: '',
    service: preselectedService || SERVICES[0].title,
    preferredDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedEnquiry, setSubmittedEnquiry] = useState<FormState | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
      setSubmittedEnquiry(null);
      setErrors((prev) => ({ ...prev, service: undefined }));
    }
  }, [preselectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedName = formData.customerName.trim();
    const digitsOnlyPhone = formData.phoneNumber.replace(/\D/g, '');
    const today = getTodayIsoDate();

    if (trimmedName.length < 2) {
      nextErrors.customerName = 'Please enter your full name (at least 2 characters).';
    }

    if (digitsOnlyPhone.length < 10 || digitsOnlyPhone.length > 15) {
      nextErrors.phoneNumber = 'Please enter a valid 10-digit to 15-digit phone number.';
    }

    if (!formData.service) {
      nextErrors.service = 'Please select a beauty service.';
    }

    if (!formData.preferredDate) {
      nextErrors.preferredDate = 'Please choose a preferred appointment date.';
    } else if (formData.preferredDate < today) {
      nextErrors.preferredDate = 'Please select today or a future date.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedEnquiry({ ...formData });
  };

  const handleReset = () => {
    setSubmittedEnquiry(null);
    setFormData({
      customerName: '',
      phoneNumber: '',
      service: preselectedService || SERVICES[0].title,
      preferredDate: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section
      id="booking"
      className="bg-white py-20 sm:py-24 lg:py-28 border-t border-[#E2D5C7]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Guidance */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#945B58] mb-3">
              Enquiry Preview
            </p>
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#2B1C16] leading-[1.12] mb-5"
              style={{ textWrap: 'balance' }}
            >
              Book an Appointment Enquiry
            </h2>
            <p className="text-base text-[#5C473E] leading-[1.7] mb-8">
              Select a ritual and share your preferred date below to preview our appointment
              enquiry workflow.
            </p>

            <div className="p-6 rounded-[20px] bg-[#FAF6F1] border border-[#E2D5C7] space-y-3">
              <p className="text-sm font-semibold text-[#2B1C16]">
                Demonstration Form Notice
              </p>
              <p className="text-sm text-[#5C473E] leading-relaxed">
                This enquiry form validates your input and demonstrates confirmation states locally
                in your browser. LUMIÈRE BEAUTY STUDIO is a fictional demonstration brand—no real
                salon appointment is scheduled or transmitted.
              </p>
            </div>
          </div>

          {/* Right Form / Confirmation Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF6F1] rounded-[24px] border border-[#E2D5C7] p-6 sm:p-10">
              {submittedEnquiry ? (
                <div role="status" aria-live="polite" className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#EFE6DC] border border-[#D8C8B8] flex items-center justify-center text-[#945B58] shrink-0">
                      <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#945B58] mb-1">
                        Demo Enquiry Preview Recorded
                      </p>
                      <h3 className="font-editorial text-3xl font-semibold text-[#2B1C16]">
                        Thank you, {submittedEnquiry.customerName}.
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#5C473E] leading-relaxed">
                    Your demonstration enquiry preview has been validated and logged on screen.
                    Please note that because LUMIÈRE BEAUTY STUDIO is a fictional portfolio brand,
                    no actual appointment has been booked or sent to a real salon.
                  </p>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-white rounded-[16px] border border-[#E2D5C7] text-sm">
                    <div>
                      <dt className="text-xs text-[#786259]">Selected Service</dt>
                      <dd className="font-semibold text-[#2B1C16] mt-0.5">
                        {submittedEnquiry.service}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#786259]">Preferred Date</dt>
                      <dd className="font-semibold text-[#2B1C16] tabular-nums mt-0.5">
                        {submittedEnquiry.preferredDate}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#786259]">Phone Number</dt>
                      <dd className="font-semibold text-[#2B1C16] tabular-nums mt-0.5">
                        {submittedEnquiry.phoneNumber}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#786259]">Notes</dt>
                      <dd className="font-medium text-[#5C473E] mt-0.5">
                        {submittedEnquiry.message.trim() || 'No additional notes provided'}
                      </dd>
                    </div>
                  </dl>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2B1C16] hover:bg-[#4A342B] rounded-full transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#945B58]"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Customer Name */}
                    <div>
                      <label
                        htmlFor="customerName"
                        className="block text-sm font-semibold text-[#2B1C16] mb-2"
                      >
                        Customer Name <span className="text-[#945B58]">*</span>
                      </label>
                      <input
                        id="customerName"
                        name="customerName"
                        type="text"
                        required
                        placeholder="e.g., Priya Sharma"
                        value={formData.customerName}
                        onChange={(e) => {
                          setFormData({ ...formData, customerName: e.target.value });
                          if (errors.customerName) setErrors({ ...errors, customerName: undefined });
                        }}
                        aria-invalid={Boolean(errors.customerName)}
                        className={`w-full px-4 py-3 text-sm bg-white rounded-xl border text-[#2B1C16] placeholder:text-[#9E8B82] focus:outline-none focus:ring-2 focus:ring-[#945B58]/40 transition-colors ${
                          errors.customerName ? 'border-[#9F2B2B]' : 'border-[#D8C8B8]'
                        }`}
                      />
                      {errors.customerName && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#9F2B2B]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.customerName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-semibold text-[#2B1C16] mb-2"
                      >
                        Phone Number <span className="text-[#945B58]">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        placeholder="e.g., 98765 43210"
                        value={formData.phoneNumber}
                        onChange={(e) => {
                          setFormData({ ...formData, phoneNumber: e.target.value });
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                        }}
                        aria-invalid={Boolean(errors.phoneNumber)}
                        className={`w-full px-4 py-3 text-sm bg-white rounded-xl border text-[#2B1C16] placeholder:text-[#9E8B82] tabular-nums focus:outline-none focus:ring-2 focus:ring-[#945B58]/40 transition-colors ${
                          errors.phoneNumber ? 'border-[#9F2B2B]' : 'border-[#D8C8B8]'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#9F2B2B]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-[#2B1C16] mb-2"
                      >
                        Service <span className="text-[#945B58]">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          if (errors.service) setErrors({ ...errors, service: undefined });
                        }}
                        aria-invalid={Boolean(errors.service)}
                        className={`w-full px-4 py-3 text-sm bg-white rounded-xl border text-[#2B1C16] focus:outline-none focus:ring-2 focus:ring-[#945B58]/40 transition-colors ${
                          errors.service ? 'border-[#9F2B2B]' : 'border-[#D8C8B8]'
                        }`}
                      >
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title} ({srv.priceLabel})
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#9F2B2B]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-sm font-semibold text-[#2B1C16] mb-2"
                      >
                        Preferred Date <span className="text-[#945B58]">*</span>
                      </label>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        required
                        min={getTodayIsoDate()}
                        value={formData.preferredDate}
                        onChange={(e) => {
                          setFormData({ ...formData, preferredDate: e.target.value });
                          if (errors.preferredDate)
                            setErrors({ ...errors, preferredDate: undefined });
                        }}
                        aria-invalid={Boolean(errors.preferredDate)}
                        className={`w-full px-4 py-3 text-sm bg-white rounded-xl border text-[#2B1C16] tabular-nums focus:outline-none focus:ring-2 focus:ring-[#945B58]/40 transition-colors ${
                          errors.preferredDate ? 'border-[#9F2B2B]' : 'border-[#D8C8B8]'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#9F2B2B]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#2B1C16] mb-2"
                    >
                      Message <span className="font-normal text-[#786259]">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share your preferred time window, hair/skin notes, or bridal occasion details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-[#D8C8B8] text-[#2B1C16] placeholder:text-[#9E8B82] focus:outline-none focus:ring-2 focus:ring-[#945B58]/40 transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#2B1C16] hover:bg-[#4A342B] rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#945B58]"
                    >
                      Send Appointment Enquiry
                    </button>
                    <span className="text-xs text-[#786259]">
                      Demo preview only · No real booking created
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

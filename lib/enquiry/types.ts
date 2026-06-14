export type EnquiryType = "home-atelier" | "consultation" | "contact" | "product";

export type Enquiry = {
  type: EnquiryType;
  name: string;
  phone: string;
  email?: string;
  city?: string;
  preferredDate?: string;
  preferredTime?: string;
  interest?: string;
  message?: string;
  context?: string;
  submittedAt: string;
};

export const enquiryTypeLabels: Record<EnquiryType, string> = {
  "home-atelier": "Home Atelier Booking",
  consultation: "Consultation Request",
  contact: "Contact Enquiry",
  product: "Design Enquiry",
};

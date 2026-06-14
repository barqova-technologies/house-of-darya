import type { Enquiry } from "@/lib/enquiry/types";

export async function persistEnquiry(enquiry: Enquiry): Promise<void> {
  console.log("[enquiry:received]", JSON.stringify(enquiry));
}

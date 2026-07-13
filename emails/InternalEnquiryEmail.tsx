import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { Enquiry } from "@/lib/enquiry/types";
import { enquiryTypeLabels } from "@/lib/enquiry/types";

const styles = {
  body: { backgroundColor: "#f7f3ec", fontFamily: "Georgia, serif", padding: "32px 0" },
  container: {
    backgroundColor: "#fffdf8",
    border: "1px solid #ded5c6",
    maxWidth: "560px",
    padding: "40px 48px",
  },
  brand: {
    color: "#7a2233",
    fontSize: "11px",
    letterSpacing: "4px",
    textTransform: "uppercase" as const,
    margin: "0 0 24px",
  },
  heading: { color: "#221c15", fontSize: "24px", fontWeight: 500, margin: "0 0 8px" },
  meta: { color: "#716657", fontSize: "13px", margin: "0 0 24px" },
  hr: { borderColor: "#ded5c6", margin: "24px 0" },
  label: {
    color: "#7a2233",
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    margin: "0 0 4px",
  },
  value: { color: "#221c15", fontSize: "15px", margin: "0 0 16px" },
};

export default function InternalEnquiryEmail({ enquiry }: { enquiry: Enquiry }) {
  const rows: [string, string | undefined][] = [
    ["Name", enquiry.name],
    ["Phone", enquiry.phone],
    ["Email", enquiry.email],
    ["City", enquiry.city],
    ["Preferred Date", enquiry.preferredDate],
    ["Preferred Time", enquiry.preferredTime],
    ["Interest", enquiry.interest],
    ["Message", enquiry.message],
    ["Context", enquiry.context],
  ];
  return (
    <Html>
      <Head />
      <Preview>{`New ${enquiryTypeLabels[enquiry.type]} - ${enquiry.name}`}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.brand}>House of Darya</Text>
          <Heading style={styles.heading}>{enquiryTypeLabels[enquiry.type]}</Heading>
          <Text style={styles.meta}>Received {enquiry.submittedAt}</Text>
          <Hr style={styles.hr} />
          <Section>
            {rows
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label}>
                  <Text style={styles.label}>{label}</Text>
                  <Text style={styles.value}>{value}</Text>
                </div>
              ))}
          </Section>
          <Hr style={styles.hr} />
          <Text style={styles.meta}>
            Respond within business hours. Every enquiry is a potential atelier visit.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

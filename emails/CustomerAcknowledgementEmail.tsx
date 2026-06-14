import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import type { Enquiry } from "@/lib/enquiry/types";

const styles = {
  body: { backgroundColor: "#f7f3ec", fontFamily: "Georgia, serif", padding: "32px 0" },
  container: {
    backgroundColor: "#fffdf8",
    border: "1px solid #ded5c6",
    maxWidth: "560px",
    padding: "48px",
    textAlign: "center" as const,
  },
  brand: {
    color: "#a8854e",
    fontSize: "12px",
    letterSpacing: "5px",
    textTransform: "uppercase" as const,
    margin: "0 0 32px",
  },
  heading: { color: "#221c15", fontSize: "26px", fontWeight: 500, margin: "0 0 16px" },
  text: { color: "#716657", fontSize: "15px", lineHeight: "26px", margin: "0 0 16px" },
  hr: { borderColor: "#ded5c6", margin: "32px 0" },
  footer: { color: "#a8854e", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const },
};

const messages: Record<Enquiry["type"], { heading: string; body: string }> = {
  "home-atelier": {
    heading: "Your Home Atelier awaits",
    body: "Thank you for inviting House of Darya into your home. Our atelier concierge will call you shortly to confirm a date and curate a selection of designs for your visit.",
  },
  consultation: {
    heading: "Your consultation is being arranged",
    body: "Thank you for your interest in a private consultation. One of our design consultants will reach out shortly to understand your vision and arrange a time that suits you.",
  },
  contact: {
    heading: "We have received your message",
    body: "Thank you for writing to House of Darya. A member of our atelier will respond personally within one business day.",
  },
  product: {
    heading: "Your design enquiry has reached us",
    body: "Thank you for your interest in this design. Our consultants will contact you shortly with details, and can arrange for you to see it in person through our Home Atelier in Lucknow.",
  },
};

export default function CustomerAcknowledgementEmail({ enquiry }: { enquiry: Enquiry }) {
  const copy = messages[enquiry.type];
  return (
    <Html>
      <Head />
      <Preview>{copy.heading} - House of Darya</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.brand}>House of Darya</Text>
          <Heading style={styles.heading}>{copy.heading}</Heading>
          <Text style={styles.text}>Dear {enquiry.name},</Text>
          <Text style={styles.text}>{copy.body}</Text>
          <Text style={styles.text}>
            Every House of Darya piece is 100% made-to-order, HUID hallmarked, and set with IGI
            certified diamonds or SGL certified gemstones.
          </Text>
          <Hr style={styles.hr} />
          <Text style={styles.text}>
            <Link href="https://houseofdarya.com" style={{ color: "#a8854e" }}>
              houseofdarya.com
            </Link>
          </Text>
          <Text style={styles.footer}>Made-to-Order Fine Jewellery · Lucknow</Text>
        </Container>
      </Body>
    </Html>
  );
}

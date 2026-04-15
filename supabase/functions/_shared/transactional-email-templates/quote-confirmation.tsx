import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Nello's Flooring"

interface QuoteConfirmationProps {
  fullName?: string
}

const QuoteConfirmationEmail = ({ fullName }: QuoteConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to {SITE_NAME}!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {fullName ? `Thank you, ${fullName}!` : 'Thank you!'}
        </Heading>
        <Text style={text}>
          We've received your quote request and one of our flooring specialists will be in touch with you shortly.
        </Text>
        <Hr style={hr} />
        <Text style={text}>
          In the meantime, if you have any questions, feel free to give us a call at <strong>(727) 644-2305</strong>.
        </Text>
        <Text style={footer}>
          Best regards,<br />The {SITE_NAME} Team
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: QuoteConfirmationEmail,
  subject: `Thanks for contacting ${SITE_NAME}!`,
  displayName: 'Quote confirmation to customer',
  previewData: { fullName: 'John Smith' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Montserrat', Arial, sans-serif" }
const container = { padding: '30px 25px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: '700' as const, color: '#3d3422', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 16px' }
const hr = { borderColor: '#e8e0d0', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0' }

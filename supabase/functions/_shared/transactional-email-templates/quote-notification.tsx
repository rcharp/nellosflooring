import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Nello's Flooring"

interface QuoteNotificationProps {
  fullName?: string
  email?: string
  phone?: string
  helpWith?: string
}

const QuoteNotificationEmail = ({ fullName, phone, helpWith }: QuoteNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New quote request from {fullName || 'a customer'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Quote Request</Heading>
        <Text style={text}>You have a new quote request from the {SITE_NAME} website.</Text>
        <Hr style={hr} />
        <Section style={detailSection}>
          <Text style={label}>Name</Text>
          <Text style={value}>{fullName || 'Not provided'}</Text>
          <Text style={label}>Phone</Text>
          <Text style={value}>{phone || 'Not provided'}</Text>
          <Text style={label}>What they need help with</Text>
          <Text style={value}>{helpWith || 'Not provided'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>This email was sent from the {SITE_NAME} website quote form.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: QuoteNotificationEmail,
  subject: (data: Record<string, any>) => `New Quote Request from ${data.fullName || 'a customer'}`,
  to: 'rickycharpentier@gmail.com',
  displayName: 'Quote notification',
  previewData: { fullName: 'John Smith', phone: '7271234567', helpWith: 'I need new hardwood floors installed in my living room.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Montserrat', Arial, sans-serif" }
const container = { padding: '30px 25px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: '700' as const, color: '#3d3422', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 16px' }
const hr = { borderColor: '#e8e0d0', margin: '20px 0' }
const detailSection = { margin: '0' }
const label = { fontSize: '12px', fontWeight: '600' as const, color: '#8b7a5e', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '0 0 4px' }
const value = { fontSize: '15px', color: '#3d3422', margin: '0 0 16px', lineHeight: '1.5' }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0' }

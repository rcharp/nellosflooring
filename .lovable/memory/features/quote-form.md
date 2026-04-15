---
name: Quote Form
description: Quote form sends email via Lovable Cloud edge function to rickycharpentier@gmail.com, 10-digit phone validation
type: feature
---
- Quote form submits via `send-transactional-email` edge function using `quote-notification` template
- Recipient: rickycharpentier@gmail.com
- Sender domain: notify.nellosflooring.com
- 10-digit phone validation, both consent checkboxes required
- No longer uses FormSubmit or LeadConnector webhook

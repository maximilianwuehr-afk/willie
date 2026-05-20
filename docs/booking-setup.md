# Booking Setup

The website embeds the Cal.com event configured through `NEXT_PUBLIC_CAL_LINK`.
The expected production value is:

```env
NEXT_PUBLIC_CAL_LINK=willie-studio/studio-buchung
```

## Cal.com Event

Create one event type for the studio booking flow.

- Name: `Studio Buchung`
- Slug: `studio-buchung`
- Public link: `https://cal.com/willie-studio/studio-buchung`
- Booking units:
  - `Stündlich`: 65 EUR per hour, minimum 1 hour
  - `Halbtag`: 220 EUR, 4 hours
  - `Ganztag`: 380 EUR, 8 hours
- Required payment: 50% deposit at booking
- Cancellation policy:
  - Up to 24 hours before start: 25 EUR fee
  - Less than 24 hours before start: deposit forfeited
- Contracting company: Willie UG (haftungsbeschränkt)

## Booking Questions

Ask these before checkout:

- Package: `Stündlich`, `Halbtag`, `Ganztag`
- Usage: `Portrait / Personal Branding`, `Content Produktion`, `Workshop`,
  `Yoga / Breathwork`, `Sonstiges`
- Optional equipment:
  - `Blitzanlage`, `ab 50 EUR`
  - `LED Panels`, `ab 30 EUR`
  - `Hintergründe`, `ab 20 EUR`
  - `Möbel & Props`, included
  - `Makeup-Ecke`, included
  - `Garderobe`, included
- Notes for setup, access, and invoice details

## Payment

Connect the Willie UG payment provider in Cal.com and charge the deposit during
booking. The remaining balance is paid on site or by bank transfer.

Do not commit provider keys or dashboard secrets. Store created account
credentials in 1Password and configure production values in Vercel.

# OnePort365 — End-to-End Booking Flow (Playwright)

## Overview

This test suite automates the full international shipment booking flow on the [OnePort365](https://test-web.oneport365.com/) platform, from searching available freight rates to confirming a booking.

---

## Test: `test('test', ...)`

### What It Covers

| Stage | Description |
|---|---|
| Landing & Navigation | Loads the test environment and dismisses the country selection modal |
| Page Identity | Asserts the page title, logo, and key headings are visible |
| Origin/Destination Search | Selects **Antwerpen (BEANR), Belgium** as origin and **Apapa (NGAPP), Nigeria** as destination |
| Rate Search | Triggers a freight rate search and paginates through results |
| Authentication | Signs in with test credentials via the login panel |
| Booking Initiation | Selects the first available rate and advances through the booking pipeline |
| Cargo Details | Searches an HS code, selects **Live Primates**, and fills in weight/volume values |
| Readiness Date | Sets cargo readiness to **Saturday, July 4th** |
| Review & Confirmation | Steps through all summary and validation screens, then confirms the booking |
| Success Verification | Asserts the **🎉 Booking + Finance** success heading is visible |
| Completion | Clicks **Done** to exit the checkout portal |

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [Playwright](https://playwright.dev/) installed in the project

```bash
npm install
npx playwright install
```

---

## Running the Test

```bash
# Run all tests
npx playwright test

# Run with the browser visible (headed mode)
npx playwright test --headed

# Run and view the HTML report
npx playwright test --reporter=html
npx playwright show-report
```

---

## Test Credentials

The test uses the following account (test environment only):

| Field | Value |
|---|---|
| Email | `mnnenna18@gmail.com` |
| Password | `005819Nne$` |

> ⚠️ **Do not commit real credentials to version control.** Move these to environment variables or a `.env` file before sharing this test publicly.

**Recommended approach:**

```js
// In your test
email: process.env.TEST_EMAIL,
password: process.env.TEST_PASSWORD,
```

---

## Key Assertions

```
✅ Page title matches: /Optimal Freight Solutions for Africa's Traders/
✅ OnePort 365 Logo is visible
✅ "Get a Quote" link is visible
✅ Main headings are visible (Book, Rates, Preferred Carriers)
✅ Booking success heading "🎉 Booking + Finance" is visible
```

---

## Notes

- The test targets the **test environment** (`test-web.oneport365.com`), not production.
- The HS code search uses the value `110`, which resolves to **Live Primates** in the platform's catalogue.
- Cargo inputs: Weight = `100`, Volume = `300`.
- The date picker selection (`Saturday, July 4th`) may need updating when running the test on or after that date.

---

## File Structure

```
.
└── tests/
    └── oneport365-booking.spec.ts   # This test file
```

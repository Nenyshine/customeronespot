import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the OnePort365 test environment landing page
  await page.goto('https://test-web.oneport365.com/');
   // Proceed past the landing/country selection modal
  await page.getByRole('button', { name: 'Continue to Global Website' }).click();
  
  // 1. Verify Page Title and Identity
  await expect(page).toHaveTitle(/Optimal Freight Solutions for Africa's Traders/);
  await expect(page.getByRole('img', { name: 'OnePort 365 Logo' })).toBeVisible();

  // 2. Verify Global Navigation / Header Elements
 
  await expect(page.getByRole('link', { name: 'Get a Quote' })).toBeVisible();

  // 3. Verify Default Input Values and Core Headings
  await expect(page.getByRole('heading', { name: 'Book Your International Shipments In Minutes' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Your rates will be displayed here' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'PREFERRED CARRIERS' })).toBeVisible();

  // Select origin: Search and select Antwerpen, Belgium
  await page.getByRole('button', { name: 'City, Terminal, Zipcode' }).first().click();
  await page.getByRole('textbox', { name: 'Search options...' }).fill('antw');
  await page.getByRole('button', { name: 'Antwerpen (BEANR) Belgium' }).click();
  
  // Select destination: Search and select Apapa, Nigeria
  await page.getByRole('button', { name: 'City, Terminal, Zipcode' }).click();
  await page.getByRole('textbox', { name: 'Search options...' }).fill('apa');
  await page.getByRole('button', { name: 'Apapa (NGAPP) Nigeria' }).click();

   // Execute search to find available shipping rates
  await page.getByRole('button', { name: 'Search' }).click();
  
  
  
  // Open the login panel and authenticate with credentials
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('mnnenna18@gmail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('005819Nne$');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Paginate through the search results to load and view shipping rates
  await page.getByRole('button', { name: 'Next rates' }).click();
  await page.getByRole('button', { name: 'Previous rates' }).click();
  
  // Select the first available rate option and initiate the booking pipeline
  await page.getByRole('button', { name: 'Book Now' }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  
  // Provide cargo details: Search HS code and select "Live Primates"
  await page.getByRole('textbox', { name: 'Describe your cargo...' }).click();
  await page.getByRole('textbox', { name: 'Enter HS code to search...' }).click();
  await page.getByRole('textbox', { name: 'Enter HS code to search...' }).fill('110');
  await page.getByText('Live Primates').click();
  
  // Input specific cargo measurements (weight, volume, or quantity fields)
  await page.getByRole('textbox', { name: '0.00' }).first().click();
  await page.getByRole('textbox', { name: '0.00' }).first().fill('100');
  await page.getByRole('textbox', { name: '0.00' }).nth(1).dblclick();
  await page.getByRole('textbox', { name: '0.00' }).nth(1).fill('300');
  
  // Set execution timeline details (e.g., readiness and expected delivery dates)
  await page.getByRole('textbox', { name: 'Select date' }).nth(1).click();
  await page.getByRole('button', { name: 'Saturday, July 4th,' }).click();
  
  // Move through the review, summary, and validation steps
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  
  // Submit and lock in the finalized booking details
  await page.getByRole('button', { name: 'Confirm Booking' }).click();
  
  // Verify that the success screen/header element successfully loads
  await expect(page.getByRole('heading', { name: '🎉 Booking + Finance' })).toBeVisible();
  
  // Complete the flow and exit the checkout portal
  await page.getByRole('button', { name: 'Done' }).click();
});
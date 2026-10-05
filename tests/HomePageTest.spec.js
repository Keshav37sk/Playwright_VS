const {test, expect}=require('@playwright/test');

test('Home page ', async ({page})=>{

await page.goto('https://www.tropicalsmoothiecafe.com/');

const pageTitle =page.title();
console.log('Page title is :',pageTitle);
await expect(page).toHaveTitle('Tropical Smoothie Cafe | Tropical Smoothie Near Me');

const pageURL = page.url();
console.log('Page URL is :',pageURL);
await expect(pageURL).toContain('https://www.tropicalsmoothiecafe.com/');

await page.close();
});


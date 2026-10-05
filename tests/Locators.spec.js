const {test, expect} = require('@playwright/test');


test('Locators', async ({page}) => {
    
  await page.goto('https://demoblaze.com/index.html');

  const loginButton = await page.click('id=login2');
  const usernameInput = await page.fill('id=loginusername', 'pavanol');
  const passwordInput = await page.fill('#loginpassword', 'test@123');
  const loginSubmitButton = await page.click("button[onclick='logIn()']");
  const logoutButton = await page.locator('id=logout2');

await expect(logoutButton).toBeVisible();
 
await page.close();


});


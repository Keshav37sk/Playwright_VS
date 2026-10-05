import {test, expect} from '@playwright/test';

test('test1', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');
   await page.click('#login2');
   await page.fill('#loginusername', 'pavanol');
   await page.fill('#loginpassword', 'test@123');
   await page.click("//button[normalize-space()='Log in']");
   await expect(page.locator('#logout')).toBeVisible();
});

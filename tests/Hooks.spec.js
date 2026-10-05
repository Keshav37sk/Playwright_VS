const {test, expect} = require('@playwright/test');

let page;

test.beforeAll(async({browser}) => {
   page = await browser.newPage();
   await page.goto('https://www.demoblaze.com/index.html');
   await page.click('#login2');
   await page.fill('#loginusername', 'pavanol');
   await page.fill('#loginpassword', 'test@123');
   await page.click("//button[normalize-space()='Log in']");
});

test.afterAll(async() => {
    await page.click("//a[@id='logout2']");
    await expect(page.locator("//a[normalize-space()='Log in']")).toBeVisible();
});


test('Home Page', async() => {

let elements=await page.$$("//a[@class='hrefch']")
await expect(elements).toHaveLength(9);

});

test('Add to Cart', async() => {
    await page.click("//a[normalize-space()='Samsung galaxy s6']");

         page.on('dialog', async dailog => {
         expect(dailog.message()).toContain('Product added');
        await dailog.accept();
    });
    
    await page.click("//a[normalize-space()='Add to cart']");
    await page.click("//a[normalize-space()='Cart']");
});

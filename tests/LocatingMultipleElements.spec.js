const { test, expect } = require('@playwright/test');

test('Locating multiple elements',async({page})=> {

    await page.goto('https://www.demoblaze.com/index.html');

//     const allLinks = await page.$$('a');

//     for(const link of allLinks){
//        const linktext =await link.textContent();
//        console.log(linktext);
// }

     await page.waitForSelector("//div[@id='tbodyid']//div/h4/a");
     const products = await page.$$("//div[@id='tbodyid']//div/h4/a");

        for(const product of products){
            const productName = await product.textContent();

            console.log(productName);
        }
       await page.close();

});

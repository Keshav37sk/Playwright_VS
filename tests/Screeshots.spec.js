import {test, expect} from '@playwright/test';

test('Page Screenshot ', async ({page}) => {
    await page.goto('https://tutorialsninja.com/demo/');
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'-homepage.png'});
});


test('full page Screenshot ', async ({page}) => {
    await page.goto('https://tutorialsninja.com/demo/');
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'-FullPage.png', fullPage:true});
});

test.only('Element Screenshot', async ({page}) => {  
     await page.goto('https://tutorialsninja.com/demo/');
    await page.locator('//*[@id="content"]/div[2]/div[1]').screenshot({path:'tests/Screenshots/'+Date.now()+'-Element.png'});


});
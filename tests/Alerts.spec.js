const {test,expect} = require('@playwright/test');

test.skip('Alerts', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
     
    await page.click("//button[@id='alertBtn']");
    await page.waitForTimeout(5000);
    
    await page.close();

});

test.skip('Confirm Dialog', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

      page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Press a button!');
        expect(dialog.type()).toContain('confirm');
        await dialog.accept();
        // await dialog.dismiss();
    })
    
    await page.click('#confirmBtn');
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
    
    await page.close();

    });


    test('Prompt Dialog', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

      page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.type()).toContain('prompt');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        await dialog.accept('Pavan');
        // await dialog.dismiss();
    })
    
    await page.click('#promptBtn');
    await expect(page.locator('#demo')).toHaveText('Hello Pavan! How are you today?');
    
    await page.close();

    });

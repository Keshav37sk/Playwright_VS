const { test, expect } = require('@playwright/test');
const ExcelJS = require('exceljs');

test('Capture Gift Card Elements into Excel', async ({ page }) => {

    test.setTimeout(180000);

    await page.goto(
        'https://www.tropicalsmoothiecafe.com/gift-cards',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Gift Card Elements');

    worksheet.columns = [
        { header: 'Section', key: 'section', width: 25 },
        { header: 'Element Text', key: 'elementText', width: 55 },
        { header: 'Font Family', key: 'fontFamily', width: 25 },
        { header: 'Font Weight', key: 'fontWeight', width: 15 },
        { header: 'Font Size', key: 'fontSize', width: 15 },
        { header: 'Line Height', key: 'lineHeight', width: 15 }
    ];


    // =========================================================
    // GIFT CARD ELEMENTS
    // =========================================================

    const giftCardElements = [

        {
            section: 'Gift Card',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Give the gift of Tropical'
                })
        },

        {
            section: 'Gift Card',
            locator: () =>
                page.getByText('Send a digital gift card')
        },

        {
            section: 'Gift Card',
            locator: () =>
                page.getByRole('button', {
                    name: 'Buy gift card'
                })
        },

        {
            section: 'Gift Card',
            locator: () =>
                page
                    .locator('section')
                    .filter({
                        hasText: 'Give the gift of Tropical'
                    })
                    .getByLabel('Check balance')
        },

        {
            section: 'Gift Card',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Received a gift card?'
                })
        },

        {
            section: 'Gift Card',
            locator: () =>
                page.getByText('Redeem it in seconds.')
        },

        {
            section: 'Gift Card',
            locator: () =>
                page
                    .locator('section')
                    .filter({
                        hasText: 'Received a gift card?Redeem'
                    })
                    .getByLabel('Check balance')
        },

        {
            section: 'Gift Card',
            locator: () =>
                page.getByText('Need help?')
        },

        {
            section: 'Gift Card Terms',
            locator: () =>
                page.getByRole('link', {
                    name: 'View Gift Cards Terms and'
                })
        },

        {
            section: 'How To Purchase',
            locator: () =>
                page.getByRole('heading', {
                    name: 'How to purchase digital gift'
                })
        },

        {
            section: 'How To Purchase',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Choose amount & design'
                })
        },

        {
            section: 'How To Purchase',
            locator: () =>
                page.getByText('Pick from $10, $25, $50, $100')
        },

        {
            section: 'How To Purchase',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Customize it your way'
                })
        },

        {
            section: 'How To Purchase',
            locator: () =>
                page.getByText('Tell your recipient who the')
        },

        {
            section: 'How To Purchase',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Send it'
                })
        },

        {
            section: 'How To Purchase',
            locator: () =>
                page.getByText('Deliver instantly or schedule')
        },

        {
            section: 'How To Purchase',
            locator: () =>
                page.getByRole('heading', { name: 'Enjoy!' })
        },

        {
            section: 'How To Purchase',
            locator: () =>
                page.getByText('The recipient redeems in the')
        },

               {
            section: 'How To Use',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Use it in the App'
                })
        },

        {
            section: 'How To Use',
            locator: () =>
                page.getByText('Keep your gift card at your')
        },

        {
            section: 'How To Use',
            locator: () =>
                page.getByText('Enjoy quick checkout when')
        },

        {
            section: 'About Gift Cards',
            locator: () =>
                page.getByRole('heading', {
                    name: 'About our Gift Cards'
                })
        },

        {
            section: 'About Gift Cards',
            locator: () =>
                page.getByText('Available in digital formats')
        },

        {
            section: 'Gift Card Support',
            locator: () =>
                page.getByRole('button', {
                    name: 'Contact Gift Card Support'
                })
        },
    ];


    // =========================================================
    // CAPTURE ELEMENT FUNCTION
    // =========================================================

    async function captureElement(element, index) {

        const locator = element.locator();

        try {

            await expect(locator).toBeVisible({
                timeout: 10000
            });

            const data = await locator.evaluate((el) => {

                const s = window.getComputedStyle(el);

                return {

                    elementText: el.innerText
                        .replace(/\s+/g, ' ')
                        .trim(),

                    fontFamily: s.fontFamily
                        .split(',')[0]
                        .replace(/['"]/g, '')
                        .trim(),

                    fontWeight: s.fontWeight,

                    fontSize: s.fontSize,

                    lineHeight: s.lineHeight
                };

            });


            // Ignore empty elements
            if (!data.elementText) {
                return;
            }


            console.log('\n----------------------------------------');

            console.log(
                `${index}. ${data.elementText}`
            );

            console.log(
                `Font Family: ${data.fontFamily}`
            );

            console.log(
                `Font Weight: ${data.fontWeight}`
            );

            console.log(
                `Font Size: ${data.fontSize}`
            );

            console.log(
                `Line Height: ${data.lineHeight}`
            );

            console.log(
                '----------------------------------------'
            );


            worksheet.addRow({

                section: element.section,

                ...data

            });


        } catch (error) {

            console.log(
                `\nElement ${index} was not found or not visible:`,
                element.section
            );

        }

    }


    // =========================================================
    // PROCESS ELEMENTS IN SAME ORDER
    // =========================================================

    console.log(
        '\n========================================'
    );

    console.log(
        'CAPTURING GIFT CARD ELEMENTS'
    );

    console.log(
        '========================================'
    );


    for (
        let i = 0;
        i < giftCardElements.length;
        i++
    ) {

        await captureElement(
            giftCardElements[i],
            i + 1
        );

    }


    // =========================================================
    // EXCEL FORMATTING
    // =========================================================

    worksheet.getRow(1).font = {
        bold: true
    };


    worksheet.views = [
        {
            state: 'frozen',
            ySplit: 1
        }
    ];


    worksheet.autoFilter = {
        from: 'A1',
        to: 'F1'
    };


    // =========================================================
    // CREATE EXCEL FILE
    // =========================================================

    const fileName =
        `GiftCardElements_${Date.now()}.xlsx`;


    await workbook.xlsx.writeFile(fileName);


    console.log(
        '\n========================================'
    );

    console.log(
        'Excel file created:',
        fileName
    );

    console.log(
        'Total rows:',
        worksheet.rowCount - 1
    );

    console.log(
        '========================================'
    );

});
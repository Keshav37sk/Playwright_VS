const { test, expect } = require('@playwright/test');
const ExcelJS = require('exceljs');

test('Capture Rewards Elements into Excel', async ({ page }) => {

    test.setTimeout(180000);

    await page.goto(
        'https://www.tropicalsmoothiecafe.com/rewards',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Rewards Elements');

    worksheet.columns = [
        { header: 'Order', key: 'order', width: 10 },
        { header: 'Section', key: 'section', width: 25 },
        { header: 'Element Text', key: 'elementText', width: 60 },
        { header: 'Font Family', key: 'fontFamily', width: 25 },
        { header: 'Font Weight', key: 'fontWeight', width: 15 },
        { header: 'Font Size', key: 'fontSize', width: 15 },
        { header: 'Line Height', key: 'lineHeight', width: 15 }
    ];


    // =========================================================
    // REWARDS PAGE ELEMENTS
    // Same order as provided from the website
    // =========================================================

    const rewardsElements = [

        {
            section: 'Rewards Hero',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Earn free sips and bites with'
                })
        },

        {
            section: 'Rewards Hero',
            locator: () =>
                page.getByText('Score a FREE SMOOTHIE* reward')
        },

        {
            section: 'Rewards Hero',
            locator: () =>
                page.getByRole('button', {
                    name: 'Join now'
                })
        },

        {
            section: 'Rewards Hero',
            locator: () =>
                page.getByRole('button', {
                    name: 'Log In'
                })
        },

        {
            section: 'Join Tropic Rewards',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Join Tropic Rewards®'
                })
        },

        {
            section: 'Join Tropic Rewards',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Get the most out of Tropic'
                })
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Get A FREE SMOOTHIE!'
                })
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByText(
                    'After your first purchase of just $5 or more as a Tropic Rewards® member. Enjoy'
                )
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Points stay with you'
                })
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByText('Just place an order every 6')
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Unlock an unlimited reward'
                })
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByText('Activate Tropic Mode when you')
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Enjoy a birthday reward!'
                })
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByText('We celebrate you on your big')
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Members only offers'
                })
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByText('Get access to local deals and')
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Access to digital exclusives'
                })
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByText('Your phone becomes your VIP')
        },

        {
            section: 'Rewards Benefits',
            locator: () =>
                page.getByText('Earn points and')
        },

        {
            section: 'Redeem Rewards',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Redeem for free Tropic Faves'
                })
        },

        {
            section: 'Redeem Rewards',
            locator: () =>
                page.getByText('Let your points do the work')
        },

        {
            section: 'Reward Options',
            locator: () =>
                page.getByText('Free Tropic Bowl Topping')
        },

        {
            section: 'Reward Options',
            locator: () =>
                page.getByText('Free Supplement or Add-in')
        },

        {
            section: 'Reward Options',
            locator: () =>
                page.getByText('Free Side or Cookie')
        },

        {
            section: 'Reward Options',
            locator: () =>
                page.getByText('$2 Reward')
        },

        {
            section: 'Reward Options',
            locator: () =>
                page.getByText('Free Breakfast Item')
        },

        {
            section: 'Reward Options',
            locator: () =>
                page.getByText('$5 Reward')
        },

        {
            section: 'Reward Options',
            locator: () =>
                page.getByText('Free Smoothie', {
                    exact: true
                })
        },

        {
            section: 'Reward Options',
            locator: () =>
                page.getByText('Free Flatbread or ‘Dilla')
        },

        {
            section: 'Reward Options',
            locator: () =>
                page.getByText('Free Salad, Sandwich or Wrap')
        },

        {
            section: 'Reward Options',
            locator: () =>
                page.getByText('Free Tropic Bowl', {
                    exact: true
                })
        },

        {
            section: 'Free Smoothie Referral',
            locator: () =>
                page.getByText('Treat yourself and a friend')
        },

        {
            section: 'Free Smoothie Referral',
            locator: () =>
                page.getByRole('heading', {
                    name: 'FREE Smoothie',
                    exact: true
                })
        },

        {
            section: 'Free Smoothie Referral',
            locator: () =>
                page.getByText('Share your code')
        },

        {
            section: 'Free Smoothie Referral',
            locator: () =>
                page.getByText('Invite a friend to join')
        },

        {
            section: 'Free Smoothie Referral',
            locator: () =>
                page.getByText('They spend $')
        },

        {
            section: 'Free Smoothie Referral',
            locator: () =>
                page.getByText(
                    "That's all it takes to unlock"
                )
        },

        {
            section: 'Free Smoothie Referral',
            locator: () =>
                page.getByText(
                    'You both rock a free smoothie'
                )
        },

        {
            section: 'Rewards App',
            locator: () =>
                page.getByText(
                    'Find it in the app or online'
                )
        },

        {
            section: 'Rewards Steps',
            locator: () =>
                page.getByText('1.')
        },

        {
            section: 'Rewards Steps',
            locator: () =>
                page.getByText('2.')
        },

        {
            section: 'Rewards Steps',
            locator: () =>
                page.getByText('3.')
        },

        {
            section: 'Never Miss a Moment',
            locator: () =>
                page.getByRole('heading', {
                    name: 'Never miss a moment'
                })
        },

        {
            section: 'Never Miss a Moment',
            locator: () =>
                page.getByText(
                    'Order ahead, earn rewards and'
                )
        },

        {
            section: 'About Rewards',
            locator: () =>
                page.getByRole('heading', {
                    name: 'About our Rewards'
                })
        },

        {
            section: 'Rewards Support',
            locator: () =>
               page.getByRole('button', { 
                name: 'Contact rewards support' 
            })
        }

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
                `Section: ${element.section}`
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

                order: index,

                section: element.section,

                ...data

            });


        } catch (error) {

            console.log(
                `\nElement ${index} was not found or not visible:`,
                element.section
            );

            console.log(
                `Locator text:`,
                locator
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
        'CAPTURING REWARDS PAGE ELEMENTS'
    );

    console.log(
        '========================================'
    );


    for (
        let i = 0;
        i < rewardsElements.length;
        i++
    ) {

        await captureElement(
            rewardsElements[i],
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
        to: 'G1'
    };


    // =========================================================
    // CREATE EXCEL FILE
    // =========================================================

    const fileName =
        `RewardsElements_${Date.now()}.xlsx`;


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
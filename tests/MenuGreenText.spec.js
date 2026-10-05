const { test } = require('@playwright/test');
const ExcelJS = require('exceljs');

test('Capture Web Element Properties and Font Type into Excel', async ({ page }) => {

    // Launch page
    await page.goto('https://www.tropicalsmoothiecafe.com/menu/must-try');

    // Define your application's fonts
    const PRIMARY_FONT = 'Sway';
    const SECONDARY_FONT = 'Inter';

    // Create Excel workbook
    const workbook = new ExcelJS.Workbook();

    const worksheet = workbook.addWorksheet('Web Elements');

    // Excel columns
    worksheet.columns = [
        { header: 'Element', key: 'element', width: 25 },
        { header: 'Element Text', key: 'elementText', width: 35 },
        { header: 'Selector', key: 'selector', width: 45 },
        { header: 'Font Type', key: 'fontType', width: 15 },
        { header: 'Font Family', key: 'fontFamily', width: 25 },
        { header: 'Font Size', key: 'fontSize', width: 15 },
        { header: 'Font Weight', key: 'fontWeight', width: 15 },
        { header: 'Text Color', key: 'color', width: 25 },
        { header: 'Background Color', key: 'backgroundColor', width: 25 },
        { header: 'Width', key: 'width', width: 15 },
        { header: 'Height', key: 'height', width: 15 },
        { header: 'Padding', key: 'padding', width: 25 },
        { header: 'Margin', key: 'margin', width: 25 },
        { header: 'Letter Spacing', key: 'letterSpacing', width: 20 },
        { header: 'Line Height', key: 'lineHeight', width: 20 }
    ];


    // =========================================================
    // FUNCTION TO CAPTURE ELEMENT PROPERTIES
    // =========================================================

    async function captureElement(name, locator) {

        await locator.waitFor({ state: 'visible' });

        const details = await locator.evaluate((el) => {

            const style = window.getComputedStyle(el);
            const rect = el.getBoundingClientRect();

            return {

                elementText: el.innerText.trim(),

                fontFamily: style.fontFamily,

                fontSize: style.fontSize,

                fontWeight: style.fontWeight,

                color: style.color,

                backgroundColor: style.backgroundColor,

                width: rect.width,

                height: rect.height,

                padding: style.padding,

                margin: style.margin,

                letterSpacing: style.letterSpacing,

                lineHeight: style.lineHeight
            };
        });


        // Get first font from font-family
        const actualFont = details.fontFamily
            .split(',')[0]
            .replace(/['"]/g, '')
            .trim();


        // Identify Primary / Secondary font
        let fontType;

        if (actualFont.toLowerCase() === PRIMARY_FONT.toLowerCase()) {

            fontType = 'Primary';

        } else if (actualFont.toLowerCase() === SECONDARY_FONT.toLowerCase()) {

            fontType = 'Secondary';

        } else {

            fontType = 'Other';
        }


        // Console output
        console.log('----------------------------------------');

        console.log('Element:', name);

        console.log('Element Text:', details.elementText);

        console.log('Selector:', locator.toString());

        console.log('Font Type:', fontType);

        console.log('Font Family:', actualFont);

        console.log('Font Size:', details.fontSize);

        console.log('Font Weight:', details.fontWeight);

        console.log('Text Color:', details.color);

        console.log('Background Color:', details.backgroundColor);

        console.log('Width:', details.width);

        console.log('Height:', details.height);

        console.log('Padding:', details.padding);

        console.log('Margin:', details.margin);

        console.log('Letter Spacing:', details.letterSpacing);

        console.log('Line Height:', details.lineHeight);


        // Write data into Excel
        worksheet.addRow({

            element: name,

            elementText: details.elementText,

            selector: locator.toString(),

            fontType: fontType,

            fontFamily: actualFont,

            fontSize: details.fontSize,

            fontWeight: details.fontWeight,

            color: details.color,

            backgroundColor: details.backgroundColor,

            width: details.width,

            height: details.height,

            padding: details.padding,

            margin: details.margin,

            letterSpacing: details.letterSpacing,

            lineHeight: details.lineHeight
        });
    }


    // =========================================================
    // PAGE FLOW
    // =========================================================



    // Featured
    await captureElement(
        'Featured',
        page.getByRole('heading', { name: 'Featured' })
    );


    // Most Ordered
    await captureElement(
        'Most Ordered',
        page.getByRole('heading', { name: 'Most Ordered' })
    );


    // Pair And Save - ACTION ONLY
    await page.getByRole('button', { name: 'Pair And Save' }).click();


    // Pair & Save
    await captureElement(
        'Pair & Save',
        page.getByRole('heading', { name: 'Pair & Save' })
    );


    // Smoothies - ACTION ONLY
    await page.getByRole('button', { name: 'Smoothies' }).click();


    // Fruit Blend Smoothies
    await captureElement(
        'Fruit Blend Smoothies',
        page.getByRole('heading', { name: 'Fruit Blend Smoothies' })
    );


    // Balanced Fusion Smoothies
    await captureElement(
        'Balanced Fusion Smoothies',
        page.getByRole('heading', { name: 'Balanced Fusion Smoothies' })
    );


    // Super Veggie SmoothiesDetox
    await captureElement(
        'Super Veggie SmoothiesDetox',
        page.getByText('Super Veggie SmoothiesDetox')
    );


    // Breakfast - ACTION ONLY
    await page.getByRole('button', { name: 'Breakfast' }).click();


    // Breakfast
    await captureElement(
        'Breakfast',
        page.getByRole('heading', { name: 'Breakfast' })
    );


    // Toasted Snack Rolls - ACTION ONLY
    await page.getByRole('button', { name: 'Toasted Snack Rolls' }).click();


    // Toasted Snack Rolls
    await captureElement(
        'Toasted Snack Rolls',
        page.getByRole('heading', { name: 'Toasted Snack Rolls' })
    );


    // Entrees - ACTION ONLY
    await page.getByRole('button', { name: 'Entrees' }).click();


    // Sandwiches
    await captureElement(
        'Sandwiches',
        page.getByRole('heading', { name: 'Sandwiches' })
    );


    // Flatbreads
    await captureElement(
        'Flatbreads',
        page.getByRole('heading', { name: 'Flatbreads' })
    );


    // Wraps & Bowls
    await captureElement(
        'Wraps & Bowls',
        page.getByRole('heading', { name: 'Wraps & Bowls' })
    );


    // 'Dillas
    await captureElement(
        "'Dillas",
        page.getByRole('heading', { name: "'Dillas" })
    );


    // Tropic Bowls - ACTION ONLY
    await page.getByRole('button', { name: 'Tropic Bowls' }).click();


    // Acai & More
    await captureElement(
        'Acai & More',
        page.getByRole('heading', { name: 'Acai & More' })
    );


    // Greek Yogurt & Chia Oatmeal
    await captureElement(
        'Greek Yogurt & Chia Oatmeal',
        page.getByRole('heading', { name: 'Greek Yogurt & Chia Oatmeal' })
    );


    // Kids - ACTION ONLY
    await page.getByRole('button', { name: 'Kids' }).click();


    // Kids
    await captureElement(
        'Kids',
        page.getByRole('heading', { name: 'Kids' })
    );


    // Sweets - ACTION ONLY
    await page.getByRole('button', { name: 'Sweets' }).click();


    // Sweets
    await captureElement(
        'Sweets',
        page.getByRole('heading', { name: 'Sweets' })
    );


    // Bottled Beverages - ACTION ONLY
    await page.getByRole('button', { name: 'Bottled Beverages' }).click();


    // Bottled Beverages
    await captureElement(
        'Bottled Beverages',
        page.getByRole('heading', { name: 'Bottled Beverages' })
    );


    // Sides - ACTION ONLY
    await page.getByRole('button', { name: 'Sides' }).click();


    // Sides
    await captureElement(
        'Sides',
        page.getByRole('heading', { name: 'Sides' })
    );


    // =========================================================
    // EXCEL FORMATTING
    // =========================================================

    // Make Excel header bold
    worksheet.getRow(1).font = {
        bold: true
    };


    // Freeze first row
    worksheet.views = [
        {
            state: 'frozen',
            ySplit: 1
        }
    ];


    // Add filter to header
    worksheet.autoFilter = {
        from: 'A1',
        to: 'O1'
    };


    // Save Excel file
    await workbook.xlsx.writeFile('WebElementProperties.xlsx');


    console.log('----------------------------------------');

    console.log('Excel file created successfully!');

    console.log('File: WebElementProperties.xlsx');

});
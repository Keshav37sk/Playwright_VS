const { test } = require('@playwright/test');
const ExcelJS = require('exceljs');

test('Capture Web Element Properties and Font Type into Excel', async ({ page }) => {

    await page.goto('https://www.tropicalsmoothiecafe.com/menu/must-try');

    // Elements to inspect
    const elements = [
        { name: 'Most Ordered', selector: "//h2[normalize-space()='Most Ordered']" },
        { name: 'Featured', selector: "//h2[normalize-space()='Featured']" },
    ];

    // Define your application's fonts
    const PRIMARY_FONT = 'Sway';
    const SECONDARY_FONT = 'Inter';

    // Create Excel workbook
    const workbook = new ExcelJS.Workbook();

    const worksheet = workbook.addWorksheet('Web Elements');

    // Excel columns
    worksheet.columns = [
        { header: 'Element', key: 'element', width: 20 },
        { header: 'Element Text', key: 'elementText', width: 30 },
        { header: 'Selector', key: 'selector', width: 30 },
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

    // Loop through all elements
    for (const element of elements) {

        const locator = page.locator(element.selector).first();

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
        console.log('Element:', element.name);
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

            element: element.name,

            elementText: details.elementText,

            selector: element.selector,

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

    // Save Excel file
    await workbook.xlsx.writeFile('WebElementProperties.xlsx');

    console.log('----------------------------------------');
    console.log('Excel file created successfully!');
    console.log('File: WebElementProperties.xlsx');
});
exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;

        this.productsList = page.locator(
            "//div[@id='tbodyid']/div/div/div/h4/a"
        );

        this.addtocartlink = page.locator(
            "//a[normalize-space()='Add to cart']"
        );

        this.cart = page.locator(
            "//a[normalize-space()='Cart']"
        );
    }

    async addProductToCart(productName) {

        const count = await this.productsList.count();

        for (let i = 0; i < count; i++) {

            const product = this.productsList.nth(i);

            const productText = (await product.textContent()).trim();

            if (productName === productText) {

                await product.click();

                break;
            }
        }

        // Wait for Add to Cart button
        await this.addtocartlink.waitFor({
            state: 'visible'
        });

        // Handle alert BEFORE clicking Add to Cart
        this.page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });

        // Click Add to Cart
        await this.addtocartlink.click();
    }

    async goToCart() {
        await this.cart.click();
    }
};
exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;

        this.cartTable = page.locator(
            "//tbody[@id='tbodyid']/tr/td[2]"
        );
    }

    async getCartItems(productName) {

        await this.cartTable.first().waitFor({
            state: 'visible'
        });

        const count = await this.cartTable.count();

        for (let i = 0; i < count; i++) {

            const item = this.cartTable.nth(i);

            const itemText = (await item.textContent()).trim();

            console.log("Cart item:", itemText);

            if (itemText.includes(productName)) {
                return true;
            }
        }

        return false;
    }
};
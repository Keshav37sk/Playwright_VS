exports.CartPage=

class CartPage{ 

constructor(page){
    this.page=page;
    this.cartTable=page.locator("//tbody[@id='tbodyid']/tr/td[2]");

}
    async getCartItems(productName){
        const cartItems= await this.page.$$(this.cartTable);
        for(const item of cartItems){
            const itemText= await item.textContent();
            if(itemText.includes(productName)){
                return true;
                break;
            }
        }
        return false;
    }

}

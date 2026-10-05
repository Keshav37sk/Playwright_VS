exports.HomePage=

class HomePage{

    constructor(page){  
        this.page=page;
        this.productsList=page.locator("//div[@id='tbodyid']/div/div/div/h4/a");
        this.addtocartlink=page.locator("//a[normalize-space()='Add to cart']");
        this.cart=page.locator("//a[normalize-space()='Cart']");
    }

    async  addProductToCart(prodcutName){
    const productList= await this.page.$$(this.productsList)
    for(const product of productList){

        if(product===prodcutName){
            awaitproduct.click();
            break;
        }
    }  
    
    await this.page.on('dialog',async dialog=>{
        if(daliog.message().includes('added')){
            await dialog.accept();
        }
    })

    await this.page.locator(this.addtocartlink).click();

    }
   
    async goToCart(){
        await this.page.locator(this.cart).click();
    }


}


import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('test', async ({page}) => {

    //Login to the application
    const login = new LoginPage(page);
    await login.GotoLoginPage();
    await login.Login('pavanol', 'test@123');
 
    //Home
    const home = new HomePage(page);
    await home.addProductToCart('Samsung galaxy s6');
    await home.goToCart();

    //cart 
    const cart = new CartPage(page);
   const status=await cart.getCartItems('Samsung galaxy s6');
   expect(await status).toBe(true);
});

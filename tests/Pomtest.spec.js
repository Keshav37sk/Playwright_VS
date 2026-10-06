import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('test', async ({ page }) => {

    // Login
    const login = new LoginPage(page);

    await login.GotoLoginPage();
    await login.Login('pavanol', 'test@123');

    // Home
    const home = new HomePage(page);

    await home.addProductToCart('Nexus 6');
    await home.goToCart();

    // Cart
    const cart = new CartPage(page);

    const status = await cart.getCartItems('Nexus 6');

    expect(status).toBe(true);
});
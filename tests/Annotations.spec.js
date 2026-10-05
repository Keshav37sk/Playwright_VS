import {test, expect} from '@playwright/test';

test.skip('test1', async ({ page }) => {
console.log(" Test1");
});

test.fail('test2', async ({ page }) => {
console.log(" Test2");
});

test.slow('test3', async ({ page }) => {     
console.log(" Test3");
});

test.only('test4', async ({ page }) => {
console.log(" Test4");
});

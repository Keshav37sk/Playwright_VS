const {test, expect} = require('@playwright/test');

test('test1@sanity', async ({ page }) => {
console.log(" Test1");

});


test('test2@sanity', async ({ page }) => {
console.log(" Test2");

});



test('test3@regression', async ({ page }) => {
console.log(" Test3");

});


test('test4@regression@sanity', async ({ page }) => {
console.log(" Test4");

});

test('test5@regression', async ({ page }) => {
console.log(" Test5");

});

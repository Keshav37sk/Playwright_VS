const {test,expect} = require('@playwright/test');


test.beforeAll(async () => {
    console.log("Before All");
});

test.afterAll(async () => {
    console.log("After All");
});

test.beforeEach(async () => {
    console.log("Before Each");
});

test.afterEach(async () => {
    console.log("After Each");
});

test.describe.only('Grouping1', () => {

    test('test1', async () => {
        console.log("test1");
    });

    test('test2', async () => {
        console.log("test2");
    });

});

test.describe('Grouping2', () => {

    test('test3', async () => {
        console.log("test3");
    });

    test('test4', async () => {
        console.log("test4");
    });

});
import {test, expect} from '@playwright/test';

const homeTitle = 'Credit Association';
const savingsTitle = 'Save with us';

//test.use({navigationTimeout:1000});

test('Back, forward, reload (refresh) test', async ({page}) => {
    await page.goto('/');

    await page.goto('/savings.html');
    await expect(page).toHaveTitle(savingsTitle);

    await page.goBack();
    await expect(page).toHaveTitle(homeTitle);

    await page.goForward();
    await expect(page).toHaveTitle(savingsTitle);

    await page.reload();
    await expect(page).toHaveTitle(savingsTitle)
})

test('Navigation test', async ({page}) => {
    await page.goto('/', {waitUntil: 'load', timeout:1000});
    await expect(page).toHaveTitle(homeTitle);

})

test('check error message and refresh test', async ({page}) => {
    await page.goto('/');
    await page.getByRole("button", { name: "Register", exact: true }).click();
    const warning1 = page.getByText("Valid first name is required");
    const warning2 = page.getByText("Valid last name is required");
    const warning3 = page.getByText("Please enter a valid email address");
    

    await expect(warning1).toBeVisible();
    await expect(warning2).toBeVisible();
    await expect(warning3).toBeVisible();

    await page.reload();

    await expect(warning1).toBeHidden();
    await expect(warning2).toBeHidden();
    await expect(warning3).toBeHidden();
    
})

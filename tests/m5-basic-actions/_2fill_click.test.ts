import {test, expect} from '@playwright/test'

test('filltest', async ({page}) => {
    await page.goto('/'
    );
    await page.getByLabel('First name').fill('Megan');

    await page.getByLabel('Date of birth').fill('2022-10-10');
})
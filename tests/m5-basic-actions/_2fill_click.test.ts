import {test, expect} from '@playwright/test'

test('filltest', async ({page}) => {
    await page.goto('/'
    );
    await page.getByLabel('First name').fill('Megan');

    await page.getByLabel('Date of birth').fill('2022-10-10');
})

test('click demo', async ({page}) => {
    await page.goto('/');

    const btn = page.getByRole('button', {name: 'Register'});
    await btn.click({clickCount: 5});
    await btn.click({button: 'right'})
})

test('check box', async ({page}) => {
    await page.goto('/')

    const checkbox = page.getByRole('checkbox');
    const textarea = page.locator('#textarea');
    const message = 'mmmmeeddgh'
    await checkbox.check()
    await textarea.fill(message)

    await expect(textarea).toHaveValue(message);

})

test('select box', async ({page})=> {
    page.goto('/savings.html');

    const deposit = page.getByTestId('deposit');
    const period = page.getByTestId('period');
    const result = page.getByTestId('result');

    await deposit.fill('500');

    await period.selectOption('2 Years');
    await expect(result).toContainText('After 2 Years you will earn $60.00 on your deposit');

    await period.selectOption({label: '1 year'});
    await expect(result).toContainText('After 1 Year you will earn $25.00 on your deposit');
})
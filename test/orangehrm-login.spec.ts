import { test, expect } from '@playwright/test';

test('Login test - OrangeHRM demo', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  await page.getByPlaceholder('Username').fill('Admin');


  await page.getByPlaceholder('Password').fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.screenshot({ path: 'screenshots/login-success.png' });


  await page.getByRole('img', { name: 'profile picture' }).first().click();

  await page.getByRole('menuitem', { name: 'Logout' }).click();

  await expect(page.getByPlaceholder('Username')).toBeVisible();


});


test('Login fails with wrong credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
  

    await page.getByPlaceholder('Username').fill('fakeUser');
    await page.getByPlaceholder('Password').fill('fakePassword');
    await page.getByRole('button', { name: 'Login' }).click();
  

    await expect(page.getByText('Invalid credentials')).toBeVisible();

    await page.screenshot({ path: 'screenshots/login-failed.png' });

  });


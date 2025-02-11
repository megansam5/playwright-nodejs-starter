import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("textbox", { name: "First name" }).dblclick();
  await page.getByRole("textbox", { name: "First name" }).fill("Tester");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("emaill");
  await page.getByRole("button", { name: "Register" }).click();
});

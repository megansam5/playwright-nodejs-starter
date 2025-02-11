import { test, expect } from "@playwright/test";

test("Filtering demo", async ({ page }) => {
  await page.goto("/savings.html");

  const row = page.getByRole("row").filter({ hasText: "Competition" });
  console.log(await row.textContent());

  const cell = page
    .getByRole("row")
    .filter({ hasText: "Competition" })
    .getByRole("cell")
    .nth(1);

  console.log(await cell.textContent());
});

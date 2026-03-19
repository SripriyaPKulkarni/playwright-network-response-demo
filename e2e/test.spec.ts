import { expect } from "@playwright/test";
import test from "../testmuai-setup";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = "https://ecommerce-playground.lambdatest.io";

test("API tests to check URL content", async ({ page }) => {
  const response = await page.goto(baseUrl);
  await expect(page).toHaveTitle("Your Store");

  expect(response?.status()).toBe(200);

  await page.hover(
    '//a[@role="button"]//span[@class="title"][normalize-space()="My account"]'
  );
  await page.locator("text=Login").click();
  await page.locator("#input-email").fill("lambdatestforplaywright@gmail.com");
  await page.locator('input[name="password"]').fill("lambdatestforplaywright");
  await page.locator('//input[@value="Login"]').click();

  await page
    .locator("//div[@id='entry_217822']//input[@placeholder='Search For Products']")
    .fill("Camera");

  console.log("API test flow completed, page loaded and form actions executed.");
});



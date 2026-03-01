import { expect } from "@playwright/test";
import test from "../testMuAI-setup";
import dotenv from "dotenv";
dotenv.config();

test("API tests to check URL content", async ({ page }) => {
 await page.goto("https://ecommerce-playground.lambdatest.io");


 // Expect a title "to contain" a substring.
 await expect(page).toHaveTitle("Your Store");


 await page.hover(
   '//a[@role="button"]//span[@class="title"][normalize-space()="My account"]'
 );
 await page.locator("text=Login").click();
 await page.locator("#input-email").fill("lambdatestforplaywright@gmail.com");
 await page.locator('input[name="password"]').fill("lambdatestforplaywright");
 await page.locator('//input[@value="Login"]').click();


 await page
   .locator(
     "//div[@id='entry_217822']//input[@placeholder='Search For Products']"
   )
   .fill("Camera");


 // Start waiting for the specific API response *before* clicking
 const responsePromise = page.waitForResponse(
   (response) =>
     response.url().includes("lambdatest.io") && response.status() === 200
 );
});



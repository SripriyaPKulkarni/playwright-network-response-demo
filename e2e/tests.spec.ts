import { expect } from "@playwright/test";
import test from "../testMuAI-setup";
import dotenv from "dotenv";
dotenv.config();

test("API tests headers", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  const response = await page.waitForResponse(
    (resp) => resp.url().includes("lambdatest.io") && resp.status() === 200,
    { timeout: 60000 },
  );
  const apiresponse = response.headers();
  console.log(apiresponse);
});

test("API tests response all headers method", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  const response = await page.waitForResponse(
    (resp) => resp.url().includes("lambdatest.io") && resp.status() === 200,
    { timeout: 60000 },
  );
  const apiresponse = Object.entries(response.headers());
  console.log(apiresponse);
});

test("API tests response headersArray", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  const response = await page.waitForResponse(
    (resp) => resp.url().includes("lambdatest.io") && resp.status() === 200,
    { timeout: 60000 },
  );
  const apiresponse = await response.headersArray();
  console.log(apiresponse);
});


test("API tests response OK", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your Store");
  const response = await page.waitForResponse(
    (resp) => resp.url().includes("lambdatest.io") && resp.status() === 200,
    { timeout: 60000 },
  );
  const apiresponse = response.status() === 200;
  console.log(apiresponse);
});


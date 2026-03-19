import { expect } from "@playwright/test";
import test from "../testmuai-setup";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = "https://ecommerce-playground.lambdatest.io";

test("API tests headers", async ({ page }) => {
  const response = await page.goto(baseUrl);
  await expect(page).toHaveTitle("Your Store");

  expect(response?.status()).toBe(200);
  console.log(response?.headers());
});

test("API tests response all headers method", async ({ page }) => {
  const response = await page.goto(baseUrl);
  await expect(page).toHaveTitle("Your Store");

  expect(response?.status()).toBe(200);
  const headersArray = Object.entries(response?.headers() || {});
  console.log(headersArray);
});

test("API tests response headersArray", async ({ page }) => {
  const response = await page.goto(baseUrl);
  await expect(page).toHaveTitle("Your Store");

  expect(response?.status()).toBe(200);
  const headersArray = Object.entries(response?.headers() || {});
  console.log(headersArray);
});


test("API tests response OK", async ({ page }) => {
  const response = await page.goto(baseUrl);
  await expect(page).toHaveTitle("Your Store");

  expect(response?.status()).toBe(200);
  console.log("Status OK: ", response?.status() === 200);
});


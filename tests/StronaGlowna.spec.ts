import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

let homePage: HomePage; // globalna deklaracaja instancji classy HomePage

test.beforeEach(async ({ page }) => { // zadefiniowanie kroków przed każdym testem.
  await page.goto("/"); // wywołanie zadeklarowanego linku w pliku playwright.config.ts (https://academybugs.com)
  homePage = new HomePage(page); // inicjalizacja nowej klasy HomePage i przekazanie jej bieżącej strony PlayWright.
});

test("Wejście na storę internetową academybugs", async ({ page }) => {
  // Arrange - przygotowanie elementów testowych
  // Act - wykonanie akcji
  // Assert- Sprawdzenie oczekiwanego rezultatu
  await expect(page).toHaveURL("https://academybugs.com");
});

test("Przejście na zakładkę FindBugs za pomocą lokalizatora ID", async ({ page }) => {
  // Arrange - przygotowanie elementów testowych
  // Act - wykonanie akcji
  await homePage.closePopUpTutrorial.click();
  await homePage.findBugsTabById.click();
  // Assert - Sprawdzenie oczekiwanego rezultatu
  await expect(page).toHaveURL("https://academybugs.com/find-bugs/");
});


test("Przejście na zakładkę FindBugs za pomocą wygenerowanego Lokalizatora", async ({ page }) => {
  // Arrange - przygotowanie elementów testowych
  // Act - wykonanie akcji
  await homePage.closePopUpTutrorial.click();
  await homePage.findBugsTabGen.click();
  // Assert - Sprawdzenie oczekiwanego rezultatu
  await expect(page).toHaveURL("https://academybugs.com/find-bugs/");
});

import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page; // deklaracja instacnji strony Playwrigt
    readonly findBugsTabGen: Locator;  // deklarowanie zmiennych lokalizatorów
    readonly findBugsTabById: Locator;
    readonly closePopUpTutrorial: Locator 


    //konstruktor, który przyjmuje instancje strony Playwright
    constructor(page: Page) {
        this.page = page; // deklaracja instancji
        this.findBugsTabGen = page.getByRole('link', { name: 'Find Bugs' }); // metoda pobierania lokalizacji elementów za pomoca codegen
        this.findBugsTabById = page.locator('#menu-item-561'); // metoda pobierania lokazlizacji elementów za pomocą atrybutu ID HTML.
        this.closePopUpTutrorial = page.locator('#TourTip0').locator('.pum-close'); // metoda pobierania lokazlizacji elementów za pomocą atrybutu ID, nastepnie Class HTML.
        
    }
}

# AutomaticTests_web_academybugs by GolikAlan

Projekt ten zawiera przykładowe testy automatyczne dla strony internetowej [academybugs.com](https://academybugs.com). Celem projektu jest przetestowanie podstawowych funkcji witryny oraz weryfikacja poprawności działania elementów UI.

## Opis Projektu

```bash
├── .github/                    # Konfiguracja GitHub Actions i workflow
├── pages/                      # Pliki Modelu Strony (Page Object Model) dla poszczególnych stron
│   └── HomePage.ts             # Klasa POM dla strony głównej
├── shared/                     # Wspólne klasy pomocnicze
├── tests/                      # Przypadki testowe UI
│   └── StronaGlowna.spec.ts    # Przykładowy plik specyfikacji dla strony głównej
├── .gitignore                  # Plik wykluczający pliki z systemu kontroli wersji
├── package-lock.json           # Automatycznie generowany plik blokujący dokładne wersje zależności
├── package.json                # Metadane projektu i zależności
└── playwright.config.ts        # Plik konfiguracyjny dla Playwright (baseURL, retry itp.)
```

## Kluczowe Elementy Konfiguracji Playwright

- **Base URL**: [https://academybugs.com](https://academybugs.com)
- **Retry**: Definiuje powtórzenie testów w przypadku niepowodzenia (2 razy), aby wykluczyć prawdobodobieństwo niepoprawnego załadowania strony.
- **Timeouty**: Niestandardowe timeouty dla działań testowych i oczekiwań.
- **Raporty**: Generowane są raporty HTML z Playwright i Allure.

## Aby uruchomić wszystkie testy:

npx playwright test

## Aby wygenerować raport Allure:

npx allure generate ./allure-results --clean -o ./allure-report

## Aby uruchomić serwer Allure i wyświetlić raport:

npx allure open ./allure-report

## Ograniczenia Użytkowania

Autor: GolikAlan

Ten kod jest przeznaczony wyłącznie do celów demonstracyjnych. Proszę nie kopiować ani używać bez zgody autora.

## Licencja MIT

# TODO

- [X]  **Pobranie danych użytkowników z API**
- [X]  **Wyświetlanie użytkowników w tabeli**
- [X]  **Zaimplementowanie zaawansowanego filtrowania**
- [X]  **Zarządzanie stanem aplikacji za pomocą Redux**
- [X]  **Typowanie za pomocą TypeScript**
- [X]  **Stylizacja i projekt interfejsu**
- [X]  **Testowanie aplikacji**
- [X]  **Wdrożenie aplikacji**
- [X]  **Publikacja kodu w repozytorium GitHub**
- [X]  **Opcjonalnie**: Napisanie opisu napotkanych wyzwań i zastosowanego podejścia

# 

Cel

Celem tego zadania jest ocena Twoich umiejętności tworzenia aplikacji React przy użyciu Redux (klasycznego podejścia Redux lub Redux Toolkit) i TypeScript.
Zostaniesz poproszony o zbudowanie tabeli zarządzania użytkownikami, która wyświetla informacje o użytkownikach pobrane z fikcyjnego API, wraz z wdrożeniem lokalnej funkcjonalności filtrowania. Konkretnie zademonstrujesz swoje umiejętności:

- **Budowanie tabeli zarządzania użytkownikami**: Opracowanie tabeli wyświetlającej informacje o użytkownikach, w tym

1. imię,
2. nazwa użytkownika,
3. adres e-mail
4. telefon,
   pobrane z fikcyjnego API. Projekt tabeli zależy od Ciebie i zachęcamy Cię do stworzenia układu, który jest zarówno funkcjonalny, jak i atrakcyjny wizualnie.

- **Implementacja zaawansowanego filtrowania**: Integracja funkcji wyszukiwania, która umożliwia użytkownikom filtrowanie tabeli według imienia, nazwy użytkownika, adresu e-mail i telefonu. Wyświetlone wyniki powinny aktualizować się dynamicznie podczas wpisywania przez użytkownika danych w polach wyszukiwania dla każdej kolumny.
- **Zarządzanie stanem za pomocą Redux**: Użycie Redux do zarządzania stanem aplikacji. Możesz wybrać między klasycznym podejściem Redux lub Redux Toolkit dla bardziej usprawnionego zarządzania stanem.
- **Zapewnienie bezpieczeństwa typów**: Wykorzystanie TypeScript do egzekwowania bezpieczeństwa typów w całej aplikacji webowej.

# Wymagania

### Pobierz wszystkich użytkowników:

- Użyj punktu końcowego `GET /users` z JSONPlaceholder, aby pobrać listę wszystkich użytkowników. [Dokumentacja: JSONPlaceholder](https://jsonplaceholder.typicode.com/)

### Wyświetl użytkowników w tabeli:

- Zaimplementuj tabelę z kolumnami: imię, nazwa użytkownika, adres e-mail i telefon.

### Implementacja zaawansowanego filtrowania:

- Dodaj pola wyszukiwania dla każdej kolumny (imię, nazwa użytkownika, adres e-mail, telefon).
- Upewnij się, że tabela dynamicznie filtruje wyniki na podstawie danych wprowadzonych przez użytkownika w tych polach, z aktualizacjami w czasie rzeczywistym.

### Zarządzanie stanem:

- Użyj Redux do zarządzania stanem aplikacji, w tym danymi użytkowników i stanami filtrów. Możesz wybrać między klasycznym Redux lub Redux Toolkit dla tego zadania.

### Bezpieczeństwo typów:

- Stosuj TypeScript w całej aplikacji webowej, aby zapewnić prawidłowe typowanie i zmniejszyć potencjalne błędy w czasie wykonywania. Obejmuje to wszystkie aspekty funkcjonalności aplikacji.

### Projekt i styl:

- Zaprojektuj tabelę i pola wyszukiwania, aby były przyjazne dla użytkownika i atrakcyjne wizualnie. Styl zależy od Ciebie, dążąc do czystego i skutecznego interfejsu użytkownika.

# Wyniki

- **Link do publicznego repozytorium GitHub**: Podaj link do publicznego repozytorium GitHub zawierającego Twój kod.
- **Link do opublikowanej aplikacji**: Wdróż swoją aplikację i podaj link do wersji na żywo (np. GitHub Pages, Netlify, Vercel).
- **Opcjonalnie**: Krótki opis Twojego podejścia i wszelkich napotkanych wyzwań.

<h1>Projekt na podsumowanie nauki TypeScriptu</h1>
<h3>Prosta "gra" - polegająca na przeprowadzaniu walk pomiędzy wojownikami</h3>
<h3>Dane wojowników, ich statystyki oraz nowo stworzeni wojownicy zapisywani są w bazie-danych: MariaDB </h3>

<p>Projekt miał na celu podsumowanie i przećwiczenie dotychczasowo nabytych "umiejętności"</p>
<h4>Użyte 'technologie':</h4>

- TypeScript
- Express.js
- Express-Handlebars
- MariaDB

- Plan Projektu
    - V1:
        - 1 ~~konfiguracja środowiska~~
        - 2 ~~instalacja potrzebnych paczek i konfiguracja TypeScript oraz skryptów pomocniczych~~
        - 3 ~~Konfiguracja Express oraz Folderu publiczny pliki statyczne~~
        - 4 ~~Ogólna struktura routerów - ścieżek - zaplanowanie ścieżek, jakie się pojawią~~
            - Strona główna
                - /
            - Rejestracja wojownika
                - Formularz rejestracyjny
                - Zapisanie
            - Arena walk
                - Formularz wyboru wojownika
                - Przeprowadzenie walki — log walki
            - Sala sław
                - Lista najlepszych wojowników wszechczasów
        - 5 ~~zaplanowanie widoków - ogólna struktura widoków~~
        - 6 ~~Rekordy~~
            - ~~Baza danych: Warrior-Arena~~
                - Tabele:
                    - warrior:
                        - ID (uuid) VARCHAR(36)
                        - Imie VARCHAR() - unikalne
                        - Siła TINYINT(2)
                        - Obrona TINYINT(2)
                        - Wytrzymałość TINYINT(2)
                        - Zwinność TINYINT(2)
                        - Liczba zwycięstw, domyślnie 0 INT(11)
        - 7 ~~Logika związana z tworzeniem wojowników~~
        - 8 ~~Logika związana z salą sław~~
        - 9 ~~Logika związana z areną walk~~
    - V2:
        - Log walki — dodanie ładniejszej wersji
        - Dodać front-endowy JavaScript — ułatwiający rozdawanie punków wojowników

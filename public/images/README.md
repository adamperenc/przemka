# Profesjonalne zdjęcia

Ten katalog zawiera wszystkie zdjęcia dla strony doradcy finansowego.

## Struktura katalogów:
```
images/
├── README.md              # Ten plik
├── headshot-hero.jpg      # Główne zdjęcie profilowe
├── headshot-about.jpg     # Zdjęcie w sekcji O mnie
└── avatars/               # Zdjęcia profilowe klientów
    ├── sarah-johnson.jpg
    ├── michael-chen.jpg
    ├── emily-rodriguez.jpg
    └── david-thompson.jpg
```

## Wymagane zdjęcia:

### Główne zdjęcia profilowe
#### 1. Zdjęcie w sekcji Hero
- **Nazwa pliku:** `headshot-hero.jpg`
- **Rozmiar:** 400x400px (kwadrat, zostanie wykadrowany do koła)
- **Użycie:** Główne zdjęcie w sekcji Hero
- **Format:** JPG lub PNG

#### 2. Zdjęcie w sekcji O mnie
- **Nazwa pliku:** `headshot-about.jpg`
- **Rozmiar:** 320x320px (kwadrat, zostanie wykadrowany do koła)
- **Użycie:** Profesjonalne zdjęcie w sekcji O mnie
- **Format:** JPG lub PNG

### Zdjęcia klientów
#### 3. Avatary klientów
- **Lokalizacja:** podkatalog `/avatars/`
- **Nazwy plików:**
  - `sarah-johnson.jpg`
  - `michael-chen.jpg`
  - `emily-rodriguez.jpg`
  - `david-thompson.jpg`
- **Rozmiar:** 80x80px (kwadrat, zostanie wykadrowany do koła)
- **Użycie:** Zdjęcia profilowe klientów w referencjach
- **Format:** JPG lub PNG

## Wskazówki dotyczące profesjonalnej fotografii:

1. **Zdjęcia profilowe:**
   - Zatrudnij profesjonalnego fotografa
   - Zapewnij dobre oświetlenie i profesjonalny strój
   - Preferowane czyste, neutralne tło
   - Patrz bezpośrednio w kamerę z pewnym uśmiechem
   - Wysoka rozdzielczość (minimum 400x400px)

2. **Avatary klientów:**
   - Mogą być mniej formalne niż główne zdjęcie
   - Powinny nadal wyglądać profesjonalnie
   - Spójny styl wśród wszystkich zdjęć klientów
   - Dobry kontrast dla czytelności

## Jak dodać zdjęcia:

1. **Przygotuj swoje zdjęcia:**
   - Przytnij do formatu kwadratowego (proporcje 1:1)
   - Zoptymalizuj dla internetu (poniżej 200KB dla avatarów, 500KB dla zdjęć głównych)
   - Zapisz jako wysoką jakość JPG

2. **Dodaj do katalogów:**
   - Skopiuj zdjęcia profilowe do katalogu `/images/`
   - Skopiuj avatary do katalogu `/images/avatars/`

3. **Przetestuj stronę:**
   - Odwiedź http://localhost:3000
   - Sprawdź czy wszystkie sekcje wyświetlają się poprawnie
   - Zweryfikuj czy zdjęcia ładują się prawidłowo

## Zachowanie awaryjne:
- Jeśli zdjęcia nie są dostępne, wyświetlane będą profesjonalne ikony
- Nie pojawią się ikony zepsutych obrazów
- Strona pozostaje w pełni funkcjonalna bez zdjęć

## Nazewnictwo plików:
- Używaj małych liter z myślnikami: `imie-nazwisko.jpg`
- Bądź konsekwentny w nazewnictwie
- Unikaj znaków specjalnych i spacji

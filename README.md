# 🇵🇱 Doradca Finansowy - Strona Internetowa

Profesjonalna strona internetowa doradcy finansowego w pełni zlokalizowana w języku polskim.

## ✨ Kompletna polska lokalizacja!

Twoja strona doradcy finansowego jest teraz w 100% po polsku!

### 🇵🇱 **Polska lokalizacja zakończona:**
✅ **Nazwa firmy:** "Przemek Finanse"
✅ **Nawigacja:** "o mnie", "Usługi", "Opinie", "Kontakt"
✅ **Wezwania do działania:** "Umów spotkanie" / "Umów konsultację"
✅ **Główny nagłówek:** "Pomagam pieniądzom pracować spokojnie, Bez ryzyka, bez stresu, z pełnym zrozumieniem."
✅ **Referencje:** Wszystkie opinie klientów przetłumaczone na polski
✅ **Usługi:** Problemy i rozwiązania w języku polskim
✅ **Wartości:** Etyka, Prostota, Przejrzystość, Edukacja
✅ **Formularze:** Wszystkie etykiety i pola w języku polskim
✅ **Zdjęcia profesjonalne:** Wyświetlane bez kadrowania

### 🌐 **Strona gotowa do użycia:**
**Adres:** http://localhost:3000
**Język:** Polski (Polski)
**Design:** Nowoczesny, responsywny, przyjazny dla urządzeń mobilnych
**Zdjęcia:** Pełne zdjęcia profilowe w sekcjach Hero i About

### 📁 **Aktualna konfiguracja:**
```
✅ Strona główna (polska): Hero, O mnie, Usługi, Opinie, Kontakt
✅ Strona rezerwacji (polska): Harmonogram konsultacji z polską nawigacją
✅ Zdjęcia profesjonalne: Bez kadrowania, pełne zdjęcia widoczne
✅ Design responsywny: Doskonale na wszystkich urządzeniach
```

**Twoja polska strona doradcy finansowego jest teraz kompletna i profesjonalna!** 🎉

## 🚀 Szybki start

### Instalacja zależności
```bash
npm install
```

### Uruchomienie serwera deweloperskiego
```bash
npm run dev
```

### Otwórz w przeglądarce
```
http://localhost:3000
```

## 📝 Personalizacja treści

### Edycja referencji
Edytuj `src/data.ts` aby zmienić opinie klientów:
```typescript
content: "Twoja nowa opinia po polsku...",
```

### Edycja usług
Zmień problemy i rozwiązania w `src/data.ts`:
```typescript
problem: "Twój problem finansowy...",
solution: "Jak go rozwiązuję...",
```

### Edycja wartości
Dostosuj wartości firmy w `src/data.ts`:
```typescript
title: "Twoja wartość",
description: "Opis po polsku..."
```

## 🖼️ Dodawanie zdjęć profilowych

### Główne zdjęcia (wymagane)
- `public/images/headshot-hero.jpg` - Główne zdjęcie (400x400px)
- `public/images/headshot-about.jpg` - Zdjęcie w sekcji O mnie (320x320px)

### Zdjęcia klientów (opcjonalne)
- `public/images/avatars/sarah-johnson.jpg`
- `public/images/avatars/michael-chen.jpg`
- `public/images/avatars/emily-rodriguez.jpg`
- `public/images/avatars/david-thompson.jpg`

## 🎨 Personalizacja designu

### Kolory
Edytuj `tailwind.config.js` aby zmienić schemat kolorów:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6', // Główny kolor marki
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Czcionki
Domyślnie używana jest czcionka Poppins. Zdefiniowana w `src/app/globals.css`.

## 📱 Responsywność

Strona jest w pełni responsywna i zoptymalizowana dla:
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1440px+)

## 🔧 Technologie

- **Next.js 14**: Framework React z App Router
- **TypeScript**: Bezpieczny JavaScript
- **Tailwind CSS**: Framework CSS typu utility-first
- **shadcn/ui**: Nowoczesna biblioteka komponentów UI
- **Lucide React**: Piękne ikony
- **Radix UI**: Dostępne komponenty pierwotne

## 🚀 Deployment

### Netlify (zalecane)
1. Podłącz repozytorium do Netlify
2. Ustaw `build command`: `npm run build`
3. Ustaw `publish directory`: `.next`
4. Deploy!

### Vercel
1. Podłącz repozytorium do Vercel
2. Automatyczne deployment z Git

## 📞 Kontakt

**Przemek Finanse**
Doradca finansowy specjalizujący się w planowaniu finansowym i doradztwie inwestycyjnym.

**Email:** hello@financialadvisor.com
**Telefon:** (555) 123-4567
**Godziny pracy:** Pon-Pt: 9:00-18:00

---

*Ostatnia aktualizacja: Październik 2025*

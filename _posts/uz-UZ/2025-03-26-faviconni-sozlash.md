---
title: Faviconni Sozlash
author: MrKakharov
date: 2026-01-20 12:10:00 +0500
categories:
  - Blog
  - O'rganish
tags: [Chirpy]
pin: true
last_modified_at: 2025-07-25 20:55:00 +0500
image:
  path: /web-app-manifest-512x512.png
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: Responsive rendering of Chirpy theme on multiple devices.
media_subpath: '/assets/img/articles/2025-03-26-mant-va-tipografiya'
lang: uz-UZ
---
[**Chirpy**](https://github.com/cotes2020/jekyll-theme-chirpy/) ning [favicons](https://www.favicon-generator.org/about/) `assets/img/favicons/`{: .filepath} katalogida joylashgan. Siz ularni o'zingizning favikonlaringiz bilan almashtirishni xohlashingiz mumkin. Quyidagi bo'limlar sizga standart favikonlarni yaratish va almashtirish bo'yicha ko'rsatmalar beradi.

## Favicon yaratish

512x512 yoki undan katta o'lchamdagi kvadrat rasmni (PNG, JPG yoki SVG) tayyorlang va keyin onlayn vositaga [**Real Favicon Generator**](https://realfavicongenerator.net/) o'ting va Select your Favicon image tugmasini bosib, rasm faylingizni yuklang.

Keyingi bosqichda, veb-sahifa barcha foydalanish stsenariylarini ko'rsatadi. Siz standart variantlarni saqlashingiz mumkin, sahifaning pastki qismiga o'ting va Generate your Favicons and HTML code tugmasini bosib, favikonni yarating.

## Yuklab olish va almashtirish

Yaratilgan paketni yuklab oling, zip faylini oching va quyidagi ikkita faylni o'chiring:

*   `browserconfig.xml`{: .filepath}
*   `site.webmanifest`{: .filepath}

Keyin qolgan rasm fayllarini (`.PNG`{: .filepath} va `.ICO`{: .filepath}) Jekyll saytingizdagi `assets/img/favicons/`{: .filepath} katalogidagi asl fayllarni qoplash uchun nusxalab oling. Agar Jekyll saytingizda bu katalog hali mavjud bo'lmasa, uni yarating.

Quyidagi jadval favikon fayllaridagi o'zgarishlarni tushunishingizga yordam beradi:

| Fayl(lar) | Onlayn vositadan | Chirpy'dan |
| --- | --- | --- |
| `*.PNG` | ✓   | ✗   |
| `*.ICO` | ✓   | ✗   |

> ✓ saqlashni anglatadi, ✗ o'chirishni anglatadi. {: .prompt-info }

Keyingi safar saytni qurishda, favikon moslashtirilgan nashr bilan almashtiriladi.

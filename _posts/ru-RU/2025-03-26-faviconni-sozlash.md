---
title: Настройка фавикона
author: MrKakharov
date: 2026-01-20 12:10:00 +0500
categories:
  - Blog
  - Обучение
tags: [Chirpy]
pin: true
last_modified_at: 2025-07-25 20:55:00 +0800
author: mrkakharov
image:
  path: /web-app-manifest-512x512.png
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: Responsive rendering of Chirpy theme on multiple devices.
media_subpath: '/assets/img/articles/2025-03-26-mant-va-tipografiya'
lang: ru-RU
---
[**Chirpy**](https://github.com/cotes2020/jekyll-theme-chirpy/) фавиконы находятся в каталоге `assets/img/favicons/`{: .filepath}. Вы можете заменить их на свои фавиконы. Ниже приведены разделы с инструкциями по созданию и замене стандартных фавиконов.

## Создание фавикона

Подготовьте квадратное изображение размером 512×512 или больше (PNG, JPG или SVG), затем перейдите на [**Real Favicon Generator**](https://realfavicongenerator.net/), нажмите Select your Favicon image и загрузите файл изображения.

На следующем шаге сайт покажет все сценарии использования. Можно оставить стандартные параметры, прокрутить страницу вниз и нажать Generate your Favicons and HTML code, чтобы сгенерировать фавикон.

## Скачивание и замена

Скачайте сгенерированный пакет, распакуйте ZIP-файл и удалите следующие два файла:

*   `browserconfig.xml`{: .filepath}
*   `site.webmanifest`{: .filepath}

Затем скопируйте оставшиеся файлы изображений (`.PNG`{: .filepath} и `.ICO`{: .filepath}) в каталог `assets/img/favicons/`{: .filepath} вашего Jekyll-сайта, чтобы заменить исходные файлы. Если этого каталога ещё нет, создайте его.

Ниже таблица поможет понять изменения в файлах фавиконов:

| Файл(ы) | Из онлайн-сервиса | Из Chirpy |
| --- | --- | --- |
| `*.PNG` | ✓   | ✗   |
| `*.ICO` | ✓   | ✗   |

> ✓ означает сохранить, ✗ — удалить. {: .prompt-info }

При следующей сборке сайта фавикон будет заменён на пользовательский.

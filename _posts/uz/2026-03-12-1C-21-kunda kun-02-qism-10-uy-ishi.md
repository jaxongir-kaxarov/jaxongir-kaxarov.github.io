---
title: 1C 8.3 21 kunda (02-kun, 10-qism)
description: >-
  Bu darsda **“1C программирования за 21 день”** kursining **домашнее задание №2** yechimi ko‘rib chiqiladi. Vazifa — **конца оптторг** tashkiloti uchun yangi **информационная база** yaratish va boshlang‘ich **объекты конфигурации** ni qo‘shish. Amaliyot davomida **константы**, **иерархические справочники** va **реквизиты** yaratiladi. Shuningdek **контрагенты** uchun turli **тип отношений** ni aniqlash va **ответственный менеджер** rekvizitini qo‘shish ko‘rsatiladi. Bu baza keyingi uy vazifalarida bosqichma-bosqich rivojlantiriladi.
author: MrKakharov
date: 2026-03-12 12:35:00 +0500
categories: ["1C", "1C 8.3 da dasturlash – 21 kunda"]
tags: ["1C 8.3 da dasturlash – 21 kunda"]
---

## 1C 8.3 da dasturlash – 21 kunda (02-kun, 10-qism)

{% include embed/gdrivevideo.html id='1dcYidIzA3iMrHbeaGemSO_84FvOGUtA8' %}

---

> 🇺🇿 2-Dars `topshirig'i` faylini havola orqali yuklab olishingiz mumkin:  
> [Faylni yuklab olish (PDF)](https://drive.google.com/file/d/1XPkQcESbGoqfrAHCWip-SM-M4FUK9E7y/view?usp=sharing){: target="_blank" }
> Tayyorlangan uy ishi [Faylni yuklab olish (dt)](https://drive.google.com/file/d/1P2exF6N3vqrq80qv3Nxzyd_ZmHq8wiIn/view?usp=sharing){: target="_blank" }
{: .prompt-tip .shadow }

---

## 1. Vazifa maqsadi

Bizga **конца оптторг** tashkiloti uchun yangi **конфигурация** yaratish kerak.

Bu konfiguratsiya keyinchalik:

* biznes jarayonlarni boshqarish
* savdo operatsiyalarini yuritish

uchun ishlatiladi.

Hozircha vazifa:

* **информационная база** yaratish
* kerakli **объекты конфигурации** qo‘shish.

---

## 2. Tashkilot haqida ma’lumot

Tizimda:

* **1 ta юридическое лицо**
* **1 ta склад**

mavjud.

Kelajakda kengayish rejalashtirilmagan.

Shuning uchun:

* **организация**
* **склад**

**константы** orqali belgilanadi.

Bu ma’lumotlar keyinchalik **печатные формы** da ishlatiladi.

Masalan:

* qaysi tashkilotdan **отгрузка**
* qaysi **склад** dan jo‘natilgan

ko‘rsatiladi.

---

## 3. Новый информационная база yaratish

Bosqichlar:

* 1️⃣ **список баз** ochiladi
* 2️⃣ **добавить** bosiladi
* 3️⃣ **создание новой информационной базы** tanlanadi
* 4️⃣ **без конфигурации** tanlanadi

Baza nomi:

```md
КонцОптТорг
```

Platforma:

**1C 8.3**

---

## 4. Конфигурация ochish

**Конфигуратор** ishga tushiriladi.

Keyin:

* **конфигурация**
* **открыть конфигурацию**

buyruqlari orqali konfiguratsiya ochiladi.

---

## 5. Константы yaratish

Ikki ta **константа** yaratiladi.

### 1️⃣ наименование организации

```md
НаименованиеОрганизации
```

* **тип данных → строка**
* **длина → 80 символов**

### 2️⃣ наименование склада

```md
НаименованиеСклада
```

Buni yaratish uchun:

* **Ctrl + C**
* **Ctrl + V**

orqali konstanata nusxalanadi.

---

## 6. Справочники yaratish

Uchta **иерархический справочник** yaratiladi:

```md
Номенклатура
```

```md
Контрагенты
```

```md
Сотрудники
```

Yaratishda:

**иерархический справочник**

opsiyasi yoqiladi.

Keyingi справочники:

**копирование** orqali yaratiladi.

---

## 7. Контрагенты uchun тип отношений

Har bir **контрагент** quyidagi rollarga ega bo‘lishi mumkin:

* **клиент**
* **поставщик**
* **прочие отношения**(банк, налоговая инспекция, учредитель)

---

## 8. Nega перечисление ishlatilmadi?

Dastlab quyidagi variant bo‘lishi mumkin edi:

**перечисление тип отношений**

Ammo muammo bor:

bitta **контрагент** bir vaqtning o‘zida:

* **клиент**
* **поставщик**

bo‘lishi mumkin.

Shuning uchun to‘g‘ri yechim:

**булево реквизиты**.

---

## 9. Контрагенты rekvizitlari

**контрагенты** справочники ichida quyidagi rekvizitlar yaratiladi.

### 1️⃣ клиент

**тип данных → булево**

### 2️⃣ поставщик

**тип данных → булево**

### 3️⃣ прочие отношения

**тип данных → булево**

Bu rekvizitlar **флажок** ko‘rinishida chiqadi.

---

## 10. Ответственный менеджер

Har bir **контрагент** uchun mas’ul **менеджер** belgilanadi.

Shuning uchun yangi rekvizit yaratiladi:

**ответственный менеджер**

**тип данных → справочник ссылка сотрудники**

---

## 🛠 Пользовательский режим

Endi tizim ishga tushiriladi.

**F5**

---

## 11. Константы qiymatini kiritish

**сервис** bo‘limida:

### наименование организации

```md
ООО «КанцОптТорг»
```

### наименование склада

```md
Основной склад
```

---

## 12. Номенклатура elementlari

Ikki ta mahsulot yaratiladi:

```md
Ручка
```

```md
Карандаш
```

---

## 13. Контрагенты yaratish

Misol uchun:

```md
Покупатель
```

rekvizit:

☑ **клиент**

```md
Поставщик
```

rekvizitlar:

☑ **клиент**
☑ **поставщик**

---

## 14. Сотрудники yaratish

**сотрудники** справочники ichida bir nechta xodim qo‘shiladi.

```md
Иванов
```

```md
Петров
```

Bu xodimlar keyinchalik:

* **ответственный менеджер**
* **расчет заработной платы**

uchun ishlatiladi.

---

## 15. Vazifa yakuni

Natijada:

* barcha kerakli **объекты конфигурации** yaratildi
* **константы** to‘ldirildi
* **справочники** elementlari qo‘shildi

---

## ⚠️ Muhim eslatma

Keyingi **домашние задания** aynan shu **информационная база** ga asoslanadi.

Shuning uchun:

* tajribalar uchun **alohida база** yarating
* asosiy bazani faqat **домашнее задание** uchun ishlating.

---

## 📌 Yakuniy xulosa

### Struktura

```md

├── 📂 Константы

│   ├── 📄 НаименованиеОрганизации (Строка: 80 / ООО «КанцОптТорг»)
│   └── 📄 НаименованиеСклада (Строка: 80 / Основной склад)

├── 📂 Справочники

│   ├── 📄 Номенклатура
│   │   ├── Иерархия: ✅ Да
│   │   └── Реквизиты: Нет

│   ├── 📄 Контрагенты
│   │   ├── Иерархия: ✅ Да
│   │   ├── Реквизиты:
│   │   │   ├── ЭтоКлиент (Булево)
│   │   │   ├── ЭтоПоставщик (Булево)
│   │   │   ├── ЭтоПрочиеОтношения (Булево)
│   │   │   └── ОтветственныйМенеджер (Справочник.Сотрудники)

│   └── 📄 Сотрудники
│       ├── Иерархия: ✅ Да
│       └── Реквизиты: Нет

```

Bu uy vazifasida:

* yangi **информационная база** yaratildi
* **константы** qo‘shildi
* **иерархические справочники** yaratildi
* **булево реквизиты** orqali **тип отношений** aniqlandi
* **ответственный менеджер** rekviziti qo‘shildi

Keyingi uy vazifasida esa **конфигурация funksionalligi kengaytiriladi**.

---

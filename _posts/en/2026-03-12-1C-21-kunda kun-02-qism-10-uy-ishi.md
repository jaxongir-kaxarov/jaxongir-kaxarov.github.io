---
title: 1C 8.3 21 days (Day 02, Part 10)
description: >-
  In this lesson the solution of the **“1C программирования за 21 день”** course's **домашнее задание №2** is reviewed. The task — create a new **информационная база** for the **конца оптторг** organization and add initial **объекты конфигурации**. During the practice **константы**, **иерархические справочники** and **реквизиты** are created. It also shows determining various **тип отношений** for **контрагенты** and adding the **ответственный менеджер** реквизит. This база will be developed step-by-step in subsequent homework.
author: MrKakharov
date: 2026-03-12 12:35:00 +0500
categories: ["1C", "1C 8.3 programming in 21 days"]
tags: ["1C 8.3 programming in 21 days"]
---

## 1C 8.3 programming — 21 days (Day 02, Part 10)

{% include embed/gdrivevideo.html id='1dcYidIzA3iMrHbeaGemSO_84FvOGUtA8' %}

---

> 🇺🇿 You can download the Day 2 `task` file via the link:  
> [Download file (PDF)](https://drive.google.com/file/d/1XPkQcESbGoqfrAHCWip-SM-M4FUK9E7y/view?usp=sharing){: target="_blank" }  
> Prepared homework [Download file (dt)](https://drive.google.com/file/d/1P2exF6N3vqrq80qv3Nxzyd_ZmHq8wiIn/view?usp=sharing){: target="_blank" }
{: .prompt-tip .shadow }

---

## 1. Task objective

We need to create a new **конфигурация** for the **конца оптторг** organization.

This configuration will later be used for:

* managing business processes
* handling sales operations

For now the task is:

* create an **информационная база**
* add the required **объекты конфигурации**.

---

## 2. Information about the organization

The system has:

* **1 юридическое лицо**
* **1 склад**

No expansion is planned for the future.

Therefore:

* **организация**
* **склад**

are defined via **константы**.

These values will later be used in **печатные формы**.

For example:

* from which organization an **отгрузка** was made
* which **склад** the shipment came from

will be indicated.

---

## 3. Creating a new информационная база

Steps:

* 1️⃣ open the **список баз**
* 2️⃣ click **добавить**
* 3️⃣ choose **создание новой информационной базы**
* 4️⃣ select **без конфигурации**

Database name:

```md
КонцОптТорг
```

Platform:

**1C 8.3**

---

## 4. Opening the Конфигурация

Launch the **Конфигуратор**.

Then open the configuration via:

* **конфигурация**
* **открыть конфигурацию**

commands.

---

## 5. Creating Константы

Create two **константа**.

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

To create this one:

* copy with **Ctrl + C**
* paste with **Ctrl + V**

to duplicate the константа.

---

## 6. Creating Справочники

Create three **иерархический справочник**:

```md
Номенклатура
```

```md
Контрагенты
```

```md
Сотрудники
```

When creating them enable the **иерархический справочник** option.

Subsequent справочники are created by **копирование**.

---

## 7. Тип отношений for Контрагенты

Each **контрагент** can hold the following roles:

* **клиент**
* **поставщик**
* **прочие отношения** (bank, tax inspectorate, founder)

---

## 8. Why не использовать перечисление?

At first the following option could be considered:

**перечисление тип отношений**

But there is an issue:

a single **контрагент** can simultaneously be:

* **клиент**
* **поставщик**

Therefore the correct solution is:

**булево реквизиты**.

---

## 9. Контрагенты реквизитлары

Inside the **контрагенты** справочник create the following реквизиты.

### 1️⃣ клиент

**тип данных → булево**

### 2️⃣ поставщик

**тип данных → булево**

### 3️⃣ прочие отношения

**тип данных → булево**

These реквизиты appear as **флажок** (checkbox).

---

## 10. Ответственный менеджер

Each **контрагент** gets a responsible **менеджер**.

So create a new реквизит:

**ответственный менеджер**

**тип данных → справочник ссылка сотрудники**

---

## 🛠 User mode

Now start the system.

**F5**

---

## 11. Setting Константы values

In the **сервис** section:

### наименование организации

```md
ООО «КанцОптТорг»
```

### наименование склада

```md
Основной склад
```

---

## 12. Номенклатура items

Create two products:

```md
Ручка
```

```md
Карандаш
```

---

## 13. Creating Контрагенты

For example:

```md
Покупатель
```

requisite:

☑ **клиент**

```md
Поставщик
```

requisites:

☑ **клиент**
☑ **поставщик**

---

## 14. Creating Сотрудники

Add several employees to the **сотрудники** справочник.

```md
Иванов
```

```md
Петров
```

These employees will later be used for:

* **ответственный менеджер**
* **расчет заработной платы**

---

## 15. Task result

As a result:

* all required **объекты конфигурации** were created
* **константы** were filled
* **справочники** elements were added

---

## ⚠️ Important note

Subsequent **домашние задания** are based on this same **информационная база**.

Therefore:

* create a separate база for experiments
* use the main база only for **домашнее задание**

---

## 📌 Final summary

### Structure

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

In this homework:

* a new **информационная база** was created
* **константы** were added
* **иерархические справочники** were created
* the **тип отношений** was specified via **булево реквизиты**
* the **ответственный менеджер** реквизит was added

In the next homework the **конфигурация** functionality will be expanded.

---


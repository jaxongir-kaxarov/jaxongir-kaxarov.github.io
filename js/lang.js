const langArr = {
    "name" :  {
        "ru": "Проекты 1C с Жахонгиром Кахаровым.",
        "en": "1Ci projects with Jakhongir Kakharov.",
        "uz": "Jaxongir Qaxarov bilan 1C loyihalari.",
    }, 
    "logomobile" :  {
        "ru": "Жахонгир.",
        "en": "Jakhongir.",
        "uz": "Jaxongir.",
    }, 
    "logo" :  {
        "ru": "Жахонгир.",
        "en": "Jakhongir.",
        "uz": "Jaxongir.",
    }, 
    "aboutme" :  {
        "ru": "Обо мне",
        "en": "About me",
        "uz": "Men haqimda",
    }, 
    "kurs": {
        "ru": "Курсы",
        "en": "Courses",
        "uz": "Kurslar",
    },
    "blog" :  {
        "ru": "Блог",
        "en": "Blog",
        "uz": "Blog",
    }, 
    "contacts" :  {
        "ru": "Контакты",
        "en": "Contacts",
        "uz": "Bog'lanish",
    },
    "hello" :  {
        "ru": "Всем привет!",
        "en": "Hello Everyone!",
        "uz": "Hammaga Salom!",
    },
    "iam" :  {
        "ru": "Меня зовут Джахангир, ",
        "en": "My name is Jakhongir, ",
        "uz": "Mening ismim Jaxongir, ",
    },
    "onecdev" :  {
        "ru": "я 1С разработчик ",
        "en": "I am a 1C Developer ",
        "uz": "men 1c dasturchisi ",
    },
    "coach" :  {
        "ru": "и я тренер по 1С. ",
        "en": "& I am 1C Coach. ",
        "uz": "va 1C murabbiysiman. ",
    },
    "specialist" :  {
        "ru": "Я профессионал с опытом работы менее года. Я могу не только решать проблемы самостоятельно, но и работать в команде с разработчиками или обучать начинающих разработчиков, а также у меня есть опыт предложения наилучших способов решения проблем и понимания чужого кода.",
        "en": "I am a professional with less than a year experience. I can not only solve problems on my own, but also work in a team with developers or train new developers, and I also have experience in suggesting the best ways to solve problems and understand other people's code.",
        "uz": "Men bir yildan kam tajribaga ega mutaxassisman. Men nafaqat muammolarni mustaqil hal qilish, balki dasturchilar bilan komandada ishlash, yoki boshlovchi dasturchilarga murabbiylik qilish, shuningdek muammolarni hal qilishning eng yaxshi usullarini taklif qilish va boshqa odamlarning kodini tushunish tajribasiga egaman.",
    },
    "cv" :  {
        "ru": "Скачать резюме",
        "en": "Download CV",
        "uz": "Rezyumeni yuklash ",
    },
    "about" :  {
        "ru": "Обо мне ",
        "en": "About me ",
        "uz": "Men haqimda ",
    },
    "expertise" :  {
        "ru": "Знания и опыт ",
        "en": "Expertise ",
        "uz": "Bilim va tajriba ",
    },
    "skills" :  {
        "ru": "Визуальный дизайн, Брендинг и Айдентика, Дизайн пользовательского интерфейса, Дизайн продукта, Прототипирование, Иллюстрация, C#, C, Python, Веб-разработка, Автоматизация деятельности компании на базе 1С: Предприятие и т.д.",
        "en": "Visual design, Branding and Identity, User interface design, Product design, Prototyping, Illustration, C#, C, Python, Web development, Business automation based on 1C: Enterprise, etc. ",
        "uz": "Vizual dizayn, brending va identifikatsiya, foydalanuvchi interfeysi dizayni, mahsulot dizayni, prototiplash, rasm, C#, C, Python, veb-ishlab chiqish, 1C: Enterprise asosidagi biznesni avtomatlashtirish va boshqalar. ",
    },
    "experience" :  {
        "ru": "Опыт работы",
        "en": "Experience",
        "uz": "Ish tajribasi",
    },
    "education" :  {
        "ru": "Образование",
        "en": "Education",
        "uz": "Ta'lim",
    },
    "interndev" :  {
        "ru": "Стажер-разработчик 1С",
        "en": "Intern-developer 1C",
        "uz": "Boshlovchi 1C dasturchi",
    },
    "davr" :  {
        "ru": "Февраль 2023 г. - Июль 2023 г.",
        "en": "February 2023 - July 2023",
        "uz": "Fevral 2023 - Iyul 2023",
    },
}

// const langArrSec = {
//     "muddat" :  {
//         "ru": "Февраль 2023 г. - настоящее время",
//         "en": "February 2023 - Present",
//         "uz": "Fevral 2023 - Hozirda",
//     },
//     "atcompany" :  {
//         "ru": "Вид деятельности предприятия (компании): Автоматизация финансового учета. Автоматизация бизнес-процессов. Автоматизация бизнеса.",
//         "en": "Type of activity of the enterprise (company): Automation of financial accounting. Automation of business processes. Business automation.",
//         "uz": "Korxona(kompaniya) faoliyat turi: Moliyaviy hisob-kitoblarni avtomatlashtirish. Biznes jarayonlarini avtomatlashtirish. Biznesni avtomatlashtirish.",
//     },
//     "atwork" :  {
//         "ru": "Задачи на работе: изучение языка программирования. Практическое применение полученных навыков программирования. Программирование в соответствии с техническим заданием руководителя группы или ведущего программиста или программирование путем создания технического задания на основе технических данных (функциональных требований).",
//         "en": "Tasks at work: learning a programming language. Practical application of acquired programming skills. Programming in accordance with the terms of reference of the team leader or lead programmer, or programming by creating terms of reference based on technical data (functional requirements).",
//         "uz": "Ishdagi vazifalar: dasturlash tilini o'rganish. O'zlashtirilgan dasturlash ko'nikmalarini amalda qo'llash. Guruh rahbari yoki yetakchi dasturchining texnik topshirig‘iga muvofiq dasturlash yoki texnik ma’lumotlar (funktsional talablar) asosida texnik topshiriq tuzib dasturlash.",
//     },
// }

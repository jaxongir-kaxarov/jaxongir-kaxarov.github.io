const langArr = {
  name: {
    ru: "Проекты 1C с Жахонгиром Кахаровым.",
    en: "1Ci projects with Jakhongir Kakharov.",
    uz: "Jaxongir Qaxarov bilan 1C loyihalari.",
  },
  logomobile: {
    ru: "Жахонгир.",
    en: "Jakhongir.",
    uz: "Jaxongir.",
  },
  logo: {
    ru: "Жахонгир.",
    en: "Jakhongir.",
    uz: "Jaxongir.",
  },
  aboutme: {
    ru: "Обо мне",
    en: "About me",
    uz: "Men haqimda",
  },
  kurs: {
    ru: "Курсы",
    en: "Courses",
    uz: "Kurslar",
  },
  blog: {
    ru: "Блог",
    en: "Blog",
    uz: "Blog",
  },
  contacts: {
    ru: "Контакты",
    en: "Contacts",
    uz: "Bog'lanish",
  },
  hello: {
    ru: "Всем привет!",
    en: "Hello Everyone!",
    uz: "Hammaga Salom!",
  },
  iam: {
    ru: "Меня зовут Жахонгир, ",
    en: "My name is Jakhongir, ",
    uz: "Mening ismim Jaxongir, ",
  },
  onecdev: {
    ru: "Я 1С разработчик ",
    en: "I am a 1C Developer ",
    uz: "Men 1c dasturchisi ",
  },
  coach: {
    ru: "и тренер по 1С. ",
    en: "& 1C Coach. ",
    uz: "va 1C murabbiysiman. ",
  },
  specialist: {
    ru: "Я профессионал с опытом работы менее года. Я могу не только решать проблемы самостоятельно, но и работать в команде с разработчиками или обучать начинающих разработчиков, а также у меня есть опыт предложения наилучших способов решения проблем и понимания чужого кода.",
    en: "I am a professional with less than a year experience. I can not only solve problems on my own, but also work in a team with developers or train new developers, and I also have experience in suggesting the best ways to solve problems and understand other people's code.",
    uz: "Men bir yildan kam tajribaga ega mutaxassisman. Men nafaqat muammolarni mustaqil hal qilish, balki dasturchilar bilan komandada ishlash, yoki boshlovchi dasturchilarga murabbiylik qilish, shuningdek muammolarni hal qilishning eng yaxshi usullarini taklif qilish va boshqa odamlarning kodini tushunish tajribasiga egaman.",
  },
  cv: {
    ru: "Скачать резюме",
    en: "Download CV",
    uz: "Rezyumeni yuklash ",
  },
  about: {
    ru: "Обо мне ",
    en: "About me ",
    uz: "Men haqimda ",
  },
  expertise: {
    ru: "Знания и опыт ",
    en: "Expertise ",
    uz: "Bilim va tajriba ",
  },
  skills: {
    ru: "Визуальный дизайн, Брендинг и Айдентика, Дизайн пользовательского интерфейса, Дизайн продукта, Прототипирование, Иллюстрация, C#, C, Python, Веб-разработка, Автоматизация деятельности компании на базе 1С: Предприятие и т.д.",
    en: "Visual design, Branding and Identity, User interface design, Product design, Prototyping, Illustration, C#, C, Python, Web development, Business automation based on 1C: Enterprise, etc. ",
    uz: "Vizual dizayn, brending va identifikatsiya, foydalanuvchi interfeysi dizayni, mahsulot dizayni, prototiplash, rasm, C#, C, Python, veb-ishlab chiqish, 1C: Enterprise asosidagi biznesni avtomatlashtirish va boshqalar. ",
  },
  experience: {
    ru: "Опыт работы",
    en: "Experience",
    uz: "Ish tajribasi",
  },
  interndev: {
    ru: "Стажер-разработчик 1С",
    en: "Intern-developer 1C",
    uz: "Boshlovchi 1C dasturchi",
  },
  davr1: {
    ru: "Февраль 2023 г. - Июль 2023 г.",
    en: "February 2023 - July 2023",
    uz: "Fevral 2023 - Iyul 2023",
  },
  activity1: {
    ru: "Вид деятельности предприятия (компании): Автоматизация финансового учета. Автоматизация бизнес-процессов. Автоматизация бизнеса.",
    en: "Type of activity of the enterprise (company): Automation of financial accounting. Automation of business processes. Business automation.",
    uz: "Korxona(kompaniya) faoliyat turi: Moliyaviy hisob-kitoblarni avtomatlashtirish. Biznes jarayonlarini avtomatlashtirish. Biznesni avtomatlashtirish.",
  },

  founder: {
    ru: "Основатель, тренер",
    en: "Founder, Coach",
    uz: "Ta'sischi, murabbiy",
  },
  davr2: {
    ru: "Март 2022 г. - Сентябрь 2022 г.",
    en: "March 2022 - September 2022",
    uz: "Mart 2022 - Sentabr 2022",
  },
  secactivity: {
    ru: "Вид деятельности предприятия (компании): Курсы программирования. Очная форма обучения. Занятия в мини-группах.",
    en: "Type of activity of the enterprise (company): Programming courses. Full-time education. Classes in mini-groups.",
    uz: "Korxona(kompaniya) faoliyat turi: Dasturlash kurslari. To'liq vaqtda ta'lim. Mini-guruhlarda darslar.",
  },

  education: {
    ru: "Образование",
    en: "Education",
    uz: "Ta'lim",
  },
  univer: {
    ru: "Поволжский государственный технологический университет",
    en: "Volga State University of Technology",
    uz: "Volga davlat texnologiyalar universiteti",
  },
  bachelor: {
    ru: "Степень бакалавра",
    en: "Bachelor degree",
    uz: "Bakalavr darajasi",
  },
  davr3: {
    ru: "Сентябрь 2016 г. - Сентябрь 2020 г.",
    en: "September 2016 - September 2020",
    uz: "Sentabr 2016 - Sentabr 2020",
  },
  faculty: {
    ru: "Факультет, специальность: Информационные системы и технологии (инженер-программист)",
    en: "Faculty, speciality: Information systems and technologies (programming engineer)",
    uz: "Fakultet, mutaxassislik: Axborot tizimlari va texnologiyalari (dasturlash muhandisi)",
  },
  collage: {
    ru: "Ташкентский профессиональный колледж экономики и сервиса",
    en: "Tashkent Professional College of Economics and Service",
    uz: "Toshkent iqtisodiyot va servis kolleji",
  },
  degree: {
    ru: "Степень специалиста",
    en: "Specialist Degree",
    uz: "Mutaxasis darajasi",
  },
  davr4: {
    ru: "Сентябрь 2007 г. - Сентябрь 2010 г.",
    en: "September 2007 - September 2010",
    uz: "Sentabr 2007 - Sentabr 2010",
  },
  speciality: {
    ru: "Факультет, специальность: Финансы (Финансист предприятия, финансист-экономист, специалист по лизинговым операциям, специалист по инвестициям)",
    en: "Faculty, speciality: Finance (Enterprise financier, financier-economist, leasing operations specialist, investment specialist)",
    uz: "Fakultet, mutaxassislik: Moliya (korxona moliyachisi, moliyachi-iqtisodchi, lizing operatsiyalari bo'yicha mutaxassis, investitsiya mutaxassisi)",
  },
  resent: {
    ru: "Последние работы",
    en: "Recent Works",
    uz: "Oxirgi ishlar",
  },
  projects: {
    ru: "Вот некоторые из моих любимых проектов, которые я сделал в последнее время. Не стесняйтесь проверить их.",
    en: "Here are some of my favorite projects I have done lately. Feel free to check them out.",
    uz: "Mana, yaqinda qilgan yoqtirgan loyihalarim. Ularni ko'zdan kechirib ko'ring.",
  },
  asadbek: {
    ru: "Асадбек Зиёдуллаев",
    en: "Asadbek Ziodullaev",
    uz: "Asadbek Ziyodullayev",
  },
  guys: {
    ru: "Leading, Стажер-разработчик 1С",
    en: "Leading, Intern-developer 1C",
    uz: "Leading, Boshlovchi 1C dasturchi",
  },
  asadbekxulosasi: {
    ru: "Нравится возможность заниматься в удобное для себя время, качество учебных роликов, достаточное количество практических заданий. И отклик от куратора — он всегда подскажет ответ на интересующий вопрос или предоставит ссылку на ресурс для самостоятельного ознакомления. ",
    en: "I like the opportunity to study at a convenient time for myself, the quality of training videos, a sufficient number of practical tasks. And the response from the curator - he will always tell you the answer to the question of interest or provide a link to the resource for self-acquaintance.",
    uz: "Menga o'zim uchun qulay vaqtda o'qish imkoniyati, o'quv videolari sifati, etarli miqdordagi amaliy topshiriqlar yoqadi. Va kuratorning javobi - u har doim Sizni qiziqtirgan savolga javobni aytib beradi yoki o'zingiz tanishib chiqishingiz uchun manbalarni ulashadi.",
  },

  oltinbek: {
    ru: "Олтынбек Мамаджонов",
    en: "Oltinbek Mamadjonov",
    uz: "Oltinbek Mamadjonov",
  },
  guys1: {
    ru: "Leading, Стажер-разработчик 1С",
    en: "Leading, Intern-developer 1C",
    uz: "Leading, Boshlovchi 1C dasturchi",
  },
  oltinbekxulosasi: {
    ru: "Нравится, Hо сложно. Некоторые видео приходится пересматривать несколько раз, так как у каждого спикера по-разному настроен конфигуратор. Необходимо быть гибким и использовать логику. Спасибо за предоставленную возможность развиваться учиться чему-то новому! ",
    en: "I like it, but it's difficult. Some videos have to be reviewed several times, since each speaker has a different configurator. You need to be flexible and use logic. Thank you for the opportunity to develop and learn something new!",
    uz: "Menga yoqadi, lekin bu qiyin. Ba'zi videolarni bir necha marta ko'rib chiqish kerak, chunki har bir karnayda boshqa konfigurator mavjud. Siz moslashuvchan bo'lishingiz va mantiqdan foydalanishingiz kerak. Rivojlanish va yangi narsalarni o'rganish imkoniyati uchun rahmat!",
  },
  yura: {
    ru: "Юрий Кан",
    en: "Yuri Kan",
    uz: "Yuriy Kan",
  },
  guys2: {
    ru: "KSB SOFT, Стажер-разработчик 1С",
    en: "KSB SOFT, Intern-developer 1C",
    uz: "KSB SOFT, Boshlovchi 1C dasturchi",
  },
  yuraxulosasi: {
    ru: "Мне понравился план обучения и отношение к участникам курса. К каждому - индивидуальный подход. Доволен ВСЕМ. Хотелось бы больше практики.",
    en: "I liked the training plan and the attitude towards the course participants. To each - an individual approach. Happy with EVERYTHING. Would like more practice.",
    uz: "Menga trening rejasi va kurs ishtirokchilariga munosabat yoqdi. Har biriga - individual yondashuv. HAMMA narsadan mamnunman. Ko'proq mashq qilishni xohlayman.",
  },
  get: {
    ru: "Связаться",
    en: "Get In Touch",
    uz: "Bog'lanish",
  },
  ilove: {
    ru: "Я люблю слышать от вас. Если у вас есть вопрос или вы просто хотите поговорить о Автоматизация бизнеса на базе 1С:Предприятия, дизайне, технологиях и искусстве — отправьте мне сообщение.",
    en: "I love hearing from you. If you have a question or just want to talk about Business Automation based on 1C:Enterprise, design, technology and art, send me a message.",
    uz: "Agar Sizda savol bo'lsa yoki shunchaki 1C:Enterprisega asosida biznesni avtomatlashtirish, dizayn, texnologiya va san'at haqida gaplashmoqchi bo'lsangiz, sizni eshitishdan mamnunman, menga xabar yuboring.",
  },
  reach: {
    ru: "Свяжитесь со мной в",
    en: "Reach me at",
    uz: "Menga murojaat qiling",
  },
  social: {
    ru: "Социальные сети",
    en: "Social media",
    uz: "Ijtimoiy tarmoqlar",
  },

  tchan: {
    ru: "Телеграм-канал",
    en: "Telegram channel",
    uz: "Telegram kanali",
  },
  tchat: {
    ru: "Телеграм чат",
    en: "Telegram chat",
    uz: "Telegram chat",
  },
  // "" :  {
  //     "ru": "",
  //     "en": "",
  //     "uz": "",
  // },
  // "" :  {
  //     "ru": "",
  //     "en": "",
  //     "uz": "",
  // },
  // "" :  {
  //     "ru": "",
  //     "en": "",
  //     "uz": "",
  // },
  // "" :  {
  //     "ru": "",
  //     "en": "",
  //     "uz": "",
  // },
};

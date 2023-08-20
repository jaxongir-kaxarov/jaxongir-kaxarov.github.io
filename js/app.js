const select = document.querySelector('select');
const allLang = ['en', 'ru', 'uz'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#uz';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['name'][hash];
    document.querySelector('.lng-logomobile').innerHTML = langArr['logomobile'][hash];
    document.querySelector('.lng-logo').innerHTML = langArr['logo'][hash];
    document.querySelector('.lng-aboutme').innerHTML = langArr['aboutme'][hash];
    document.querySelector('.lng-kurs').innerHTML = langArr['kurs'][hash];
    document.querySelector('.lng-blog').innerHTML = langArr['blog'][hash];
    document.querySelector('.lng-contacts').innerHTML = langArr['contacts'][hash];
    document.querySelector('.lng-hello').innerHTML = langArr['hello'][hash];
    document.querySelector('.lng-iam').innerHTML = langArr['iam'][hash];
    document.querySelector('.lng-onecdev').innerHTML = langArr['onecdev'][hash];
    document.querySelector('.lng-coach').innerHTML = langArr['coach'][hash];
    document.querySelector('.lng-specialist').innerHTML = langArr['specialist'][hash];
    document.querySelector('.lng-cv').innerHTML = langArr['cv'][hash];
    document.querySelector('.lng-about').innerHTML = langArr['about'][hash];
    document.querySelector('.lng-expertise').innerHTML = langArr['expertise'][hash];
    document.querySelector('.lng-skills').innerHTML = langArr['skills'][hash];
    document.querySelector('.lng-experience').innerHTML = langArr['experience'][hash];
    document.querySelector('.lng-education').innerHTML = langArr['education'][hash];
    document.querySelector('.lng-interndev').innerHTML = langArr['interndev'][hash];
    document.querySelector('.lng-davr').innerHTML = langArr['davr'][hash];
    // document.querySelector('.lng-muddat').innerHTML = langArrSec['muddat'][hash];
    // document.querySelector('.lng-atcompany').innerHTML = langArrSec['atcompany'][hash];
    // document.querySelector('.lng-atwork').innerHTML = langArrSec['atwork'][hash];
    // document.querySelector('.lng-').innerHTML = langArr[''][hash];
    // document.querySelector('.lng-').innerHTML = langArr[''][hash];
    // document.querySelector('.lng-').innerHTML = langArr[''][hash];
    // document.querySelector('.lng-').innerHTML = langArr[''][hash];
    // document.querySelector('.lng-').innerHTML = langArr[''][hash];
    // document.querySelector('.lng-').innerHTML = langArr[''][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
            // elem.innerHTML = langArrSec[key][hash];
        }

    }
}

changeLanguage();
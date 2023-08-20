const select = document.querySelector("select");
const allLang = ["en", "ru", "uz"];

select.addEventListener("change", changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }
  select.value = hash;

  // first page
  document.querySelector("title").innerHTML = langArr["name"][hash];
  document.querySelector(".lng-logomobile").innerHTML =
    langArr["logomobile"][hash];
  document.querySelector(".lng-logo").innerHTML = langArr["logo"][hash];
  document.querySelector(".lng-aboutme").innerHTML = langArr["aboutme"][hash];
  document.querySelector(".lng-kurs").innerHTML = langArr["kurs"][hash];
  document.querySelector(".lng-blog").innerHTML = langArr["blog"][hash];
  document.querySelector(".lng-contacts").innerHTML = langArr["contacts"][hash];

  document.querySelector(".lng-hello").innerHTML = langArr["hello"][hash];
  document.querySelector(".lng-iam").innerHTML = langArr["iam"][hash];
  // about me
  document.querySelector(".lng-onecdev").innerHTML = langArr["onecdev"][hash];
  document.querySelector(".lng-coach").innerHTML = langArr["coach"][hash];

  document.querySelector(".lng-specialist").innerHTML =
    langArr["specialist"][hash];
  document.querySelector(".lng-cv").innerHTML = langArr["cv"][hash];
  document.querySelector(".lng-about").innerHTML = langArr["about"][hash];

  document.querySelector(".lng-expertise").innerHTML =
    langArr["expertise"][hash];
  document.querySelector(".lng-skills").innerHTML = langArr["skills"][hash];
  // experience
  document.querySelector(".lng-experience").innerHTML =
    langArr["experience"][hash];

  document.querySelector(".lng-interndev").innerHTML =
    langArr["interndev"][hash];
  document.querySelector(".lng-davr1").innerHTML = langArr["davr1"][hash];
  document.querySelector(".lng-activity1").innerHTML =
    langArr["activity1"][hash];

  document.querySelector(".lng-founder").innerHTML = langArr["founder"][hash];
  document.querySelector(".lng-davr2").innerHTML = langArr["davr2"][hash];
  document.querySelector(".lng-secactivity").innerHTML =
    langArr["secactivity"][hash];
  // education
  document.querySelector(".lng-education").innerHTML =
    langArr["education"][hash];

  document.querySelector(".lng-univer").innerHTML = langArr["univer"][hash];
  document.querySelector(".lng-bachelor").innerHTML = langArr["bachelor"][hash];
  document.querySelector(".lng-davr3").innerHTML = langArr["davr3"][hash];
  document.querySelector(".lng-faculty").innerHTML = langArr["faculty"][hash];

  document.querySelector(".lng-collage").innerHTML = langArr["collage"][hash];
  document.querySelector(".lng-degree").innerHTML = langArr["degree"][hash];
  document.querySelector(".lng-davr4").innerHTML = langArr["davr4"][hash];
  document.querySelector(".lng-speciality").innerHTML =
    langArr["speciality"][hash];

  // Recent Works
  document.querySelector(".lng-resent").innerHTML = langArr["resent"][hash];
  document.querySelector(".lng-projects").innerHTML = langArr["projects"][hash];
  document.querySelector(".lng-asadbek").innerHTML = langArr["asadbek"][hash];
  document.querySelector(".lng-guys").innerHTML = langArr["guys"][hash];
  document.querySelector(".lng-asadbekxulosasi").innerHTML =
    langArr["asadbekxulosasi"][hash];

  document.querySelector(".lng-oltinbek").innerHTML = langArr["oltinbek"][hash];
  document.querySelector(".lng-guys1").innerHTML = langArr["guys1"][hash];
  document.querySelector(".lng-oltinbekxulosasi").innerHTML =
    langArr["oltinbekxulosasi"][hash];

  document.querySelector(".lng-yura").innerHTML = langArr["yura"][hash];
  document.querySelector(".lng-guys2").innerHTML = langArr["guys2"][hash];
  document.querySelector(".lng-yuraxulosasi").innerHTML =
    langArr["yuraxulosasi"][hash];

  document.querySelector(".lng-get").innerHTML = langArr["get"][hash];
  document.querySelector(".lng-ilove").innerHTML = langArr["ilove"][hash];
  document.querySelector(".lng-reach").innerHTML = langArr["reach"][hash];
  document.querySelector(".lng-social").innerHTML = langArr["social"][hash];
  document.querySelector(".lng-tchan").innerHTML = langArr["tchan"][hash];
  document.querySelector(".lng-tchat").innerHTML = langArr["tchat"][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  // document.querySelector('.lng-').innerHTML = langArr[''][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();

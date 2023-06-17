// This file contains all the necessary code that makes the frontend on susgus.se function.
document.addEventListener("contextmenu", event => event.preventDefault());
sv_SE = {
    "title": "Svenska (Sverige)",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sweden_flag_orb_icon.svg/1200px-Sweden_flag_orb_icon.svg.png",
    "home": "Hem",
    "food": "Skolmat",
    "clicker": "Spel",
    "countdowns": "Nedräkningar",
    "about": "Om Sus Gus",
    "code": "GitHub",
    "heading": "Se skolmaten.",
    "description": "Med Sus Gus kan du se skolmaten som serveras på din skola med advancerad AI-teknik som visualiserar skolmaten.",
    "main_button": "Se skolmaten",
    "secondary_button": "Annat",
    "food_loading_title": "Hämtar skolmat...",
    "food_loading_subtitle": "Var god vänta, detta kan ta en stund."
}
en_UK = {
    "title": "English (United Kingdom)",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png",
    "home": "Home",
    "food": "School food",
    "clicker": "Game",
    "countdowns": "Countdowns",
    "about": "About Sus Gus",
    "code": "GitHub",
    "heading": "See the school food.",
    "description": "With Sus Gus, you can see the food served in your school with advanced AI-technology that visualizes the school food.",
    "main_button": "See food",
    "secondary_button": "Other features",
    "food_loading_title": "Fetching food...",
    "food_loading_subtitle": "Please wait, this could take a moment."
}
function loadLanguage() {
    if(localStorage.getItem("language") == null) {
        localStorage.setItem("language", "sv_SE");
    };
    if(localStorage.getItem("language") == "sv_SE") {
        $("#home").text(sv_SE["home"]);
        $("#food").text(sv_SE["food"]);
        $("#clicker").text(sv_SE["clicker"]);
        $("#countdowns").text(sv_SE["countdowns"]);
        $("#about").text(sv_SE["about"]);
        $("#code").text(sv_SE["code"]);
        $("#title").text(sv_SE["heading"]);
        $("#description").text(sv_SE["description"]);
        $("#main_button").text(sv_SE["main_button"]);
        $("#secondary_button").text(sv_SE["secondary_button"]);
        $("#lang_text").text(sv_SE["title"]);
        $("#lang_image").attr("src", sv_SE["flag"]);
        $("#langmenu_text").text(en_UK["title"]);
        $("#langmenu_image").attr("src", en_UK["flag"]);
    } else {
        $("#home").text(en_UK["home"]);
        $("#food").text(en_UK["food"]);
        $("#clicker").text(en_UK["clicker"]);
        $("#countdowns").text(en_UK["countdowns"]);
        $("#about").text(en_UK["about"]);
        $("#code").text(en_UK["code"]);
        $("#title").text(en_UK["heading"]);
        $("#main_button").text(en_UK["main_button"]);
        $("#secondary_button").text(en_UK["secondary_button"]);
        $("#description").text(en_UK["description"]);
        $("#lang_text").text(en_UK["title"]);
        $("#lang_image").attr("src", en_UK["flag"]);
        $("#langmenu_text").text(sv_SE["title"]);
        $("#langmenu_image").attr("src", sv_SE["flag"]);
    };
};
function changeLanguage() {
    if(localStorage.getItem("language") == "en_UK") {
        localStorage.setItem("language", "sv_SE");
        loadLanguage();
    } else {
        localStorage.setItem("language", "en_UK");
        loadLanguage();
    };
};
async function reloadSchoolFood() {
  try {
    $("#food_image").attr("src", "assets/img/loading.gif");
    if (localStorage.getItem("language") == "sv_SE") {
      $("#main").text(sv_SE["food_loading_title"]);
      $("#alternative").text(sv_SE["food_loading_subtitle"]);
    } else {
      $("#main").text(en_UK["food_loading_title"]);
      $("#alternative").text(en_UK["food_loading_subtitle"]);
    }
    const response = await $.getJSON("https://susapi.emilioaliustic.repl.co/run");
    if (response.alternative === "Ledigt") {
      $("#main").text(response.data.main);
      $("#alternative").text(response.data.alternative);
    } else {
      $("#main").text(response.data.main);
      $("#alternative").text(response.data.alternative);
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    $("#food_image").attr("src", "https://susapi.emilioaliustic.repl.co/Misc/schoolFoodImage");
  } catch (error) {
    if (error.status === 404) {
         $("#food_image").attr("src", "assets/img/free.png");
    } else {
        $("#food_image").attr("src", "assets/img/error.png");
        $("#main").text("Ett fel inträffade: Programfel");
        $("#alternative").text("Kunde inte hämta skolmatsdata.");
    };
    return;
  }
};
function executePageFunctions(page) {
    loadLanguage();
    if(page == "food") {
        reloadSchoolFood();
    };
};

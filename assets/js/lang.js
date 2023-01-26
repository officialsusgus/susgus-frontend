// This file contains all the necessary code that makes the frontend on susgus.se function.
sv_SE = {
    "title": "Svenska (Sverige)",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sweden_flag_orb_icon.svg/1200px-Sweden_flag_orb_icon.svg.png",
    "home": "Hem",
    "food": "Skolmat",
    "clicker": "Spel",
    "countdowns": "Nedräkningar",
    "about": "Om Sus Gus",
    "heading": "Se skolmaten.",
    "description": "Med Sus Gus kan du se skolmaten som serveras på din skola med advancerad AI-teknik som visualiserar skolmaten.",
    "main_button": "Se skolmaten",
    "secondary_button": "Annat"
}
en_UK = {
    "title": "English (United Kingdom)",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png",
    "home": "Home",
    "food": "School food",
    "clicker": "Game",
    "countdowns": "Countdowns",
    "about": "About Sus Gus",
    "heading": "See the school food.",
    "description": "With Sus Gus, you can see the food served in your school with advanced AI-technology that visualizes the school food.",
    "main_button": "See food",
    "secondary_button": "Other features"
}
function loadLanguage() {
    if(localStorage.getItem("language") == null) {
        localStorage.setItem("language", "sv_SE");
    };
    if(localStorage.getItem("language") == "sv_SE") {
        $("#home").text(sv_SE["home"])
        $("#food").text(sv_SE["food"])
        $("#clicker").text(sv_SE["clicker"])
        $("#countdowns").text(sv_SE["countdowns"])
        $("#about").text(sv_SE["about"])
        $("#title").text(sv_SE["heading"])
        $("#description").text(sv_SE["description"])
        $("#main_button").text(sv_SE["main_button"])
        $("#secondary_button").text(sv_SE["secondary_button"])
        $("#lang_text").text(sv_SE["title"]);
        $("#lang_image").attr("src", sv_SE["flag"]);
        $("#langmenu_text").text(en_UK["title"]);
        $("#langmenu_image").attr("src", en_UK["flag"]);
    } else {
        $("#home").text(en_UK["home"])
        $("#food").text(en_UK["food"])
        $("#clicker").text(en_UK["clicker"])
        $("#countdowns").text(en_UK["countdowns"])
        $("#about").text(en_UK["about"])
        $("#title").text(en_UK["heading"])
        $("#main_button").text(en_UK["main_button"])
        $("#secondary_button").text(en_UK["secondary_button"])
        $("#description").text(en_UK["description"])
        $("#lang_text").text(en_UK["title"]);
        $("#lang_image").attr("src", en_UK["flag"]);
        $("#langmenu_text").text(sv_SE["title"]);
        $("#langmenu_image").attr("src", sv_SE["flag"]);
    };
};
loadLanguage();
function changeLanguage() {
    if(localStorage.getItem("language") == "en_UK") {
        localStorage.setItem("language", "sv_SE");
        loadLanguage();
    } else {
        localStorage.setItem("language", "en_UK");
        loadLanguage();
    };
};

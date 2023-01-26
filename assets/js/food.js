
document.addEventListener("contextmenu", event => event.preventDefault());
var kindasus = "https://cdn.discordapp.com/emojis/865333543193280522.png";
var susaf = "https://cdn.discordapp.com/emojis/938899403161362503.png";
// Sommar Edition: var themes = {"main": {"background": "https://i.imgur.com/DsKY2ej.jpg", "icon": "☀️"}, "secondary": {"background": "https://whiteguidegreen.se/wp-content/uploads/2021/06/citygross_hyllie-3840x2880.jpg", "icon": "🏬"}};
// Höst Edition: var themes = {"main": {"background": "https://i.imgur.com/1KUSvqD.jpg", "icon": "🍁"}, "secondary": {"background": "https://whiteguidegreen.se/wp-content/uploads/2021/06/citygross_hyllie-3840x2880.jpg", "icon": "🏬"}};
var themes = {"main": {"background": "assets/img/winter.jpg", "icon": "❄️"}, "secondary": {"background": "assets/img/citygross.jpg", "icon": "🏬"}};
var zero = 0;
document.head = document.head || document.getElementsByTagName("head")[0];
function changeFavicon(src) {
    var link = document.createElement("link"),
    oldLink = document.getElementById("dynamic-favicon");
    link.id = "dynamic-favicon";
    link.rel = "shortcut icon";
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    };
    document.head.appendChild(link);
};
if(localStorage.getItem("susState") == null) {
    localStorage.setItem("susState", "kindasus");
    changeFavicon(kindasus);
} else if(localStorage.getItem("susState") == "kindasus") {
    changeFavicon(kindasus);
} else if(localStorage.getItem("susState") == "susaf") {
    changeFavicon(susaf);
};
function toggleTheme() {
    if(localStorage.getItem("theme") == "main") {
        localStorage.setItem("theme", "secondary");
        var url = themes["secondary"]["background"];
        document.body.style.backgroundImage = `url('${url}')`;
        document.getElementById("emojislot").textContent = themes["secondary"]["icon"];
    } else if(localStorage.getItem("theme") == "secondary") {
        localStorage.setItem("theme", "main");
        var url = themes["main"]["background"];
        document.body.style.backgroundImage = `url('${url}')`;
        document.getElementById("emojislot").textContent = themes["main"]["icon"];
    };
};
if(localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "main");
    var url = themes["main"]["background"];
    document.body.style.backgroundImage = `url('${url}')`;
    document.getElementById("emojislot").textContent = themes["main"]["icon"];
} else if(localStorage.getItem("theme") == "main") {
    var url = themes["main"]["background"];
    document.body.style.backgroundImage = `url('${url}')`;
    document.getElementById("emojislot").textContent = themes["main"]["icon"];
} else if(localStorage.getItem("theme") == "secondary") {
    var url = themes["secondary"]["background"];
    document.body.style.backgroundImage = `url('${url}')`;
    document.getElementById("emojislot").textContent = themes["secondary"]["icon"];
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
localStorage.setItem("color", "blue");
function animationEngine() {
    document.getElementById("name").style.color = localStorage.getItem("color");
    if (localStorage.getItem("color") == "blue") {
        localStorage.setItem("color", "yellow");
    } else if (localStorage.getItem("color") == "yellow") {
        var color = localStorage.setItem("color", "blue");
    };
};
animationEngine();
setInterval(animationEngine, 500);
function disabled() {};
async function reloadSchoolFood() {
    $("#food_image").attr("src", "assets/img/loading.gif");
    $("#main").text("Hämtar skolmat...")
    $("#alternative").text("Var god vänta, detta kan ta en stund.")
    $.getJSON("https://susapi.emilioaliustic.repl.co/Misc/schoolFood", function(data) {
        if (data.alternative == "Ledigt") {
          $("#main").text(data.food);
          $("#alternative").text(data.food);
        } else {
          $("#main").text(data.food);
          $("#alternative").text(data.alternative);
        };
    });
    $.get("https://susapi.emilioaliustic.repl.co/Misc/schoolFoodImage?random=" + Math.random());
    await new Promise(r => setTimeout(r, 2000));
    $("#food_image").attr("src", "https://susapi.emilioaliustic.repl.co/Misc/schoolFoodImage?random=" + Math.random());
};
reloadSchoolFood();

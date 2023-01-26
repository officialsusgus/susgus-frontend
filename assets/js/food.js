
document.addEventListener("contextmenu", event => event.preventDefault());
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

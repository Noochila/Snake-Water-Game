var num, com;

$(".button").click(
    function (event) {
        console.log(event)
        var id = event.currentTarget;
        if (id.innerHTML == "Snake") {
            document.querySelectorAll("img")[0].setAttribute("src", "/snake.jpg")
            console.log(id.innerHTML)
            you = "s"

        }
        else if (id.innerHTML == "Gun") {
            document.querySelectorAll("img")[0].setAttribute("src", "/gun.jpg")
            console.log(id.innerHTML)
            you = "g"

        }

        else if (id.innerHTML = "Water") {
            document.querySelectorAll("img")[0].setAttribute("src", "/water.jpg")
            console.log(id.innerHTML)
            you = "w"
        }
        generate();
        num = compute(com, you);

        if (num == 0) {
            console.log("MATCH DRAW");
            $(".final p").text("Oops,MATCH DRAW!!")
        }
        if (num == 1) {
            console.log("YOU WON");
            $(".final p").text("YOU WON !!")
        }
        if (num == -1) {
            console.log("YOU LOST");
            $(".final p").text("YOU LOST !!")

        }
    }

)
function compute(com, you) {
    if (com == you) {
        return 0;
    }
    else if (com == 'g' && you == 'w') {
        return 1;
    }
    else if (com == 'g' && you == 's') {
        return -1;
    }
    else if (com == 'w' && you == 'g') {
        return -1;
    }
    else if (com == 'w' && you == 's') {
        return 1;
    }
    else if (com == 's' && you == 'w') {
        return -1;
    }
    else if (com == 's' && you == 'g') {
        return 1;
    }

}
function generate() {

    var a = Math.floor(Math.random() * 100) + 1;

    if (a < 33) {
        document.querySelectorAll("img")[1].setAttribute("src", "/snake.jpg")
        com = 's';
    }
    else if (a > 33 && a < 66) {

        document.querySelectorAll("img")[1].setAttribute("src", "/water.jpg")
        com = 'w';
    }
    else {

        document.querySelectorAll("img")[1].setAttribute("src", "/gun.jpg")
        com = 'g';
    }
}







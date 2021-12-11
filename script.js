var count = 0
var count_m = 0
var stop_num = Math.floor(Math.random() * 100)
var click = document.querySelector("#click")
var hidden = document.querySelector("#hidden")

function Click() {
    count += 1
    if (count == stop_num - 1){
        hidden.setAttribute("type", "button")
        hidden.setAttribute("class","click")
        click.setAttribute("class","reset")
        mouse_on_button()
    }
    else if (count == stop_num){
        hidden.setAttribute("type", "hidden")
        hidden.setAttribute("class","reset")
        click.setAttribute("class","click")
        stop_num = Math.floor(Math.random() * 100)
        count_m = 0
        count = 0
    }

    document.querySelector(".click").value = "Нажми На Меня!"
    document.querySelector(".reset").value = "Сброс"
    document.getElementById('count').innerHTML = count
}

function Click1() {
    document.location.href = "https://www.youtube.com/watch?v=-W2tJmIJltg"
}

function mouse_on_button(){
    hidden.onmousemove = function( event ){
        var x = event.pageX
        var y = event.pageY

        var randomX = Math.floor(Math.random() * (window.screen.width - 365))
        var randomY = Math.floor(Math.random() * (window.screen.height - 278))

        if ((x >= 0 || y >= 0) && count_m != 10){
            document.querySelector("#hidden").style.left = randomX + "px"
            document.querySelector("#hidden").style.top = randomY + "px"
            count_m += 1
        }
      }
}

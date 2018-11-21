document.addEventListener("DOMContentLoaded", function() {
    var pixel1 = document.getElementById("1")
    var red = document.getElementById("red")
    let color = ""
    red.addEventListener("click", function(){
        color = "red"
    })
    pixel1.addEventListener("click", function(){
        pixel1.classList.toggle(color)
        pixel1.classList.toggle("pixel")
        console.log(pixel1)

    })
})








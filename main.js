    function f() {
        var color = "#" + Math.floor(Math.random() * 16777215).toString()
        color = color.substring(0, 7)
        document.getElementsByTagName("body")[0].style.backgroundColor = color;
        document.getElementById("hex").textContent = color;
    }

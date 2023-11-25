let isOpened = false


function menuToggle() {
    isOpened = !isOpened

    const menuDiv = document.getElementById("menu")
    const menuSvg = document.getElementById("menu-svg")
    if (isOpened) {
        document.body.classList.add("no_scroll")
        menuDiv.classList.add("menu_open")
        menuSvg.classList.add("active")
        return
    }
    document.body.classList.remove("no_scroll")
    menuDiv.classList.remove("menu_open")
    menuSvg.classList.remove("active")
}
function write_text() {
    const elems = document.getElementsByClassName("auto-text")

    let next1 = write_line(elems[0], "THE FREE SPACE ", 0, 60)
    let next2 = write_line(elems[1], "FOR CREATION.", next1 + 200, 60)
    setTimeout(() => {
        const description = document.getElementById("meta-description")
        description.style.opacity = "1"
    }, next2 + 500)
    setTimeout(() => {
        const btn = document.getElementById("event-btn")
        btn.style.opacity = "1"
    }, next2 + 1200)
}

function write_line(elem, text, timeout = 0, speed = 100) {
    setTimeout(() => {
        for (let i in text) {
            let inter_id = setInterval(() => {
                let charElem = document.createElement("span")
                charElem.textContent = text[i]
                elem.append(charElem)
                clearInterval(inter_id)
            }, speed * i)
        }
    }, timeout)
    return speed * text.length + timeout
}

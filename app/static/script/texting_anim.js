function write_text() {
    const elems = document.getElementsByClassName("auto-text")

    let next1 = write_line(elems[0], "THE FREE SPACE ", 0, 90)
    let next2 = write_line(elems[1], "FOR CREATION.", next1 + 300, 90)
    let next3 = write_line(
        elems[2],
        "META는 공학을 향한 열정과 창의성으로 자유롭게 프로젝트를 진행합니다. ",
        next2 + 500,
        50)
    write_line(
        elems[2],
        "함께 뛰어난 아이디어를 현실로 구현하고, 새로운 기술과 경험을 서로 공유하는 공학을 위한 창작의 공간입니다.",
        next3 + 500,
        50)
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



window.onload = function() {
    footer()
}

function footer() {
    foot = document.getElementsByTagName("footer").item(0)    
    if (!foot) {
        document.getElementsByTagName("body").item(0).innerHTML +=
        `<footer>
            <a><strong>HTML</strong> Valid!</a>
            <a><strong>CSS</strong> Valid! </a>
        </footer>`
        foot = document.getElementsByTagName("footer").item(0)    
    }

    for (let i = 0; i < foot.children.length; i ++){
        let child = foot.children.item(i)
        if(child.tagName == "A") {
            if (child.innerHTML.includes("HTML")) {
                child.setAttribute("href", `http://validator.w3.org/check?uri=${window.location.href}`)
            }
            else if (child.innerHTML.includes("CSS")){
                child.setAttribute("href", `http://jigsaw.w3.org/css-validator/validator?uri=${window.location.href}?profile=css3`)
            }
        }
    }
}

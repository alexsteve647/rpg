setTimeout(function() {
    let element = document.getElementById("gamelaunch")

    if (element) {
        let src = element.src
        let reg = /placeId%3D(.*)%26accessCode%3D(.*)%26linkCode%3D(.*)%26/gm
        let result = reg.exec(src)
        let placeid = result[1]
        let accesscode = result[2]
        let linkcode = result[3]
        const bt = document.createElement("button")
        const tx = document.createTextNode("UWP")
        bt.appendChild(tx)
        bt.classList.add("btn-full-width")
        bt.classList.add("btn-common-play-game-lg")
        bt.classList.add("btn-primary-md")
        bt.classList.add("btn-min-width")
        bt.style = "width:75px;min-width:75px;margin-left:5px;position:relative; z-index:1050;"
        const di = document.getElementById("game-details-play-button-container")
        di.appendChild(bt)
        bt.addEventListener('click', () => {
            window.open(`roblox://placeID=${placeid}&accessCode=${accesscode}&linkCode=${linkcode}`, `_self`)
        });
        console.log("UWP Private Servers Loaded")
    }
},3000)

const ball  = document.querySelector(".ball")
let x= 0
let y= 0

const shortcuts = (e) => {
    const limiteBall = ball.getBoundingClientRect()
    const limiteStage = document.querySelector(".stage").getBoundingClientRect()

    switch(e.key){
        case "ArrowLeft":
            if((limiteBall.left - 10) > limiteStage.left){ 
            e.preventDefault()
            x--
            }
            break
        case "ArrowUp":
            if(limiteBall.top > limiteStage.top){
            e.preventDefault()
            y--
            }
            break
        case "ArrowRight":
            if(limiteBall.right < (limiteStage.right - 10)){
            e.preventDefault()
            x++
            }
            break 
        case "ArrowDown":
            if(limiteBall.bottom < limiteStage.bottom){
            e.preventDefault()
            y++
            }
            break
    }
    ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`

    
    
    /*console.log(e.type)
    console.log(e.key)
    console.log(e.keyCode)
    console.log(e.ctrlKey)
    console.log(e.altKey)

    if(e.key === "z" && e.altKey){
        alert("Alerta de shortcuts")
    }*/
}


export default shortcuts
import shortcuts from "./shortcuts.js"

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (e) => {
        shortcuts(e)
    })  
})
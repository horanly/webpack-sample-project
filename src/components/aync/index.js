import style from './aync.css'

const sync = function () {
    console.log("sync");
    document.getElementById("app").innerHTML = `<h1 class="${style.item}">hello webpack</h1>`
}

const isArray = function(){
    console.log("isArray");
    
}

export {
    sync,
    isArray
}
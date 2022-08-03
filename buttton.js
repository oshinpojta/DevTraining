function attackListener(){
    let count = 0;
    document.getElementById("click").addEventListener("click",function xyz(){
        console.log(count++)
    })
}
attackListener();

this.addEventListener("DOMContentLoaded",()=>{console.log("DOM has loaded")})
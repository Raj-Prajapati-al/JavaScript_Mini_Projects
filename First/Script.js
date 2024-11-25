let colorElement = document.querySelectorAll(".items");
let body = document.querySelector("body");

colorElement.forEach( (item)  => {

    item.addEventListener('click',(e)=> {
        if(e.target.id === "item1")
        {
            body.style.backgroundColor = "aqua";
        }
        if(e.target.id === "item2")
        {
            body.style.backgroundColor = "gold";
        }
        if(e.target.id === "item3")
        {
            body.style.backgroundColor = "bisque";
        }
        if(e.target.id === "item4")
        {
            body.style.backgroundColor = "aquamarine";
        }
        if(e.target.id === "item5")
        {
            body.style.backgroundColor = "darkorchid";
        }
        if(e.target.id === "item6")
        {
            body.style.backgroundColor = "brown";
        }
    })
   
})
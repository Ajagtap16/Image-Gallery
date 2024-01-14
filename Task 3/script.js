const itemfilter=document.querySelector(".items");
const itemimg=document.querySelectorAll(".image");

window.onload = ()=>{
    itemfilter.onclick=(selectedItem)=>{
        if(selectedItem.target.classList.contains("image")){
            itemfilter.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filtername = selectedItem.target.getAttribute("data-name");
            itemimg.forEach((image)=>{
                let itemImages = image.getAttribute("data-name");
                console.log(itemImages);
                if((itemImages == filtername) || filtername=="all"){
                    image.classList.remove("hide");
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
    for (let index = 0; index < itemimg.length; index++) {
        itemimg[index].setAttribute("onclick","preview(this)");
        
    }
}

const previewbox=document.querySelector(".box"),
previewImg= previewbox.querySelector("img"),
categoryName= previewbox.querySelector(".title p"),
crossIcon=previewbox.querySelector(".icon");


function preview(element){
    let selectedImg = element.querySelector("img").src;
    let selectedImgCat =element.getAttribute("data-name");
    categoryName.textContent=selectedImgCat;
    previewImg.src= selectedImg;
    console.log(selectedImg);
    previewbox.classList.add("show");
    crossIcon.onclick = ()=>{
        previewbox.classList.remove("show"); 
    }
}


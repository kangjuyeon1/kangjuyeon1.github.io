//모든 article 요소를 변수 items에 저장
const items = document.querySelectorAll("article");

//article 요소의 개수만큼 반복
for(let el of items){
    el.addEventListener("mouseenter", e=>{
        e.currentTarget.querySelector("video").play();
    });
    el.addEventListener("mouseleave", e=>{
        e.currentTarget.querySelector("video").pause();
    });
}

const aside = document.querySelector("aside");
const close = aside.querySelector("span");


el.addEventListener("click", e=>{
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src",vidSrc);


    aside.querySelector("video").play();
    aside.classList.add("on");
})


for(let el of items){
    close.addEventListener("click",()=>{
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    })
}
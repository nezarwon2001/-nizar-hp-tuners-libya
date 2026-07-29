// تأثير بسيط عند تحميل الموقع
window.onload = function(){
    console.log("Nizar HP Tuners Libya Website Loaded");
};


// زر واتساب متحرك
let btn = document.querySelector(".btn");

if(btn){
    btn.addEventListener("mouseenter", function(){
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", function(){
        btn.style.transform = "scale(1)";
    });
}

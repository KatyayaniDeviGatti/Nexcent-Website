// sticky navbar using js
var nav = document.querySelector('nav');
window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 0)
    {
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
})


// color navigation using js
var home = document.getElementById('home');
home.style.color = "#5d9bf9";

var service = document.getElementById("service");
service.style.color = "#5bef4c";

var feature = document.getElementById("Feature");
feature.style.color = "#f6c983";

var product = document.getElementById("Product");
product.style.color ="#66e39f";

var test = document.getElementById("testimonial");
test.style.color = "#f14b60";

var faq = document.getElementById("faq");
faq.style.color = "#4747fe";

//popup alert when signup is clicked

var signup = document.getElementById("signUp");
var account = document.getElementById("create-account");

signup.addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
})
account.addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})

// dropdown menu using js
var dropdownBtn = document.querySelector("#Feature");
var dropdown = document.querySelector(".list-items");
var downarrow = document.querySelector(".down-arrow");
var arrow = document.getElementById("arrow-rotate");
downarrow.addEventListener("click",function(){
    dropdown.classList.toggle('show');
    arrow.classList.toggle("arrow-rotate");
    
})





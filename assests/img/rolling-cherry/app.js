var years = document.getElementById("years");
function copyRight() {
    var date = new Date();
    years.innerHTML = date.getFullYear();
}
copyRight();

var openBtn = document.getElementById('openBtn');
var off_menu = document.getElementById('off_menu');

function openNav() {
    off_menu.style.width = "80%";
}
function closeNav() {
    off_menu.style.width = "0%";

}


var preBtn = document.querySelector('.pre');
var nextBtn = document.querySelector('.next');
var indicators = document.querySelector('.indicators .line span');
var indicatorsItem = document.querySelectorAll('.indicators p');
var form = document.querySelector('form');
var forms = document.querySelectorAll('form .tab');

var count = 0;
forms[count].classList.add('show');
indicators.style.width = `${count}%`;
indicatorsItem[count].classList.add('active');


if (count == 0) {
    preBtn.style.visibility = "hidden";
}
else {
    preBtn.style.visibility = "visible";
}



nextBtn.addEventListener("click", function () {

    event.preventDefault();

    var textarea = document.getElementById('textarea');

    var Allinput = forms[count].querySelectorAll(".form-control");

    for(j=0; j<Allinput.length; j++){
     if(Allinput[j].value==="" || !Allinput[j].checkValidity()){
       Allinput[j].style.borderColor = "red";
       setTimeout(function(){
        Allinput[j].style.borderColor = "#fff";
       },1000)
        return false;
     }
    }

    count += 1;


    if (count >= forms.length) {
        openModal();


    }
    else {
        for (j = 0; j < forms.length; j++) {
            forms[j].classList.remove('show');
            indicatorsItem[j].classList.remove('active');
        }
        for (j = 0; j < count; j++) {
            indicatorsItem[j].classList.add('active');

        }
    }

    forms[count].classList.add('show');
    indicators.style.width = `${count * 50}%`;
    indicatorsItem[count].classList.add('active');
    if (count == 0) {
        preBtn.style.visibility = "hidden";
    }
    else {
        preBtn.style.visibility = "visible";
    }
    if (count === forms.length - 1) {
        nextBtn.innerHTML = "Book a repair";
    }
    else {
        nextBtn.innerHTML = "Next";
    }
});

preBtn.addEventListener("click", function () {
    event.preventDefault();
    count -= 1;

    for (j = 0; j < forms.length; j++) {
        forms[j].classList.remove('show');
        indicatorsItem[j].classList.remove('active');
    }
    for (j = 0; j < count; j++) {
        indicatorsItem[j].classList.add('active');

    }

    forms[count].classList.add('show');
    indicators.style.width = `${count * 50}%`;
    indicatorsItem[count].classList.add('active');
    if (count == 0) {
        preBtn.style.visibility = "hidden";
    }
    else {
        preBtn.style.visibility = "visible";


    }
    if (count == 0) {
        preBtn.style.visibility = "hidden";
    }
    else {
        preBtn.style.visibility = "visible";
    }
    if (count === forms.length - 1) {
        nextBtn.innerHTML = "Next";
    }
    else {
        nextBtn.innerHTML = "Next";
    }

});

function closeModal() {
    var close = document.getElementById('close');
    close.style.display = "none";
    setTimeout(function () {
        location.reload();

    }, 1000)
}

function openModal() {
    var close = document.getElementById('close');
    close.style.display = "block";
}

var apple = document.getElementById('apple');
var samsung = document.getElementById('samsung');
var loader = document.getElementById('loader');
function showTypeApple() {
    apple.style.display = "block";
    samsung.style.display = "none";
}
function showTypeSam() {
    samsung.style.display = "block";
    apple.style.display = "none";
}

var barndIphhone = document.getElementById('barndIphhone');
var barndPhoneSam = document.getElementById('barndPhoneSam');

function showBrandIphone(){
    barndIphhone.style.display = "block";
    barndPhoneSam.style.display = "none";
}

function showBrandSamPhone(){
    barndPhoneSam.style.display = "block";
    barndIphhone.style.display = "none";
}

function issues(){
    var issues = document.getElementById('issues');
    issues.style.display = "block";
}



var obj = {

    Iphone: {
        phone: [
                {
                    "title" : "Iphone  13 pro",
                     "ImageURL" : "https://iphonerepair.pk/public/uploads/mobile_repair/001-apple-gray.png"
                }
        ],
        Ipad: [
            {
                "title" : "Ipad  13 pro",
                 "ImageURL" : "https://iphonerepair.pk/public/uploads/mobile_repair/001-apple-gray.png",
            }
        ]
    },

    Samsung: {
        phone: [
            {
                "title" : "Samsung  13 pro",
                 "ImageURL" : "https://iphonerepair.pk/public/uploads/mobile_repair/001-apple-gray.png"
            }
    ],
    Ipad: [
        {
            "title" : "SamsungIpad  13 pro",
             "ImageURL" : "https://iphonerepair.pk/public/uploads/mobile_repair/001-apple-gray.png",
        }
    ]
    },
}

var main = document.querySelector('.main');
for(key in obj){
    
    main.innerHTML += `
      <div class="card brands">
           <p>${key}</p>
      </div>
    `
}

main.addEventListener("click",function(event){
    var brands = event.target.closest(".brands")
    var data = obj[brands.innerText]
    for(key in data){
        console.log(data[key])
    }
})
    




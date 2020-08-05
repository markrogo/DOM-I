const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


//rebuild navbar
let navNL = document.querySelectorAll('nav a');

// is there a different way to do this??
let anchors = Object.values(siteContent.nav);
anchors.pop();

for (i=0; i < anchors.length; i++) {
  console.log (anchors[i]);
  navNL[i].textContent = anchors[i];
  navNL[i].style.color = 'green';
};

//prepend and append new items to nav
const rearAnchor = document.createElement('a');
rearAnchor.textContent = "Last";
rearAnchor.style.color = "red";

const frontAnchor = document.createElement('a');
frontAnchor.textContent = "First";
frontAnchor.style.color = "blue";


const navAll = document.querySelector('nav');

navAll.prepend(frontAnchor);
navAll.appendChild(rearAnchor);


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// rebuild middle secion
const head = document.querySelector('h1');
let newH1Str = (siteContent["cta"]["h1"]);
let h1array = newH1Str.split(" ");
head.innerHTML = h1array[0] + "<br />" + h1array[1] + "<br />" + h1array[2];


let buttonText = document.querySelector('.cta button');
buttonText.textContent = (siteContent["cta"]["button"]);

let codeImg = document.getElementById("cta-img");
codeImg.setAttribute('src', siteContent["cta"]["img-src"]);

//rebuild texty section
let blocks = Object.values(siteContent["main-content"]);
blocks.splice(4,1); // take out image and give array on heads and text blocks

let headsNL = document.querySelectorAll(".text-content h4");
let textNL = document.querySelectorAll(".text-content p");
const headsArray = blocks.filter (function (element, index) {
  return (index % 2 === 0);
});
const textArray = blocks.filter (function (element, index) {
  return (index % 2 === 1);
});

for (i=0; i < headsArray.length; i++) {
  headsNL[i].textContent = headsArray[i];
  textNL[i].textContent = textArray[i];
};

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//rebuild contact section and footer

let contactStuff = Object.values(siteContent["contact"]);
console.log (contactStuff);

const contactHead = document.querySelector(".contact h4");
contactHead.textContent = (contactStuff[0]);
contactStuff.shift();

let contactNL = document.querySelectorAll(".contact p");

contactFirst = contactStuff[0].substring(0, contactStuff[0].indexOf("Somewhere"));
console.log (contactFirst);
contactSecond = contactStuff[0].substring(contactStuff[0].indexOf("Somewhere"), contactStuff[0].length);
console.log (contactSecond);


console.log (contactStuff);

for (i=0; i <contactStuff.length; i++) {
  contactNL[i].textContent = contactStuff[i];
  // console.log (contactNL[i]);
}
contactNL[0].innerHTML = contactFirst + "<br />" + contactSecond;


const footText = document.querySelector("footer");
footText.textContent = (siteContent["footer"]["copyright"]);



// restyle nav -- COMMENT THIS OUT TO GET THE CLONE
navAll.style.backgroundColor = 'lightgrey';
navAll.style.padding = '2%';
head.style.color = "blue";
let direction = document.querySelector('.cta');
direction.style.backgroundColor = 'pink';
direction.style.flexDirection = 'row-reverse';
const miniHeads = document.querySelectorAll('h4');
miniHeads.forEach ((element) => {
  element.style.color = 'red';});
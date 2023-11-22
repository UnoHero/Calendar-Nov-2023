 // Get links by their IDs
 var link1 = document.getElementById('link1');
 var link2 = document.getElementById('link2');
 var link3 = document.getElementById('link3');
 var link4 = document.getElementById('link4');
 var link5 = document.getElementById('link5');
 var link6 = document.getElementById('link6');
 var link7 = document.getElementById('link7');
 var link8 = document.getElementById('link8');
 var link9 = document.getElementById('link9');
 var link10 = document.getElementById('link10');
 var link11 = document.getElementById('link11');
 var link12 = document.getElementById('link12');
 var link13 = document.getElementById('link13');
 var link14 = document.getElementById('link14');
 var link15 = document.getElementById('link15');
 var link16 = document.getElementById('link16');
 var link17 = document.getElementById('link17');
 var link18 = document.getElementById('link18');
 var link19 = document.getElementById('link19');
 var link20 = document.getElementById('link20');
 var link21 = document.getElementById('link21');
 var link22 = document.getElementById('link22');
 var link23 = document.getElementById('link23');
 var link24 = document.getElementById('link24');
 var link25 = document.getElementById('link25');
 var link26 = document.getElementById('link26');
 var link27 = document.getElementById('link27');
 var link28 = document.getElementById('link28');
 var link29 = document.getElementById('link29');
 var link30 = document.getElementById('link30');


//locked date colors
let date = parseInt(new Date().toISOString().split('-')[2].split('T')[0], 10); // Convert today to a number
let list = [link1, link2, link3, link4, link5, link6, link7, link8, link9, link10, link11, link12, link13, link14, link15, link16, link17, link18, link19, link20, link21, link22, link23, link24, link25, link26, link27, link28, link29, link30]

list.forEach(element => {
  if (element.innerText > date) {
    element.style.color = "red"

  } 
  if (element.innerText == date) {
    element.style.background = "lightgreen"

  } 
});


// date restricted

document.addEventListener('DOMContentLoaded', function () {
  // Get today's date in the format 'YYYY-MM-DD'
  var today = new Date().toISOString().split('T')[0];

 

  // Set the dates for each link
  var link1Date = '2023-11-1';
  var link2Date = '2023-11-2';
  var link3Date = '2023-10-3';
  var link4Date = '2023-10-4';
  var link5Date = '2023-10-5';
  var link6Date = '2023-10-6';
  var link7Date = '2023-10-7';
  var link8Date = '2023-10-8';
  var link9Date = '2023-10-9';
  var link10Date = '2023-10-10';
  var link11Date = '2023-10-11';
  var link12Date = '2023-11-12';
  var link13Date = '2023-11-13';
  var link14Date = '2023-11-14';
  var link15Date = '2023-11-15';
  var link16Date = '2023-11-16';
  var link17Date = '2023-11-17';
  var link18Date = '2023-11-18';
  var link19Date = '2023-11-19';
  var link20Date = '2023-11-20';
  var link21Date = '2023-11-21';
  var link22Date = '2023-11-22';
  var link23Date = '2023-11-23';
  var link24Date = '2023-11-24';
  var link25Date = '2023-11-25';
  var link26Date = '2023-11-26';
  var link27Date = '2023-11-27';
  var link28Date = '2023-11-28';
  var link29Date = '2023-11-29';
  var link30Date = '2023-11-30';
  // Add more dates as needed

  // Check if the link date is later than today, and prevent the link if true
if (link1Date > today) {
      link1.setAttribute('href', '#');
}

if (link2Date > today) {
      link2.setAttribute('href', '#');
}
if (link3Date > today) {
    link3.setAttribute('href', '#');
}

if (link4Date > today) {
    link4.setAttribute('href', '#');
}
if (link5Date > today) {
  link5.setAttribute('href', '#');
}

if (link6Date > today) {
  link6.setAttribute('href', '#');
}
if (link7Date > today) {
  link7.setAttribute('href', '#');
}

if (link8Date > today) {
  link8.setAttribute('href', '#');
}
if (link9Date > today) {
  link9.setAttribute('href', '#');
}

if (link10Date > today) {
  link10.setAttribute('href', '#');
}
if (link11Date > today) {
  link11.setAttribute('href', '#');
}

if (link12Date > today) {
  link12.setAttribute('href', '#');
}
if (link13Date > today) {
  link13.setAttribute('href', '#');
}

if (link14Date > today) {
  link14.setAttribute('href', '#');
}

if (link15Date > today) {
  link15.setAttribute('href', '#');
}

if (link16Date > today) {
  link16.setAttribute('href', '#');
}
if (link17Date > today) {
link17.setAttribute('href', '#');
}

if (link18Date > today) {
link18.setAttribute('href', '#');
}
if (link19Date > today) {
link19.setAttribute('href', '#');
}

if (link20Date > today) {
link20.setAttribute('href', '#');
}
if (link21Date > today) {
link21.setAttribute('href', '#');
}

if (link22Date > today) {
link22.setAttribute('href', '#');
}
if (link23Date > today) {
link23.setAttribute('href', '#');
}

if (link24Date > today) {
link24.setAttribute('href', '#');
}
if (link25Date > today) {
link25.setAttribute('href', '#');
}

if (link26Date > today) {
link26.setAttribute('href', '#');
}
if (link27Date > today) {
link27.setAttribute('href', '#');
}

if (link28Date > today) {
link28.setAttribute('href', '#');
}

if (link29Date > today) {
  link29.setAttribute('href', '#');
}

if (link30Date > today) {
  link30.setAttribute('href', '#');
}
});


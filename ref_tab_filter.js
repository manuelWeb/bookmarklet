/*==========================================
=            get ref in INFO.md            =
==========================================*/
// get definitivly REF
var idx = (idx||1)
document.querySelectorAll('tr > td').forEach(elt => {
  if( idx% 3 === 0){
    document.getElementById('_html').innerHTML += '<span>'+elt.textContent+'<br /></span>'
  }
  idx++
})

// get LIB 2, 5, 8 (price CD | ...)
let lib = (x) => x+3
let lib_min = 2

while(lib_min < document.getElementsByTagName('td').length){
  document.getElementById('_html').innerHTML += '<span>'+document.querySelectorAll('tr > td')[lib_min].textContent+'<br /></span>'
  lib_min = lib(lib_min)
}

// get lib 1, 4, 7 (lib HO | CD | ...)
// FIXME variable wording too random
// const lib = (x) => x+3 // const déjà définie plus haut
typeof(lib_min) == 'undefined' ? lib_min = 1 : console.log(`lib_min: ${lib_min} ${lib_min=1} `)

while(lib_min < document.getElementsByTagName('td').length){
  console.log(lib_min)
  document.getElementById('_html').innerHTML += '<span>'+document.querySelectorAll('tr > td')[lib_min].textContent+'<br /></span>'
  lib_min = lib(lib_min)
}

// AL get lib ES5 NE fonctionne pas cause idx start 0
// force idx à 1
var idx = 1
Array.from(document.querySelectorAll('tr > td')).map((item,idx=1)=>{return {item,idx} }).filter(item => item['idx'] % 3 === 0 )

// REF MM
let lib = (x) => x+4
let lib_min = 0

while(lib_min < document.getElementsByTagName('td').length){
  document.getElementById('_html').innerHTML += '<span>'+document.querySelectorAll('tr > td')[lib_min].textContent+'<br /></span>'
  lib_min = lib(lib_min)
}
// capacity MM
let lib = (x) => x+4
let lib_min = 2

while(lib_min < document.getElementsByTagName('td').length){
  document.getElementById('_html').innerHTML += '<span>'+document.querySelectorAll('tr > td')[lib_min].textContent+'<br /></span>'
  lib_min = lib(lib_min)
}

/*===============================================
=            selection date planning            =
===============================================*/
function rmDaysToDate(old_date) {
  // split date dd / mm / yy
  var split_date = old_date.split("/");
  // Les mois 0 a 11 donc on enleve 1, cast avec *1
  var new_date = new Date(
    split_date[2], // yy
    split_date[1] * 1 - 1, // mm
    split_date[0] * 1 - 14 // days
  );
  
  var new_day   = new_date.getDate();
  var new_month = new_date.getMonth() + 1;
  var new_year  = new_date.getYear();

  new_day = (new_day < 10 ? "0" : "") + new_day; // ajoute un zéro devant pour la forme
  new_month = (new_month < 10 ? "0" : "") + new_month; // ajoute un zéro devant pour la forme

  var new_date_text = new_day + "/" + new_month + "/" + new_year;
  return new_date_text;
}

let lib = (x) => x+6
let lib_min = 3

let ary_idbrand = ["tl-id", "al", "ho", "cd", "cv-vf", "mm", ]
let item = ary_idbrand.map(id => document.querySelectorAll(`#${id} + table tr td`))

let tdBrand = item.map((tdAry,idx) => {
  // console.warn(ary_idbrand[idx], ' ',tdAry,' tdAry.length ', tdAry.length,' idbrand.length ', ary_idbrand.length)
  return {
    "brand": ary_idbrand[idx],
    "TD": tdAry
  }
})

let objBrand = tdBrand.map(item => item)
let AL = objBrand[1].TD
const redt = /[0-9]{2}\/[0-9]{2}\/[0-9]{2}/g

while (lib_min < AL.length) {
  var dead = AL[lib_min].innerHTML.match(redt)
  var dead_n = rmDaysToDate(dead[0])
  // console.warn( rmDaysToDate(dead[0]) )

  console.log(AL[lib_min],`-> ${dead[0]} ` , AL[lib_min+2], `${dead_n}`)

  AL[lib_min+2].innerHTML = dead_n

  lib_min = lib(lib_min)
}



/*==================================================
=            GET attribut of class elmt            =
==================================================*/
// bookmarklet to dynamique prompt -> getElementsByClassName('js-btn')[0]
document.getElementsByClassName('js-btn')[0].getAttribute("onclick");


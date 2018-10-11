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
let lib = (x) => x+5
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

var objBrand = tdBrand.map(item => item)
let AL = objBrand[1].TD
while (lib_min < AL.length) {
  console.log(AL[lib_min])
  lib_min = lib(lib_min)
}

// let cpt = 1
// while (lib_min < tdAry.length) {
//   console.log(tdAry[lib_min].innerHTML);
//   lib_min = lib(lib_min)
//   console.log(lib_min);
// }


while(lib_min < document.getElementsByTagName('td').length){
  document.getElementById('content').innerHTML += '<span>'+document.querySelectorAll('tr > td')[lib_min].textContent+'<br /></span>'
  lib_min = lib(lib_min)
}



/*==================================================
=            GET attribut of class elmt            =
==================================================*/
// bookmarklet to dynamique prompt -> getElementsByClassName('js-btn')[0]
document.getElementsByClassName('js-btn')[0].getAttribute("onclick");


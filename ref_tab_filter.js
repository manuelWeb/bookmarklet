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
const lib = (x) => x+3
let lib_min = 2

while(lib_min < document.getElementsByTagName('td').length){
  document.getElementById('_html').innerHTML += '<span>'+document.querySelectorAll('tr > td')[lib_min].textContent+'<br /></span>'
  lib_min = lib(lib_min)
}
// get lib 1, 4, 7 (lib HO | CD | ...)
// let lib_min = 1
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

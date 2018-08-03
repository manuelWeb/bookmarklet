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

// get LIB
const lib = (x) => (4*x)+1
let lib_min = 0

while(lib_min < 4){
  document.getElementById('_html').innerHTML += '<span>'+document.querySelectorAll('tr > td')[lib(lib_min)].textContent+'<br /></span>'
  lib_min ++
}

// AL get lib ES5 NE fonctionne pas cause idx start 0
// force idx à 1
var idx = 1
Array.from(document.querySelectorAll('tr > td')).map((item,idx=1)=>{return {item,idx} }).filter(item => item['idx'] % 3 === 0 )

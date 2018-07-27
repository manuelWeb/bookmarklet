/*==========================================
=            get ref in INFO.md            =
==========================================*/
const ref = document.querySelectorAll('tr > td')
let idx = 0

// get REF
ref.forEach(elt => {
  if(idx % 4 === 0){
    document.getElementById('_html').innerHTML += '<span>'+elt.textContent+'<br /></span>'
  }
  idx++
})

// get LIB
const lib = (x) => (4*x)+1
let lib_min = 0

while(lib_min < 4){
  document.getElementById('_html').innerHTML += '<span>'+ref[lib(lib_min)].textContent+'<br /></span>'
  lib_min ++
}
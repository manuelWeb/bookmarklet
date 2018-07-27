/*==========================================
=            get ref in INFO.md            =
==========================================*/
// get REF
var ref = document.querySelectorAll('tr > td')
var lref = ref.length
var idx = 0
var result = []
ref.forEach(elt => {
  if(idx % 4 === 0){
    result.push( elt.textContent )
    document.getElementById('_html').innerHTML += '<span>'+elt.textContent+'<br /></span>'
  }
  idx++
})

// get LIB
var ref = document.querySelectorAll('tr > td')
// var lib = function(x){ return (4*x)+1}
var lib = (x) => (4*x)+1
var lib_max = 0

while(lib_max < 4){
  // console.log(ref[lib(lib_max)])
  document.getElementById('_html').innerHTML += '<span>'+ref[lib(lib_max)].textContent+'<br /></span>'
  lib_max ++
}
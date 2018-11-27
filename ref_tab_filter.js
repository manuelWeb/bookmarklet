/*==========================================
=            get ref in INFO.md            =
==========================================*/
function getlib (lib_pos=1,next=3) {
  let lib_next = (x) => x + next
  while(lib_pos < document.getElementsByTagName('td').length){
    console.log(`${document.querySelectorAll('tr > td')[lib_pos].textContent}`)
    document.getElementById('_html').innerHTML +=
    '<span>'+document.querySelectorAll('tr > td')[lib_pos].textContent+'<br /></span>'
    lib_pos = lib_next(lib_pos)
  }
}

// get table head
console.log([...head].map((i)=>i))
console.log( [...head].map( (i) => i.textContent ) )
console.log([...head].map((i,x)=>({txt: i.textContent, index: x, html: i}) ))
const tabhead = [...document.getElementsByTagName('th')].map((i,x)=>({txt: i.textContent, index: x, html: i}) )
// get REF refact

var idx = (idx||1)
document.querySelectorAll('tr > td').forEach(elt => {
  if( idx% 3 === 0){
    document.getElementById('_html').innerHTML += '<span>'+elt.textContent+'<br /></span>'
  }
  idx++
})


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


/*================================
=            PLANNING            =
================================*/

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
/*=====  End of PLANNING  ======*/



/*==================================================
=            GET attribut of class elmt            =
==================================================*/
// bookmarklet to dynamique prompt -> getElementsByClassName('js-btn')[0]
document.getElementsByClassName('js-btn')[0].getAttribute("onclick");

/*=============================================
=            select tr > td add bd            =
=============================================*/

const cells = document.querySelectorAll('tr > td')
;[...cells].map(cell => cell.style.border = '1px solid green')

/*=====  End of select tr > td add bd  ======*/

// keyboard evt
let aryLetter = []
const keyTg = (e) => {
  console.log(e.key);
  aryLetter.push(e.key)
}
document.addEventListener('keydown', keyTg)
// stop
aryLetter.join('')


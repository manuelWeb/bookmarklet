// bookmarklet add border on all td

// solution_1 forEach
const tds = document.querySelectorAll('td')
tds.forEach(elt => elt.style.border = '1px solid green')

// solution_2a ES2015
const cells = document.querySelectorAll('tr > td')
;[...cells].map(cell => cell.style.border = '1px solid green')
// solution_2b ES2015
;[...document.querySelectorAll('tr > td')].map(cell => cell.style.border = '1px solid green')
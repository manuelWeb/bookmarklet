javascript:(function()%7B%22use%20strict%22%3Bfunction%20rmDaysToDate(t)%7Bvar%20e%3Dt.split(%22%2F%22)%2Cn%3Dnew%20Date(e%5B2%5D%2C1*e%5B1%5D-1%2C1*e%5B0%5D-14)%2Cr%3Dn.getDate()%2Ca%3Dn.getMonth()%2B1%3Breturn(r%3D(r%3C10%3F%220%22%3A%22%22)%2Br)%2B%22%2F%22%2B(a%3D(a%3C10%3F%220%22%3A%22%22)%2Ba)%2B%22%2F%22%2Bn.getYear()%7Dvar%20lib%3Dfunction(t)%7Breturn%20t%2B6%7D%2Clib_min%3D3%2Cary_idbrand%3D%5B%22tl-id%22%2C%22al%22%2C%22ho%22%2C%22cd%22%2C%22cv-vf%22%2C%22mm%22%5D%2Citem%3Dary_idbrand.map(function(t)%7Breturn%20document.querySelectorAll(%22%23%22%2Bt%2B%22%20%2B%20table%20tr%20td%22)%7D)%2CtdBrand%3Ditem.map(function(t%2Ce)%7Breturn%7Bbrand%3Aary_idbrand%5Be%5D%2CTD%3At%7D%7D)%2CobjBrand%3DtdBrand.map(function(t)%7Breturn%20t%7D)%2Credt%3D%2F%5B0-9%5D%7B2%7D%5C%2F%5B0-9%5D%7B2%7D%5C%2F%5B0-9%5D%7B2%7D%2Fg%3Bfunction%20setDate(t)%7Bvar%20e%3DobjBrand%5Bt%5D.TD%3Bfor(console.log(e)%3Blib_min%3Ce.length%3B)%7Bvar%20n%3DrmDaysToDate(e%5Blib_min%5D.innerHTML.match(redt)%5B0%5D)%3Be%5Blib_min%2B2%5D.innerHTML%3Dn%2Clib_min%3Dlib(lib_min)%7Dlib_min%3D3%7DsetDate(0)%2CsetDate(1)%2CsetDate(2)%2CsetDate(3)%2CsetDate(4)%2CsetDate(5)%3B%7D)()
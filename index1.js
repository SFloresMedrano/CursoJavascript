

let productos = [
    { id: 1, nombre: "televisor", precio: 1000 },
    { id: 2, nombre: "monitor", precio: 1100 },
    { id: 3, nombre: "computador", precio: 500 },
    { id: 4, nombre: "celular", precio: 700 },
  ];

  let precio = 600;
  let filtrados = productos.filter((el) => el.precio > precio);
  
  let nombres = filtrados.map(el=> el.nombre)

  alert (nombres)

/*   let nombres = productos.map (item => item.nombre);
  let precios = productos.map (item => item.precio);
  let ids = productos.map (item => item.id); */

/*   console.log(nombres);
  console.log(ids);
  console.log(precios); */

/*   let filtroprecio=parseInt(prompt("Ingrese precio a filtrar")); */
/*  
  let mayoresque =productos.filter((obj) => obj.precio > precio) */




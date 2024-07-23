(() => {
  let myProductName: string = 'Producto 1';
  let myProductPrice = 123;

  myProductName = 'change';
  myProductName.toLocaleLowerCase();

  myProductPrice.toFixed();

  const myProductStock = 1000; // En el tipado no sale nada, dado que es una constante
  // myProductStock = 200;     // Esta varianle no se puede cambiar dado que es un const
  const myProductName1 = 'Producto 2';
})();

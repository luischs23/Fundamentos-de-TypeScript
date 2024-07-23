(()=>{
  let productTitle: string = "My Amazing Product";
  // productTitle = null;
  // productTitle = ()=>{};
  // productTitle = 123;
  productTitle = "My Amazing Product change";
  console.log("productTitle",productTitle);

  let productDescription = 'Carton';
  let isNew: boolean = false;
  let productPrice = 12;

  const summary = `
    title: ${productTitle}
    descripcion: ${productDescription}
    isNew: ${isNew}
    price: ${productPrice}
  `
  console.log("summary",summary);
})();

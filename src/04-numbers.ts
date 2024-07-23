(() => {
  let productPrice = 100;   // Declaracion Implicita
  productPrice = 12;
  console.log("Product Price", productPrice)

  let customeAge: number = 28; // Declaracion Explicita
  // customeAge = customeAge + "1";   //281
  customeAge = customeAge + 1;
  console.log("custome Age", customeAge);

  let productInStock: number;
  console.log("product InStock", productInStock);
  if(productInStock>10){
    console.log("Is Greater");
  };

  let discount = parseInt("300");
  console.log("discount", discount);
  if(discount<200){
    console.log("Discount is less than 200");
  }else{
    console.log("Discount is greater than 200");
  };

  let hex = 0xff;
  console.log("hex", hex);
  let bin = 0b1010;
  console.log("bin", bin)

})();

(()=>{
  let prices = [1,2,3,4,'hola',true];
  // prices.push("hola");
  // prices.push(true);
  // prices.push({});
  prices.push(5);

  let products:(number | string | boolean | object)[] = ["Hi",false]
  products.push(144);
  products.push('Como');
  products.push({});
  products.push([]);

  let numbers = [1,2,3,4,5];
  numbers.map(item => item*2);

})();

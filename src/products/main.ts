import {createProduct, calcStock, products} from './product.servicio';

createProduct({
  title: "Product1",
  createAt: new Date(1993,1,3),
  stock: 12,
});

createProduct({
  title: "Product2",
  createAt: new Date(1991,1,4),
  stock: 4,
  size:'S'
});

console.log(products);
const total = calcStock();
console.log(total);

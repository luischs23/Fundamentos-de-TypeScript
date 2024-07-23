(()=>{
  type Sizes = 'S'|'M'|'L'|'XL';

  type Product = {title: string, // Con type no se pueden extender los tipos
  createAt: Date,
  stock: number,
  size?: Sizes,
  }

  /*
  interface Product {         // Interface se pueden extender los tipos
        title: string;
        createAt: Date;
        stock: number;
        size?: Sizes;
    }
  */

  const products: Product[] = [];

  const addProduct = (data: Product)=>{
    products.push(data);
  }

  addProduct({
    title: "Product1",
    createAt: new Date(1993,1,3),
    stock: 12,
  });

  addProduct({
    title: "Product2",
    createAt: new Date(1991,1,4),
    stock: 4,
    size:'S'
  });

  console.log(products);

  products.push({
    title: "Product3",
    createAt: new Date(1993,1,3),
    stock: 16,
    size: 'L'
  });
})();

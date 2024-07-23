(()=>{

  // Funcion que recibe un objeto
  const login = (data:{email: string, password: number}) => {
    console.log(data.email,data.password);

  }
  // login('luis@gmial.com','Hola123');
  login({
    email: 'luis@gmial.com',
    password: 123
  });

  type Sizes = 'S'|'M'|'L'|'XL';

  const products: any[] = [];

  const addProduct = (data:{
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  })=>{
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

  console.log(products)

})();

(()=>{
  type Sizes = 'S'|'M'|'L'|'XL';

  function createProductToJson(
    title: string,
    createAt:Date,
    stock:number,
    size: Sizes
  ){
    return{
      title,
      createAt,
      stock,
      size
    }
  }

const product1 = createProductToJson('P1',new Date(),12,'XL');
console.log(product1);
console.log(product1.title);
console.log(product1.stock);
console.log(product1.size);

// Arrow Function

const createProductToJsonV2 = (
  title: string,
  createAt:Date,
  stock:number,
  size?: Sizes
)=>{
  return{
    title,
    createAt,
    stock,
    size
  }
}
const product2 = createProductToJsonV2('P2',new Date(),14);
console.log(product2);
console.log(product2.title);
console.log(product2.stock);
console.log(product2.size);

const greet = (name: string = undefined) => {
  name ? console.log(`Greetings ${name}!`) : console.log('Greetings!')
}

greet('Angel') // Greetings Angel!
greet() // Greetings

})();

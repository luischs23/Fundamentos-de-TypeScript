(()=>{
  type UserId = string | number; // Aqui creamos nuestro propio tipo, a esto se le llama Alias type
  let userId: UserId;

  // Literal types
  type Sizes = 'S'|'M'|'L'|'XL';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  // shirtSize = 'Otra talla';

  function greeting(userId: UserId, sizes:Sizes){
    if(typeof userId === "string"){
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }else{
      console.log(`number ${userId.toFixed(1)}`);
    }
  };

  greeting(435.73,'S');
  greeting('HOLA','S');

})();

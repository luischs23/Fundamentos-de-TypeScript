(()=>{
  let userId: string | number;
  userId=123;
  userId="Hola";

  function greaating(myText: string | number){
    if(typeof myText === "string"){
      console.log(`string ${myText.toLocaleLowerCase()}`);
    }else{
      console.log(`number ${myText.toFixed(1)}`);
    }
  };
  greaating("Hi");
  greaating(987.983);
})();

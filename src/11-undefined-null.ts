(()=>{
  // let myNumber: number = undefined;
  // let myString: string = null;
  let myNull:null = null;
  let myUndefined:undefined = undefined;

  let myNumber: number | null = null;
  myNumber=123;

  let myString: string | undefined = undefined;
  myString="World";

  function hi(name:string | null){
    let hello = "hola ";
    if(name){
      hello += name;
    }else{
      hello += "nobody";
    }
    console.log(hello);
  }

  function hiV2(name:string | null){
    let hello = "hola ";
    hello += name? name : "nobody"; //name?.toLowerCase || "nobody"
    console.log(hello);
  }

  hi("Nicolas");
  hi(null);

  hiV2("Nicolas");
  hiV2(null);

})();

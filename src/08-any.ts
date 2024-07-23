(()=>{
  let myDynamicVar: any; // any significa cualquier cosa
  myDynamicVar = "Hola";
  myDynamicVar = 123;
  myDynamicVar = {};
  myDynamicVar = [];

  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 456;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();

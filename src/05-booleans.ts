(()=>{
  let isEnable = true;
  //isEnable= "hola";
  isEnable = false;

  let isNew: boolean = false;
  console.log("IsNew", isNew);
  isNew = true;
  console.log("IsNew", isNew);

  const random = Math.random();
  console.log("random", random);
  isNew = random>=0.5 ? true : false;
  console.log("IsNew", isNew);
})();

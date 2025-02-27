(()=>{
  // Tipado de una funcion
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total.toString();
  }
  // Funcion que no tiene retorno: normalmente estas funciones llaman a otras funciones
  // funcion de efecto secundario

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }
  printTotal([1,2,3,4,5]);

})();

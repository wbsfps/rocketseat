let obj = [17];
let index = 300;

try {
  //  obj.execute();
  if (!obj.includes(17)) {
    throw new Error("O número 17 não está disponível");
  }

  if (index > 100) {
    throw new RangeError("O número está fora do intervalo!");
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Método indisponível");
  } else if (error instanceof RangeError) {
    console.log(error.message);
  } else {
    console.log("Não foi possível realizar a ação");
  }
}

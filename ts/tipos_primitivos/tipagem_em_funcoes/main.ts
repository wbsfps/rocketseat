function sum(x: number, y: number): number {
  const result = x + y;
  console.log("Resultado = ", result);

  return result;
}

const result = sum(1, 2);

const showMessage = (name: string): string => {
  const message = "Olá " + name;
  return message;
};

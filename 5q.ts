function exibir(...letras: string[]): string {
    console.log(Object.values(arguments));
}
  
exibir("a");
exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  //Strict equality check is used to prevent type coercion
  if(a === 0 || b === 0 || a === "" || b === "" || a === false || b === false || a === undefined || b === undefined || isNaN(a) || isNaN(b)){
    return 0;
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(0,2)); //0
console.log(foo(2,0)); //0
console.log(foo(false,2));//0
console.log(foo(2,false));//0
console.log(foo('',2));//0
console.log(foo(2,''));//0
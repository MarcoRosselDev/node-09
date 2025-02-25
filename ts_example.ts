type Usuario = {
  name : string
  age: number
}

function esUsuarioAdulto(user:Usuario): boolean {
  return user.age >= 18 ? true : false
}

const marco = {
  name: "Marco",
  age: 31
}
console.log(esUsuarioAdulto(marco));

/* comand: npx tsx example.ts 
i: npm i -D tsx
*/
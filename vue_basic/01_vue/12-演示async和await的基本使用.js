import thenFs from 'then-fs'

console.log('A');
async function getAllFile() {
  console.log('B');
  const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
  console.log(r1);
  const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
  console.log(r2)
  const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
  console.log(r3)
  console.log('C');
}

getAllFile()
console.log('D');

//输出顺序是  A B D 111 222 333 C
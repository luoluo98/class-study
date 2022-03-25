import thenFs from 'then-fs'

// 1.定义一个数组，存放3个读文件的异步操作
const promiaseArr = [
  thenFs.readFile('./files/1.txt', 'utf8'),
  thenFs.readFile('./files/2.txt', 'utf8'),
  thenFs.readFile('./files/3.txt', 'utf8')
]

// 2.将Promise的数组，作为Promise.all()的参数
Promise.all(promiaseArr).then((result) => { 
   console.log(result);
 })

 // Promise中实例的顺序就是执行结果的顺序
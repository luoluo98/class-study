import thenFs from 'then-fs'

// 1.定义一个数组，存放3个读文件的异步操作
const promiaseArr = [
  thenFs.readFile('./files/1.txt', 'utf8'),
  thenFs.readFile('./files/2.txt', 'utf8'),
  thenFs.readFile('./files/3.txt', 'utf8')
]

// 2.将Promise的数组，作为Promise.race()的参数
Promise.race(promiaseArr)
 .then((result) => {  //2.1只要任何一个异步操作完成，就立即执行成功的回调函数（赛跑机制）
   console.log(result);
 })
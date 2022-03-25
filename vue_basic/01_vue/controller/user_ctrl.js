import db from '../db/index.js'

// 使用es6的按需导出语法，将getAllUser方法导出出去
export async function getAllUser(req, res) {
  const [rows] = await db.query('select id, username, nickname from ev_users')
  console.log(111);
  res.send({
    status: 0,
    message: '获取用户列表数据成功',
    date: rows,
  })
}

getAllUser()
# git命令

* `git clone https://XXXXX`
* `git pull` 拉取代码
* `git add .` 加入要提交的文件
* `git commit -m '本地提交的代码信息 Initial commit'` 本地暂存代码
* `git push` `git push origin main` 上传代码到远程服务器 

## git 账号设置
```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

## 命令行翻墙
`export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890`

# makedown 语法入门
### 标题
+ `一阶标题=（最高阶标题）`
+ `二阶标题-`
+ `转义字符\`
+ `一级标题#`
+ `二级标题##`
+ `三级标题###` （最多到六级，#后面要有一个空格）


### 文本修饰
- **粗体文本**
- _斜体文本_

### 列表
* 无序列表（+、-、*）
* 有序列表（使用数字后面跟上.）
1. 第一段
2. 第二段
3. 第三段

### 插入图片
！[名称]（图片链接）  ps：名称可以为空

### 插入链接
[名称]（链接）

### 引用
1.代码引用
* 多行
```
hello world
hello world
hello world
```

* 单行
`hello world`

* 文本引用
> 文本引用

* 表格
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
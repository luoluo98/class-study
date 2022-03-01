# git命令

* `git clone https://XXXXX`
* `git pull` 拉取代码
* `git add .` 加入要提交的文件
* `git commit -m '本地提交的代码信息 Initial commit'` 本地暂存代码
* `git push` `git push origin main` 上传代码到远程服务器 

## git 账号设置
```
git config --global user.email "you@example.com" // 你注册的github邮箱
git config --global user.name "Your Name" // 你注册的github name
```

## 命令行翻墙
`export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890`


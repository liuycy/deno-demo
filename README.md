# 一个简单的 deno runtime demo

> 按照官方文档的[示例](https://deno.land/manual/examples), 稍微修改以便更好地理解其内容及相关 API

## 运行
```sh
# 使用 deno 直接运行, -A 表示允许所有权限
deno run -A src/echo_server.ts
# 或者直接运行 src下某个 ts 文件的 raw 地址
deno run -A https://raw.githubusercontent.com/liuycy/deno-demo/master/src/echo_server.ts
```

## 实现功能

- [x] 利用 Worker 下载网站 html 到 outputs 文件夹下
- [x] 修改官网 cat.ts 示例代码, 打印带颜色的文件名
- [ ] 实现官网 file_server.ts 示例代码
- [x] 修改官网 echo_server.ts 示例代码, 读取传入的文字并打印
- [x] subprocess.ts: `Deno.run`, permissions.ts: `Deno.permissions`, signal.ts: `Deno.signal`, watchfs.ts: `Deno.watchFs`
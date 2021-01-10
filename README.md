# sync_css
动态创建css

解决浏览器缓存问题

调用:

```
        let style = new SyncLoadCss({
            num: 20,
            src: './css/bootstrap.min.css',
        });
```
`num`:指生成随机数

`src`:为css文件路径

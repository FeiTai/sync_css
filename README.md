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
20指生成随机数
src为css文件路径

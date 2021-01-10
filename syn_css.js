class Random {
    constructor(num) {
        this.num = num
    }

    static str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    static tmp = '';

    create() {

        const str_len = Random.str.length;
        for (let i = 0; i < this.num; i++) {
            Random.tmp += Random.str.charAt(Math.floor(Math.random() * str_len));
        }
        return Random.tmp;
    }
}

class SyncLoadCss {
    constructor(prop) {
        this.default = {
            num: prop.num || 10,
            src: prop.src,
        }
        this.data = new Random(this.default.num);
        this.str = this.data.create();
        this.url = this.default.src;
        this.Load();
    }

    static head = document.getElementsByTagName('head')[0];
    static link = document.createElement('link');

    Load() {
        SyncLoadCss.link.type = 'text/css';
        SyncLoadCss.link.rel = 'stylesheet';
        SyncLoadCss.link.href = this.url + '?version=' + this.str;
        SyncLoadCss.head.appendChild(SyncLoadCss.link);
    }
}
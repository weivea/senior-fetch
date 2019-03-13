# senior-fetch

支持timeout超时 和  手动取消 abort() 的 fetch 方法, 

ps：只兼容原生支持 fetch 和 Promise的浏览器

## 安装

```
npm install senior-fetch
```

## 使用

```javascript
import SeniorFrtch from 'senior-fetch';

/*  ... */
new SeniorFrtch(input, init).fetch().then((resqonse) => {

}).catch((error) => {

});

```
配置与原生fetch一致，请参考: https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch


### 设置timeout

```javascript
new SeniorFrtch(url, {
  timeout: 5000,
  method: "GET"
}).fetch().then((resqonse) => {

}).catch((error) => {

});
// 超时会catch住 timeout 的error
```

### 手动取消 abort()

```javascript
const fetchVM = new SeniorFrtch(url, {
  timeout: 5000,
  method: "GET"
})
fetchVM.fetch().then((resqonse) => {

}).catch((error) => {

});

// 手动取消
fetchVM.abort();

// 取消会catch住 abort 的error
```
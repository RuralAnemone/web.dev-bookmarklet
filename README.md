# web.dev-bookmarklet
copy this code and make it a bookmarklet:
```js
javascript:fetch('https://cdn.jsdelivr.net/gh/RuralAnemone/web.dev-bookmarklet@master/code.js').then(data=>{data.text().then(text=>{eval(text)})});
```

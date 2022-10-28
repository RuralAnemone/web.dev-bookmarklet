# web.dev-bookmarklet
copy this code and make it a bookmarklet:
```js
javascript:fetch('https://cdn.jsdelivr.net/gh/RuralAnemone/web.dev-bookmarklet@master/code.js').then(data=>{data.text().then(text=>{eval(text)})});
```

<br><br><br>

note: if it doesn't work, use this (non-updating) code instead:
```js
javascript:var a=window.confirm("measure this page?") ? "https://web.dev/measure?url="+encodeURIComponent(location.href) : "https://web.dev/measure?url="+prompt("website to measure");window.confirm("open in new tab?") ? window.open(a, "_blank") : location=a
```

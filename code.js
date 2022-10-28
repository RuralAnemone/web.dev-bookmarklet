var a=window.confirm("measure this page?") ? "https://web.dev/measure?url="+encodeURIComponent(location.href) : "https://web.dev/measure?url="+prompt("website to measure");
window.confirm("open in new tab?") ? window.open(a, "_blank") : location=a;

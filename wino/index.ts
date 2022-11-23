const d = document
const $ = document.querySelector.bind(d)
const $$ = (sel, con) => Array.prototype.slice.call((con||d).querySelectorAll(sel))

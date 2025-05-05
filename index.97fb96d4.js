document.querySelectorAll("li").forEach(function(e){var t=e.firstChild;if(3===t.nodeType&&""!==t.textContent.trim()){var n=document.createElement("span");n.textContent=t.textContent.trim(),e.replaceChild(n,t),n.addEventListener("click",function(t){var n=e.querySelector(":scope > ul");n&&(n.hidden=!n.hidden),t.stopPropagation()})}});
//# sourceMappingURL=index.97fb96d4.js.map

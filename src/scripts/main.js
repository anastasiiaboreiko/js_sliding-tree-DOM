'use strict';

const liElements = document.querySelectorAll('li');

liElements.forEach((li) => {
  const firstChild = li.firstChild;

  if (firstChild.nodeType === 3 && firstChild.textContent.trim() !== '') {
    const span = document.createElement('span');

    span.textContent = firstChild.textContent.trim();
    li.replaceChild(span, firstChild);

    span.addEventListener('click', (e) => {
      const nestedUl = li.querySelector(':scope > ul');

      if (nestedUl) {
        nestedUl.hidden = !nestedUl.hidden;
      }
      e.stopPropagation();
    });
  }
});

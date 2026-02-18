'use strict';

const lists = document.querySelectorAll('.tree li');

lists.forEach((list) => {
  if (list.children.length > 0) {
    const span = document.createElement('span');

    span.innerText = list.firstChild.textContent.trim().replace('\n', '');
    list.firstChild.replaceWith(span);
  }
});

const switches = document.querySelectorAll('span');

switches.forEach((item) => {
  item.addEventListener('click', () => {
    item.nextElementSibling.style.display =
      item.nextElementSibling.style.display === 'none' ? 'block' : 'none';
  });
});

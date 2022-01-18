'use strict'

const data = [
  {
    "company": "Centro comercial Moctezuma",
    "contact": "Francisco Chang",
    "country": "Mexico"
  },
  {
    "company": "Ernst Handel",
    "contact": "Roland Mendel",
    "country": "Germany"
  },
  {
    "company": "Island Trading",
    "contact": "Maria Bennett",
    "country": "UK"
  },
  {
    "company": "Laughing Bacchus Winecellars",
    "contact": "Yoshi Tannamuri",
    "country": "Canada"
  },
  {
    "company": "Magazzini Alimentari Riuniti",
    "contact": "Giovanni Rovelli",
    "country": "Italy"
  },
  {
    "company": "Alfreds Futterkiste",
    "contact": "Maria Anders",
    "country": "Germany"
  }
]

const copyData = JSON.parse(JSON.stringify(data));
const table = document.querySelector('.table__body');
const header = document.createElement('tr');

function buildTable() {
  const titles = [];

  for (const itemData of copyData) {
    const item = document.createElement('tr');

    for (const key in itemData) {
      if (!titles.includes(key)) {
        titles.push(key);

        header.insertAdjacentHTML(
          'beforeend',
          `<th class="${key}">
            <input type="text">
            <span>${key}</span>
          </th>`
        );
      }

      item.insertAdjacentHTML(
        'beforeend',
        `<td class="item-${key}">
          ${itemData[key]}
        </td>`
      );
    };

    table.append(item);
  };

  table.prepend(header);
};

buildTable();

header.addEventListener('click', function (e) {
  const target = e.target;
  const targetTag = target.tagName;
  const targetParent = target.parentElement.className;

  if (targetTag === 'INPUT') {
    target.addEventListener('input', function () {

      const itemsTd = document.querySelectorAll(`.item-${targetParent}`);
      const currentInputValue = target.value.toLowerCase();

      for (const itemTd of itemsTd) {
        const textTd = itemTd.textContent.toLowerCase();

        if (!textTd.includes(currentInputValue)) {
          itemTd.parentElement.hidden = true;
        } else {
          itemTd.parentElement.hidden = false;
        }
      }
    })
  }
})

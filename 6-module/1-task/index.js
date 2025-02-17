//  function componentTemplate(rows) {
//   return `
//    <table>
//       <tbody>
//         ${rows.map(({name,age,salary,city}) => `<tr><td>${name}</td><td>${age}</td><td>${salary}</td><td>${city}</td><td><button>X</button></td></tr>`).join('')}
//       </tbody>
//    </table>
//   `
// }

// export default class UserTable {
//   elem = {};

//   constructor(rows) {    
//     this.template = componentTemplate(rows);
//     console.log(this.template);
//   }
  
// }

export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');

    this.elem.innerHTML = `
      <thead>
          <tr>
            <td>Имя</td>
            <td>Возраст</td>
            <td>Зарплата</td>
            <td>Город</td>
            <td></td>
          </tr>
      </thead>
    `;

    let tableInner = rows.map(row => {
      let cellsWithData = Object.values(row) // для каждого значения из объекта row
        .map(value => `<td>${value}</td>`) // обернуть его в <td>
        .join(''); // полученный массив <td>...</td> объединить в одну строку

      return `
          <tr>
            ${cellsWithData}
            <td><button>X</button></td>
          </tr>
        `; // возвращаем верстку одной строки
    }).join('');

    this.elem.innerHTML += `
      <tbody>
        ${tableInner}
      <tbody>
    `; // оборачиваем полученные строчки в tbody

    this.elem.addEventListener('click', (event) => this.onClick(event));
  }

  onClick(event) {
    if (event.target.tagName != 'BUTTON') {
      return;
    }

    let tr = event.target.closest('tr');

    tr.remove();
  }

}
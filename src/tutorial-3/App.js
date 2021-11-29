document.addEventListener("DOMContentLoaded", render);

const ul = document.querySelector('ul');
const btnAdd = document.querySelector('.btnAdd');
const input = document.querySelector('input');

let li;

let tasks = [];

function render() {
  ul.innerHTML = '';
  // формируем массив из <li> на основе массива tasks
  let todosArr = tasks.map(todo => `<li>${todo} <button class='close-btn'>x</button></li>`);

  // выводим на страницу список задач
  ul.innerHTML = todosArr.join('');

  input.value = '';

  
  li = document.querySelectorAll('li');

  // вешаем на каждую closeBtn, которые находятся в <li> обработчик клика
  li.forEach((li, index) => li.onclick = (e) => {
    if (e.target.classList.contains('close-btn')) {
      handleClickRemove(index)
    }
  })
}

function handleClickAdd() {
  if (input.value.trim()) {
    tasks.push(input.value);
  }
}

function handleClickRemove(index) {
  tasks = tasks.filter((item, id) => index !== id );
  render();
}


btnAdd.addEventListener('click', () => {
  handleClickAdd();
  render();
});

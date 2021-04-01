'use strict';

const employers = [
  "АртеМ",
  "максим",
  "Владимир",
  "сергей",
  "НикиТа",
  "евГений",
  " Дарья",
  " ",
  "виктория ",
  "ЕкаТерина",
  "",
  " Андрей ",
  "КИРИЛЛ",
];
const nameCourse = "Базовый React";
let command = [];

employers.forEach((elem) => {
  if (elem.length > 0 && elem.trim() !== "") command.push(elem);
});

command = command.map( elem =>{
  elem = elem.toLowerCase().trim();
  elem = elem[0].toUpperCase() + elem.slice(1);
  return elem;
});

const data = {
  cash: [3, 8, 3],
  react: ["JSX", "components", "props", "state", "hooks"],
  add: ["styled-components", "firebase"],
};

function calcCash(own, [...everyCash]) {
  let total = +own;
  everyCash.forEach((elem) => {
    total += +elem;
  });
  return total;
}

const lesson = calcCash(null, data.cash);

const makeBusiness1 = (director, teacher = "Максим", ...arr) => {
  teacher = teacher || 'Максим';
  const sumTech = data.react.concat(data.add, "и другие");
  console.log(`Стартует новый курс: "${arr[2]}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${arr[0]}.
  Команда Академии: ${arr[1]}.`);
  console.log(
    `Первое, что изучим, будет ${data.react[0]}. Он очень похож на HTML!`
  );
  console.log(`Технологии которые мы изучим: ${sumTech} `);
  
}

makeBusiness1("Артем", null, lesson, command, nameCourse);

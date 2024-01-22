// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

// class User {
//     // Тело класса
//   }

//   const mango = new User();
//   console.log(mango); //{}

//   const poly = new User();
//   console.log(poly); //{}

// class User {
//     // Синтаксис объявления метода класса
//     constructor(name, email) {
//       // Инициализация свойств экземпляра
//       this.name = name;
//       this.email = email;
//     }
//   }

//   const mango = new User("Манго", "mango@mail.com");
//   console.log(mango); // { name: 'Манго', email: 'mango@mail.com'}

//   const poly = new User("Поли", "poly@mail.com");
//   console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// ***************Прототипне наслідування та метод Object.create***************\\
// const user = {
//   name: "Alice",
//   age: 23,
//   sayHello() {
//     console.log(`Hello my name is ${this.name}`);
//   },

// };

// const student = Object.create(user);// метод create
// // student.sayHello()

// student.name = 'Kate'
// // console.log(student);
// // student.sayHello()

// const teacher = Object.create(student)
// teacher.sayHello();
// teacher. getAge= function (){
//     console.log(`my age is ${this.age}`);
//   }
//   teacher.getAge()
//   console.log(teacher)

//   student.getAge()

// const str = 'hello world';
// String.prototype.customFn = function(){
//     console.log('Hello its my custom function');
// };
// str.customFn();

// str.slice(0, 5);
// console.log(str.slice(0, 5));

// *********************************ES6 Class*********************************\\

// *****Публічні властивості та методи***** \\
// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     showName() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// const student = new User('Alice');
// console.log(student)
// student.showName()

// *****Приватні властивості та методи***** \\
// class User {
//   #password;
//   constructor(name, password) {
//     this.name = name;
//     this.#password = password;
//   }
//   changePassword(newPassword) {
//     // const oldPassword = prompt("enter old password")
//     if (this.#checkPassword) {
//       this.#password = newPassword;
//       return;
//     }
//     console.log("Who are you ?🧐");
//   }

//   showName() {
//     if (this.#checkPassword()) {
//       console.log(`Hello my name is ${this.name}`);
//     } else {
//       console.log("Who are you ?🧐");
//     }
//   }

//   #checkPassword() {
//     const password = prompt("Enter old password");
//     return password === this.#password; // true | false
//   }
// }

// const student = new User("Alice", "qwerty111");
// // student.changePassword("qwerty222");
// student.showName()
// console.log(student);

// student.changePassword('qwerty222')

// ******Геттери і сеттери****** \\

// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt('Enter old password');
//         return password === this.#password;
//     }

//     get email() {//не может иметь парамметры
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set email(newEmail) {//всегда принимает только 1 парамметр
//         // console.log('Я працюю тут');
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }

// const student = new User('Alice', 'qwerty111', 'test@gmail.com');
// console.log(student.email);

// student.email = 'new@gmail.com';

// console.log(student);

// *****Статичні властивості та методи***** \\
// Розглянемо на практичному завдані (Task-3)

// **********Наслідування класів********* \\ extends

// class User {
//   #password;
//   #email;
//   constructor(name, password, email) {
//     this.name = name;
//     this.#password = password;
//     this.#email = email;
//   }

//   showName() {
//     if (this.#checkPassword()) {
//       console.log(`Hello my name is ${this.name}`);
//     } else {
//       console.log("Who are you ?🧐");
//     }
//   }

//   #checkPassword() {
//     const password = prompt();
//     return password === this.#password;
//   }

//   get email() {
//     if (this.#checkPassword()) {
//       return this.#email;
//     }
//   }

//   set email(newEmail) {
//     if (this.#checkPassword()) {
//       this.#email = newEmail;
//     }
//   }
// }

// class Student extends User {
//   constructor(name, password, email, points) {
//     super(name, password, email); //ключевой метод
//     this.points = points;
//   }
//   getPoints() {
//     console.log(`${this.name} has ${this.points} points`);
//   }
// }

// class Teacher extends User {
//   constructor(name, password, email) {
//     super(name, password, email);
//   }
//   saySomething() {
//     console.log("Hello i`m techer");
//   }
// }
// class Graduate extends Student {
//   constructor(name, password, email, points, endDate) {
//     super(name, password, email, points);
//     this.endDate = endDate;
//   }
// }

// const student = new Student('Alice', 'qwerty111', 'test@gmail.com', 38);
// const user = new User('Kate', 'qwerty111', 'test@gmail.com');

// console.log(student)
// student.showName()
// student.getPoints()

// const graduate = new Graduate(
//   "Alice",
//   "qwerty111",
//   "test@gmail.com",
//   38,
//   "07.12.2023"
// );
// console.log(graduate);
// student.showName()
// student.getPoints()

// *******Task-1****** \\
// Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.

// class Rectangle {
//     #width;
//     #height;
//  constructor({width, height} = {}){
// this.#width = width;
// this.#height = height;
//  }

//  get width(){
// return this.#width;
//  }

//  set width(newWidth){
// if(typeof newWidth === 'number' && newWidth > 0){

//     this.#width = newWidth;
// }else{
//     console.log('Ширина должна быть числом и больше чем 0')
// }
//  }

// get height(){
// return this.#height;
// }

//  set height(newHeight){
//     if(typeof newHeight === 'number' && newHeight > 0){

//         this.#height = newHeight;
//     }else{
//         console.log('Висота должна быть числом и больше чем 0')
//     }
//  }
//   }

//   const item = new Rectangle ({width:10, height:5}) ;
//   console.log(item);
// console.log(item.height);
// item.width = true;
// console.log(item.height)

// *******Task-2******* \\
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являється випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// Приклад ініціалізації екземпляру класа:

// class User {
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }

//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const diff = currentYear - this.year;

//     if (diff > 5) {
//       return "Студент являється випускником";
//     }

//     return `${diff} курс`
//   }
// }

// const student = new Student("Петрик", "Пяточкин", 2019);
// console.log(student);
// // // const student = new Student('Петрик', 'Пяточкин', 2019);
// // // console.log(student);
// // console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse()); //поверне 4


// *******Task-3******* \\
// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//     static counter = 0;
//     static addHero(){
//         // Hero.counter += 1
//         this.counter += 1
//     }
//     constructor(name){
//         this.name = name;
//         this.level = 1;
//         this.health = 200;
//         Hero.addHero()

//     }

//     attack(person){
// person.health -= 10;
// console.log(`Остаток здоровья ${person.health}`);
//     }

//     heal(){
//         this.health += 10;
//     }
// }

// console.log(Hero.counter);
// const bloodseker = new Hero("Bloodseker");
// const venom = new Hero("Venom");
// console.log(Hero.counter);
// bloodseker.attack(venom);
// bloodseker.attack(venom);
// venom.heal();
// bloodseker.attack(venom);
// console.log(venom);
// // console.log(bloodseker.heal());
// console.log(bloodseker);
// // console.log(Hero.counter);

// *******Task-4******* \\
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

// class BankAccount {
//   #balance = 0;
//   deposit(amount) {
//     if (amount > 0) {
//       this.#changeBalance(amount);
//       return;
//     }

//     console.error("Сума має бути більша за 0");
//   }

//   withdraw(amount) {
//     if (amount <= 0) {
//       console.error("Сума має бути більша за 0");
//     } else if (this.#balance < amount) {
//       console.error("Недостатньо коштів на рахунку");
//     } else {
//       this.#changeBalance(-amount);
//     }
//   }

//   #changeBalance(amount) {
//     this.#balance += amount;
//   }
// }

// const instance = new BankAccount();
// instance.deposit(100);
// instance.deposit(-1200);
// instance.withdraw(100)
// console.log(instance);



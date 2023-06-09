 //----------          LEVEL        1        ----------------
const user = ["Raquel", "Crespo", "26", "Spain", "Madrid"];

const userJSON = JSON.stringify(user, undefined, 4);
localStorage.setItem("user", userJSON)
console.log(localStorage);


//----------          LEVEL        2        ----------------
const student = {
    name: "Raquel",
    lastname: "Crespo",
    age: 26,
    skills: ["HTML", "CSS", "Javascript"],
    country: "Spain",
};

const studentJSON = JSON.stringify(student, undefined, 4);
localStorage.setItem("student", studentJSON);
console.log(localStorage); 

//----------          LEVEL        3       ----------------
const loquesea = 
{
  firstName: "Joseph",
  lastName: "Dredd",
  income: {
    salary: 5000,
    bonus: 1000,
    landLord: 1200,
  },
  expenses: {
    cocoa: 2000,
    rent: 500,
    magazines: 100,
  },
  totalIncome: function () {
    let total = 0;
    let allIncomes = Object.keys(loquesea.income);
    for (const income of allIncomes) {
      total += loquesea.income[income];
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    let allExpenses = Object.keys(loquesea.expenses);
    for (const expense of allExpenses) {
      total += loquesea.expenses[expense];
    }
    return total;
  },
  accountInfo: function () {
    console.log(`
      Nombre: ${this.firstName}
      Apellido: ${this.lastName}
      Ganancias: ${this.totalIncome}
      Gastos: ${this.totalExpense}
    `);
    return total;
  },
  addIncome: function (type, amount) {
    this.income[type] = amount;
  },
  addExpense: function (type, amount) {
    this.expenses[type] = amount;
  },
  accountBalance: function () {
    let totalBalance = this.totalIncome() - this.totalExpense();
    return totalBalance;
  }
}

loquesea.addIncome("extraSalary", 300);
loquesea.addExpense("lastMinuteExpense", 50);
console.log(loquesea);

let loqueseaJSON = JSON.stringify(loquesea, undefined, 4);
localStorage.setItem("loquesea", loqueseaJSON);
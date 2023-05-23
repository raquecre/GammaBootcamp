 + [💻 Ejercicios](#💻-ejercicios)
    - [Ejercicios: Nivel 1](#ejercicios-nivel-1)
    - [Ejercicios: Nivel 2](#ejercicios-nivel-2)
    - [Ejercicios: Nivel 3](#ejercicios-nivel-3)

### Ejercicios: Nivel 1

1. Crear un objeto vacío llamado dog
1. Imprime el objeto dog en la consola
1. Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve _woof woof_
1. Obtener name, legs, color, age y el valor de bark del objeto dog
1. Establecer nuevas propiedades al objeto dog: breed, getDogInfo

### Ejercicios: Nivel 2

1. Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
1. Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.

   ````js
   const users = {
     Alex: {
       email: 'alex@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript'],
       age: 20,
       isLoggedIn: false,
       points: 30
     },
     John: {
       email: 'john@john.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
       age: 25,
       isLoggedIn: false,
       points: 50
     },
     Brook: {
       email: 'daniel@daniel.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
       age: 30,
       isLoggedIn: true,
       points: 50
     },
     Daniel: {
       email: 'daniel@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     John: {
       email: 'john@john.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
       age: 20,
       isLoggedIn: true,
       points: 50
     },
     Thomas: {
       email: 'thomas@thomas.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     Paul: {
       email: 'paul@paul.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
       age: 20,
       isLoggedIn: false,
       points: 40
     }
   }```

   ````

1. Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
1. Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
1. Obtener todas las claves o propiedades del objeto usuarios
1. Obtener todos los valores del objeto usuarios
1. Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.

### Ejercicios: Nivel 3

1.  Crea un objeto literal llamado _personAccount_. Tiene las propiedades _firstName, lastName, incomes, expenses_ y tiene los metodos _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ y _accountBalance_. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.

2.  Los ejercicios:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()

```js
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "John",
    email: "john@john.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
```

Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB.
a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.  
 b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación

3. El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades.
   a. Crear una función llamada rateProduct que califique el producto
   b. Crear una función llamada averageRating que calcule la valoración media de un producto

4. Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like
// function DeleteUserAction1(userId) {
//     this.key = "DELETE_USER",
//         this.payload = {
//             userId: userId
//         }
// }
//
// const deleteUserAction1 = new DeleteUserAction1(111)
//
// console.log(deleteUserAction1)
//
//
//
// class DeleteUserAction2 {
//     constructor(userId) {
//         this.key = "DELETE_USER",
//             this.payload = {
//                 userId: userId
//             }
//     }
// }
//
// const deleteUserAction2 = new DeleteUserAction2(222)
//
// console.log(deleteUserAction2)

//function User (name, age) {
//     this.name = name
//     this.age = age
//     this.hello = function () {console.log("Hello "+this.name)}
// }
//
// const gago = new User("Gago", 56)
//
// const valo = new User("Valod", 36)
//
// gago.hello()
//
// valo.hello()
//
// console.log(gago.hello===valo.hello)
//


// function hello() {
//     console.log("Hello " + this.name)
// }
//
// function User(name, age) {
//     this.name = name
//     this.age = age
//     this.hello=hello
// }
//
// const gago = new User("Gago", 56)
//
// const valo = new User("Valod", 36)
//
// gago.hello()
//
// valo.hello()
//
// console.log(gago.hello === valo.hello)


// User.prototype.hello= function () {console.log("Hello "+this.name)}
//
// function User (name, age) {
//     this.name = name
//     this.age = age
// }
//
// const gago = new User("Gago", 56)
//
// const valo = new User("Valod", 36)
//
// gago.hello()
//
// valo.hello()

//
//
// class User {
//
//
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     hello  () {
//         console.log("Hello " + this.name)
//     }
// }
//
// const gago = new User("Gago", 56)
//
// const valo = new User("Valod", 36)
//
// gago.hello()
//
// valo.hello()
//
// console.log(gago.hello===valo.hello)
//
// console.log(gago.hello===User.prototype.hello)

//
// class User {
//    
//     #age
//     constructor(name, age) {
//         this.name = name
//         this.#age = age
//     }
//
//     hello() {
//         console.log("Hello " + this.name)
//     }
//    
//     getAge () {return this.#age}
// }
//
// const gago = new User("Gago", 56)
//
// // console.log(gago.#age)
//
// console.log(gago.getAge())


// GETTER and SETTER

// class User {
//
//     #age
//
//     constructor(name, age) {
//         this.name = name
//         this.#age = age
//     }
//
//     set age(num) {
//         this.#age = num
//     }
//
//     get age() {
//         return this.#age
//     }
//
// }
//
// const gago = new User("Gago", 56)
//
//
// gago.age = 77
//
//
// console.log(gago.age)

//
// class User {
//
//     #name
//
//     constructor(name) {
//         this.#name = name
//     }
//
//     set name(name) {
//         this.#name = name
//     }
//
//     get name() {
//         return this.#name
//     }
//
//     greet() {
//         console.log("Hi I'm simole user and my name is " + this.#name)
//     }
// }
//
// class Developer extends User {
//
//     #language
//
//     constructor(name, age, language) {
//         super(name, age);
//         this.#language = language
//     }
//
//     set language(language) {
//         this.#language = language
//     }
//
//     get language() {
//         return this.#language
//     }
//
//     greet() {
//         console.log("Hello, I'm developer and my name is " + this.name)
//     }
// }
//
// const valo = {
//     greet () {
//         console.log("I'm Valo")
//     }
// }
//
//
// const gagoUser = new User("Gago User", 56)
//
// const gagoDeveloper = new Developer("Gago Developer", 56, "JS")
//
//
// const people = [gagoUser, gagoDeveloper, valo]
//
// people.forEach(el=>el.greet())




class SuperArray extends Array {
    get lenght () {
        return 100
    }
}

const myArr = new SuperArray(1,2)
console.log(myArr.lenght)

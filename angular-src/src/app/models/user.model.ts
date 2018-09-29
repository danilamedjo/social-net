export class User {
    id: Number;
    firstName: String;
    surname: String;
    age: Number;
    gender: String;
    friends: String[];

    constructor(id: Number, firstName: String, surname: String, age: Number, gender: String, friends: String[]) {
        this.id = id;
        this.firstName = firstName;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.friends = friends;
    }
}

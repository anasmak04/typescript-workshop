// Type Annotation ***************************
let theName: String = "Anas";
let theAge: number = 22;
let Hired: boolean = true;
let all: any = undefined;
all = 80;
all = "Hello";
console.log(theName);
console.log(theAge);
console.log(Hired);
console.log(all);
// Type Annotations With Arrays ***************************
let arrayStrings: String[] = ["Jhon", "Smith"];
let arrayNumbers: number[];
arrayNumbers = [1, 2, 3];
let arrayBooleans: boolean[] = [true, false];
// Type Annotations With Arrays Multidimensional  ***************************
let arrayMulti: (String | Number | String[])[] = ["jhon", 22, ["hello"]];



let userName = "Pawko Byczkenns     ";
userName = userName.trim(); //deletes leading and trailing white spaces and 
userName = userName.toLowerCase(); 
userName = userName.toUpperCase();
threeTimesUserName = userName.repeat(3);


let someBool = userName.startsWith("PAWK");

if(someBool){
    console.log(userName.endsWith("NNS"));
}


let userString = userName.toLowerCase().includes("ko ") ? "To pawko" : "Chuj nie pawko";
console.log(userString)


let phoneNumber = "123-234-542";

phoneNumber = phoneNumber.replaceAll("-","PIZDA");
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(20, "Pizda"); //pad - podkładac. wypelnia ciag znakow od poczatku podanym ciągiem znakow jako 2 argument. 1 argument to docelowa dlugosc ciagu znakow
phoneNumber = phoneNumber.padEnd(40, "Dżakson");

console.log(phoneNumber);



const fullName = "Paweł Biesaga";

const spaceIndex = fullName.indexOf(" ");

let firstName = fullName.slice(0,spaceIndex);
let secondName = fullName.slice(spaceIndex+1);
console.log(firstName, secondName);



const email = "pawko32@gmail.com";
let username = email.slice(0,email.indexOf("@"));
let extension = emali.slice(email.indexOf("@"+1));

console.log(userName,extension);
const countries = ["spain", "france","mexico","poland","usa","brazil","china"];

const spainMaleNames = [
   "Alejandro", "Carlos", "Diego", "Francisco", "Gabriel", 
   "Hugo", "Javier", "Jorge", "José", "Juan", 
   "Luis", "Manuel", "Mario", "Miguel", "Pablo", 
   "Pedro", "Raúl", "Roberto", "Santiago", "Tomás"
];

const spainFemaleNames = [
   "Ana", "Beatriz", "Carmen", "Clara", "Dolores", 
   "Elena", "Isabel", "Laura", "Lucía", "María", 
   "Marta", "Natalia", "Patricia", "Pilar", "Rosa", 
   "Sara", "Silvia", "Sofía", "Teresa", "Victoria"
];

const spainLastNames = [
   "García", "Fernández", "González", "Rodríguez", "López", 
   "Martínez", "Sánchez", "Pérez", "Gómez", "Martín"
];

const franceMaleNames = [
   "Alexandre", "Benoît", "Charles", "David", "Étienne", 
   "François", "Guillaume", "Hugo", "Jean", "Julien", 
   "Laurent", "Louis", "Marc", "Nicolas", "Olivier", 
   "Philippe", "Pierre", "Romain", "Sébastien", "Thomas"
];

const franceFemaleNames = [
   "Anne", "Aurore", "Camille", "Chloé", "Claire", 
   "Élise", "Emilie", "Isabelle", "Julie", "Laure", 
   "Louise", "Madeleine", "Marie", "Mathilde", "Nathalie", 
   "Pauline", "Sophie", "Suzanne", "Valérie", "Victoire"
];

const franceLastNames = [
   "Martin", "Bernard", "Dubois", "Thomas", "Robert", 
   "Richard", "Petit", "Durand", "Leroy", "Moreau"
];

const mexicoMaleNames = [
   "Alejandro", "Carlos", "Daniel", "Eduardo", "Fernando", 
   "Francisco", "Gabriel", "Javier", "Jesús", "José", 
   "Juan", "Luis", "Manuel", "Miguel", "Oscar", 
   "Pedro", "Raúl", "Ricardo", "Roberto", "Sergio"
];

const mexicoFemaleNames = [
   "Adriana", "Alejandra", "Ana", "Carla", "Claudia", 
   "Daniela", "Elena", "Gabriela", "Isabel", "Laura", 
   "Lucía", "María", "Martha", "Patricia", "Paula", 
   "Rosa", "Sandra", "Sofía", "Verónica", "Yolanda"
];
const mexicoLastNames = [
   "Hernández", "García", "Martínez", "López", "González", 
   "Pérez", "Sánchez", "Ramírez", "Cruz", "Flores"
];
const polandMaleNames = [
   "Adam", "Andrzej", "Bartek", "Dawid", "Grzegorz", 
   "Jakub", "Jan", "Kacper", "Karol", "Krzysztof", 
   "Łukasz", "Maciej", "Marcin", "Marek", "Michał", 
   "Paweł", "Piotr", "Rafał", "Tomasz", "Wojciech"
];
const polandFemaleNames = [
   "Agnieszka", "Anna", "Barbara", "Ewa", "Joanna", 
   "Julia", "Katarzyna", "Kinga", "Magdalena", "Małgorzata", 
   "Maria", "Marta", "Monika", "Natalia", "Patrycja", 
   "Paulina", "Sylwia", "Weronika", "Wioletta", "Zofia"
];

const polandLastNames = [
   "Nowak", "Kowalski", "Wiśniewski", "Wójcik", "Kowalczyk", 
   "Kamiński", "Lewandowski", "Zieliński", "Szymański", "Woźniak"
];

const usaMaleNames = [
   "Andrew", "Benjamin", "Brandon", "Christopher", "Daniel", 
   "David", "Edward", "James", "John", "Joseph", 
   "Joshua", "Matthew", "Michael", "Nicholas", "Robert", 
   "Ryan", "Samuel", "Thomas", "William", "Zachary"
];

const usaFemaleNames = [
   "Abigail", "Amanda", "Ashley", "Brittany", "Christina", 
   "Emily", "Emma", "Hannah", "Isabella", "Jennifer", 
   "Jessica", "Lauren", "Madison", "Megan", "Michelle", 
   "Olivia", "Samantha", "Sarah", "Sophia", "Victoria"
];

const usaLastNames = [
   "Smith", "Johnson", "Williams", "Jones", "Brown", 
   "Davis", "Miller", "Wilson", "Moore", "Taylor"
];

const chinaMaleNames = [
   "Bai", "Chen", "Dong", "Feng", "Guo", 
   "Hao", "Hong", "Jian", "Jun", "Lei", 
   "Li", "Ming", "Qiang", "Shan", "Wei", 
   "Xiao", "Yang", "Yi", "Yong", "Zhi"
];

const chinaFemaleNames = [
   "Ai", "Bao", "Chen", "Fang", "Hua", 
   "Jia", "Lan", "Li", "Mei", "Ning", 
   "Ping", "Qing", "Rong", "Shan", "Ting", 
   "Wei", "Xia", "Yan", "Ying", "Zhen"
];
const chinaLastNames = [
   "Wang", "Li", "Zhang", "Liu", "Chen", 
   "Yang", "Huang", "Zhao", "Wu", "Zhou"
];
const brazilMaleNames = [
   "André", "Carlos", "Daniel", "Eduardo", "Felipe", 
   "Gabriel", "Gustavo", "João", "José", "Lucas", 
   "Luiz", "Marcelo", "Mateus", "Paulo", "Pedro", 
   "Rafael", "Ricardo", "Rodrigo", "Thiago", "Vitor"
];

const brazilFemaleNames = [
   "Adriana", "Amanda", "Beatriz", "Camila", "Carla", 
   "Carolina", "Fernanda", "Gabriela", "Isabela", "Juliana", 
   "Larissa", "Letícia", "Luana", "Maria", "Mariana", 
   "Natália", "Patrícia", "Rafaela", "Roberta", "Thais"
];

const brazilLastNames = [
   "Silva", "Santos", "Oliveira", "Souza", "Rodrigues", 
   "Ferreira", "Almeida", "Pereira", "Lima", "Gomes"
];

const countriesAmount = countries.length;

let nationality;
let sex;
let name;
let surname;

function checkFirstForm(){
    let x = document.forms["first_form"]["randomData"].value;
    console.log(x, typeof x);
    if(x === "yes"){
        createRandomData();
        document.getElementById("hook").textContent = `Imię: ${name} \n Nazwisko ${surname} Sex: ${sex} Nationality: ${nationality}`;
    }else{
        createSecondForm();
        document.getElementById("ghoo")
    }
    
    return false;
    
}

function createRandomData(){
    nationality = countries[Math.floor(Math.random()*countriesAmount)];
    
    if(Math.floor(Math.random()*2) == 0){
        sex = 'Male';
    }else{
        sex = 'Female';
    }


    switch(nationality){
        case "spain":
            if(sex === 'Male'){
                name = spainMaleNames[Math.floor(Math.random()*spainMaleNames.length)]
            } else{
                name = spainFemaleNames[Math.floor(Math.random()*spainFemaleNames.length)]
            }
            surname = spainLastNames[Math.floor(Math.random()*spainLastNames.length)]
            break;
        case "france":
            if(sex === 'Male'){
                name = franceMaleNames[Math.floor(Math.random()*franceMaleNames.length)]
            } else{
                name = franceFemaleNames[Math.floor(Math.random()*franceFemaleNames.length)]
            }
            surname = franceLastNames[Math.floor(Math.random()*franceLastNames.length)]
            break;
        case "mexico":
            if(sex === 'Male'){
                name = mexicoMaleNames[Math.floor(Math.random()*mexicoMaleNames.length)]
            } else{
                name = mexicoFemaleNames[Math.floor(Math.random()*mexicoFemaleNames.length)]
            }
            surname = mexicoLastNames[Math.floor(Math.random()*mexicoLastNames.length)]
            break;
        case "poland":
            if(sex === 'Male'){
                name = polandMaleNames[Math.floor(Math.random()*polandMaleNames.length)]
            } else{
                name = polandFemaleNames[Math.floor(Math.random()*polandFemaleNames.length)]
            }
            surname = polandLastNames[Math.floor(Math.random()*polandLastNames.length)]
            break;
        case "usa":
            if(sex === 'Male'){
                name = usaMaleNames[Math.floor(Math.random()*usaMaleNames.length)]
            } else{
                name = usaFemaleNames[Math.floor(Math.random()*usaFemaleNames.length)]
            }
            surname = usaLastNames[Math.floor(Math.random()*usaLastNames.length)]
            break;
        case "brazil":
            if(sex === 'Male'){
                name = brazilMaleNames[Math.floor(Math.random()*brazilMaleNames.length)]
            } else{
                name = brazilFemaleNames[Math.floor(Math.random()*brazilFemaleNames.length)]
            }
            surname = brazilLastNames[Math.floor(Math.random()*brazilLastNames.length)]
            break;
        case "china":
            if(sex === 'Male'){
                name = chinaMaleNames[Math.floor(Math.random()*chinaMaleNames.length)]
            } else{
                name = chinaFemaleNames[Math.floor(Math.random()*chinaFemaleNames.length)]
            }
            surname = chinaLastNames[Math.floor(Math.random()*chinaLastNames.length)]
            break;
    }

    console.log(name,surname,sex)


}

function createSecondForm(){
        var hook = document.getElementById("first_hook");
        var br = document.createElement("br")
        var form = document.createElement("form");
        form.setAttribute("method","post");
        form.setAttribute("action", "js/random_id_card.js");
        form.setAttribute("onsubmit","checkSecondForm()");
}






window.checkFirstForm = checkFirstForm;
export { checkFirstForm };



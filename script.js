console.log("hello world");

//Detta är sätt att deklarera en variabel
/* 
1. const //är en constant och går ej att ändra
2. let //tillåter att man ändrar variabeln
3. var // gammal variant att deklarera från JavaScripts början
*/
//Variabler börjar alltid med liten bokstav. Stor första bokstav är reserverat för klasser.
//Tillåtna tecken är a-z, A-Z, _, $ (vanligt när man laddar in kod någon annan stans ifrån).
//Allrig å, ä, ö
//Aldrig börja med en siffra, ex 1exempel, istället exempel1

//Om console.log inte fungerar ex i chrome kan man istället skriva console.dir


// Namngivningssätt är:
//camelCase
const exampleOne = 'Exempel ett';

//snake case
const example_two = 'Exempel två';

//Sting = sträng
const hello ="Hej världen";
const world ="Hello world";

//Template literals
const myName = 'Marie';
console.log(myName);
const greetPerson = `Hello ${myName}!`; //Infogar en sträng inuti en annn sträng.
console.log(greetPerson);

//Number = tal
const myAge = 42;

//Boolean = sant/falskt
const bool = true;
const isPlaying =false;

//Null = "ingenting"
const init = null;

//Undifined = "odefinierat"

//Objekt. Ett objekt är en variabel med flera egenskaper med individuella värden.
const person ={ //Deklarerad variabel. 
    name: 'Kalle', //Tilldelat värde
    lastName: 'Anka', //Tilldelat värde
    age: '54' //Tilldelat värde
};

console.log(person);
console.log(person.name);
console.log(person['name']);

//Symbol (har med objekt att göra)

//index
const spices = ['kanel', 'curry', 10, true]; //det går att blanda i en array, men inte så smart kanske..

const date = new Date();

const points = 10; //number
const maxScore = '10'; //string
    console.log(points==maxScore); //JavaScript kan jämföra number med string gensom två st =
    console.log(points===maxScore); //JavaScript kan INTE jämföra number med string gensom tre st =


const num1 = '1'; // sträng - siffran 1
const num2 = '456'; // sträng - siffran 456
const sum = num1 + num2;
console.log(sum); // resultat: 1456


const num3 = '1'; // sträng - siffran 1
const num4 = '456'; // sträng - siffran 456
const summery = Number(num3) + Number(num4);
console.log(summery); // resultat: 457


//STRÄNGFUNKTIONER

const myName2 = 'Marie';
console.log(myName2.toUpperCase());
console.log(myName2.toLowerCase());
console.log(myName2.charAt(2)); //En sträng är egentligen en array av bokstäver.. Detta skriver ut bokstav nummer 3.
//Kolla webbsidan mdn string förinbyggda funktioner




  const myDiv = document.querySelector('.someText');
  console.log(myDiv);



  const myListItem = document.querySelector('#firstItem');
  console.log(myListItem.parentElement);
  console.log(myListItem.nextElementSibling);

  //querySelector för att välja ut element från HTML
  const myParagraf = document.querySelector('h1');
  console.dir(myParagraf);

  myParagraf.textContent = 'Texten är en annan än det står i HTML';
  myParagraf.style.color= 'red';
  myDiv.style.backgroundColor= 'blue';


  //knappen
  const btn = document.querySelector('#knapp');
  const text = document.querySelector('p');
  btn.addEventListener('click', handleClick);
  function handleClick (){
    myDiv.style.backgroundColor='beige';
    myParagraf.style.color='blue';
    text.innerHTML = text.innerHTML + '+ Denna text tillkommer när du tryckte!'; 
  }

  //ett exempel hur man kan göra om text till webbvänliga textsträngar
  const myBlogPostTitel = 'My Programming Experiments!'; //skapa variabel och en text till consolen
  function remake(str, lowercase){ //funktion som döpts till remake i det här fallet, hämtar in en sträng och möjlighet att kontrollera lowercase
    if (lowercase){
        const newStr = str.toLowerCase().replaceAll(' ', '-'); //ny variabel som gör om den gamla och ersätter mellanslag med -
        console.log(newStr.toLowerCase());//skriver ut nya varabeln
    }
    else{
        console.log(str.toUpperCase());
    }
  }
  remake(myBlogPostTitel, true);


  //Gissa talet spel
  const random = Math.ceil(Math.random()*100);
  console.log(random);

  const feedback = document.querySelector('#feedback');
  const answer = document.querySelector('#answer');
  const input = document.querySelector('#guess');
  const spel_div = document.querySelector('.gissnings_spel');

  input.addEventListener('keydown', checkKeyPress);

    function checkKeyPress(evt){
        if (evt.keyCode==13){ //detta är koden för enter
            if (input.value==random){
                feedback.innerHTML ='Du har gissat rätt!';
                answer.innerHTML = random + " Grattis!";
                spel_div.style.backgroundColor = 'yellow';
            }
            else if (input.value > random){
                feedback.innerHTML ='Du har gissat för högt';
            }
            else {
                feedback.innerHTML ='Du har gissat för lågt';
            }
        }
    }
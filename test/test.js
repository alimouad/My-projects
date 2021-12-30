// var x = 2;
// var x = 3;

// console.log(x);
// let x = 2;
// console.log(`hello "world"`);
// let x = "i love js ";
// let y = "too much";
// let z = "and programming";
// let w = "language";
// console.log(`${x} ${y}
//  ${z} ${w}`);
//  let a = 19;
//  let b = "16";
//  let c = true;
//  console.log(a + b);
//  let m = 12;
//  m += 12;
//  m -= 4;
//  m /= 10;
//  console.log(m);
//  let n = 2;
//      n = 3;
//  console.log(n);
//  const SITTINGS = {
//      name: "ali",
//      age : 18
//  };
//  SITTINGS.name = "mouad" ;
//  console.log(SITTINGS);

// let test = _ => 9;
//  console.log(test());

// let regular = (atom, vs) => atom ** vs;
// console.log(regular(2, 4));
// let showe = () => document.getElementById("show").innerHTML = this;
// window.onload = showe;
// const theKind = "male";
// let ali = `hello every body im ${theKind === "male" ? "Mr" : "Mrs"} Mouad 
// i love you all
// im ${theKind}  
// i will get married with you` ;
// console.log(ali);

// let first = [1,2,3],
// second = [4,5];
// let all = [...first, ...second];
// console.log(all);


// function sum(x, z, y){
//     return z + x + y;

// }
// let myNumbers = [1, 2, 4]
// console.log(sum(...myNumbers));

// let arrey = [1, 3, 5],
//     Arrey = [...arrey];
// Arrey.push(7);
// console.log(Arrey);
// console.log(arrey);

// // function btt(username = "Mike", age = 33, contry = "Norway"){
//     // username = username || "moad";
//     // contry = contry || "Moroco";
//     // age = age || 18;
// //     return `hello im ${username} im ${age} years old i come from ${contry} `
// // }
// // console.log(btt("Mouad", 19, "Morocco"));
// // console.log(btt());

// function alls(a, b, c, ...myparam){
//     console.log(`my A ${a} `);
//     // console.log(`my B ${b} `);
//     // console.log(`my C ${c} `);
//     // console.log(`my D ${myparam} `);

//     console.log("my B" , b);
//     console.log("my C" , c);
//     console.log("my param" , myparam);
//     // return "console document";

// }
// console.log(alls("one", "two", "three", "four", "five", "six"));
// let alii = "mouad";
// // let age = 22;
// console.log(`my name is : ${alii} 
// // and my age is : ${age}`);


// let v = 'i love you so much';
// console.log(v.includes('lo',7));
// let u = 'i love you so much';
// console.log(v.repeat(1000000));


const useer = {
    name : 'ali',
    age : 19,
    contry : 'Morocco',
    gender : 'Male',
    color : "red",
    langs : {
        html: '70%' ,
        css : '60%' ,
        js : '50%'
    }
};
const {html,css,js, python = "100%"} = useer.langs;

console.log(` my name is ${html} and my age is ${css} and im from ${js} also i am ${js} and my favourit color is ${css} my langs are ${html}, my python Progress ${python}`)
  const sports = ['football',["goolf", "regby"], "tennis", 'basketball', "handball","golf", "swimming", "biking", "surfing", "natation"];
  const [one ,[first, second], two, three, four = "hanall", ...thre3 ]= sports;
  console.log(thre3);
  console.log (`the sports that i love ${one}, ${three}, ${thre3}`);

  let book = "ali",
      vedio = "mouad";
[book,vedio] = [vedio, book];
 console.log(`my boy friend's name is ${book}, and my friend'name is ${vedio}`) ;   

console.log(10 - "ali");
let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-d * e);
console.log(-d + e++ + ++f + g++);
console.log(100..toString());
console.log(parseInt("200 ali"));
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.50));
console.log(Number.isInteger(100));
console.log(Number.isNaN(" 10mouad"));
console.log(Math.round(1.5));
console.log(Math.round(1.4));
console.log(Math.trunc(22.3));
let name1 = '  mouad   ';
console.log(name1.charAt(0)) ;
console.log(name1.length)
console.log(name1.trim().toUpperCase().charAt(2)) ;
let myName = "i love you Madiha";
console.log(myName.indexOf("love",8)) 
console.log(myName.indexOf("i")) 
console.log(myName.lastIndexOf("i")) 
console.log(myName.slice(7, 10));
console.log(myName.split(" ",2))
console.log(myName.substr(-6,5 ))
console.log(myName.includes(`Madiha`))
console.log(myName.startsWith(`Madiha`,10))
console.log(myName.endsWith(`Madiha`,17))
console.log(myName.substring(0))
let v  =  "Elzero web school";
console.log(v.slice(2,6).toUpperCase(2));
console.log(v.charAt(13).repeat(8).toUpperCase());
console.log(v.split(" ", 1));
console.log(v.substr(0, 11));
console.log(10 === "10");
let price = 200;
let discount = true;
let discountAmount = 20;  
let contry  = 'morocco';
let madiha = 'mouad'

if (discount == false){
    price -= discountAmount ;

}
else if ( contry === "morocco"){
    if (madiha === "muad"){
        price -= 50 ;
    }
    else {
        price -=10;
    }
}
console.log(price);
let bb = 0;
console.log(`hello mr ${bb || "muad"}`);
console.log(`hello mr ${bb ?? "muad"}`);


let mom =  "daouia";
switch(mom){
    case "amal":
       console.log("this is mma");
       break;
    case "daouia":
       console.log("this is ma");
       break;
    case "ahmed":
       console.log("this is mma");
       break;
    default:
    console.log("alui");
}
let myFriends = ["mouad", "ahmed", "madiha", "ahmed"];
let myFrinds = ["mouad", "ahmed", "madiha"];
console.log(`i love you ${myFriends[3][1]} so much`);
// myFriends[3] = ["ihsaan", "alia"];

myFrinds[myFrinds.length -1] = "kamal";
console.log(myFrinds);
console.log(Array.isArray(myFriends));

// console.log(["zham"] == ["zham"]);
// myFriends.unshift('kamal','sahim');
// console.log(myFriends);
// let removedName = myFriends.shift();
// let removeName = myFriends.pop();
// console.log(`${removedName} you'are my best friend`);
// console.log(`${removeName} you'are my best friend`);

console.log(myFriends.lastIndexOf("ahmed",-1));

console.log(myFriends);
myFriends.push("karim","khadija");
console.log(myFriends);
console.log(myFriends.sort());
console.log(myFriends.slice(2,5));
myFriends.splice(0,4);
console.log(myFriends);
   

let myFrids = [1, 2, "ali", "mouad", "ahmed",3, 5, "karim", "khadija", 0, 5, 7 ];
let wone = []
// for (let i= 0; i < myFrids.length; i+=2){
//     if (typeof myFrids[i] === "number"){
//         continue;
//     }

// console.log(myFrids[i]);
// }
// console.log(wone);
let i = 0;
do {
    console.log(i);
    i +=1;
}while (false);
console.log(i);


function generateYears(start, end, eclude=2012){
    for(let i = start; i<= end; i++){
        if(i === eclude){
            continue;
        }
       console.log(i)
    }
}
generateYears(2002,2021);

function calc(num1,num2){
    return num1 + num2
    
}
let result = calc(20, 30);
console.log(result + 100);

function hiring(nAme,age,status){
  if (nAme === 'string' && age === "number" && status === "boolean"){
      if (nAme === 'ossama' && age === 38 && status === true){
        console.log(`hello ${nAme}, your age is ${age}, you are available for hire`) 
      }
      else if(nAme === 'ossama' && age === 38 && status === false){
        console.log(`hello ${nAme}, your age is ${age}, you are not available for hire`) 
      }
     
  }
  
}
hiring("ossama",38 , true);


// let Samie = {Name: "ali", Iname: "mouad", age : 18};
// let text = "";
// for (let x in Samie);
// text += Samie[x];
// console.log(text);


const companies = [12, 334, 67, 81, 12,1, 15 ,9 ,03,22 ];
const company = companies.filter(age => age >=19);
console.log(company);
const numbers = companies.sort((a,b) => b - a);
console.log(numbers);


let users = {
    user : "ali",
    age: 19,
    city: "Safi",
    skills :{
        htmls: "90%",
        sass: "60%",
        js: ["reactjs", "nactivejs", "angularjs"]
    }
};
function showSomething({user,age, city, skills:{htmls,sass, js:[,dos,thres]}}){


// const {user,age, city, skills:{htmls,sass, js:[,dos,thres]}} = users;
 console.log(`im ${user}, im ${age} years old from ${city}`)
}
showSomething(users);


let Num = new Set("mouada");
Num.add("ali").add("mouad");
Num.clear();
console.log(Num.size);
let arr = [1, 4, 5,5, 4,4];
console.log(Num);
console.log(arr);

let usr = {};
usr['username'] = "oktawia";
usr.age = 12;
console.log(usr.username);
console.log(usr["age"]);


function sayMesaage(firstNmae, lastName){
    let message = `hello darling`;

    function sayMessage(){

        function getFull(){

            return `${firstNmae} ${lastName}`;
        }

      return `${message} ${getFull()}`;

    }
    return sayMessage();
}
    console.log(sayMesaage("moaud", "ali"));

   let Print = (number) => number
    console.log(Print(100));


    var x = 30;

if (10 === 10){
    let x = 100;

}
console.log(x);


// let byId  = document.getElementById("ali");
// let byIid  = document.getElementsByTagName("p");
// let byIiid  = document.getElementsByClassName("mouad");
let byIiiid  = document.querySelector(".mouad");
// console.log(document.title);
// console.log(document.body);
// console.log(byId);
console.log(byIiiid.innerHTML);
byIiiid.textContent = "hy from <span>Js</span> Mouad";
document.images.src = "http://www.google.com";
// console.log(byIiiid);
// console.log(byIiid[0]);
// console.log(byIid[1]);
// byId.innerHTML = "I love you mouad"

let myLink = document.querySelector(".link");
myLink.setAttribute("class", "MOUAD");
myLink.setAttribute("href", "http://www.google.com");
myLink.setAttribute("title", "twitter");
myLink.setAttribute("id", "twitter");

let mP = document.getElementsByTagName("p")[0];

if(mP.hasAttribute("data-src")){
    if (mP.getAttribute("data-src") === ""){
         mP.removeAttribute("data-src")
    }
    else {
        mP.setAttribute("data-src", "newvalue");
    }
    
}
else {Ce
    console.log("not found")
}




let firstCre = document.createElement("div");
let attr = document.createAttribute("data-src");
let text = document.createTextNode("product-one")
let comment = document.createComment("this is div")
firstCre.appendChild(comment)
firstCre.className = "ali";

firstCre.setAttributeNode(attr);
firstCre.setAttribute("data-sr", "alo");
firstCre.appendChild(text);




document.body.appendChild(firstCre);


let  myelement = document.createElement("div");
let myelem = document.createElement("h3");
let myelemt = document.createElement("p");

let tex = document.createTextNode("i love you mouad");
let texx = document.createTextNode("i love you oktawia");

myelement.className = "PRODUCT";

myelement.appendChild(myelem);
myelement.appendChild(myelemt);
myelem.appendChild(tex);
myelemt.appendChild(texx);

document.body.appendChild(myelement);


// for (myelement= 0; myelement => 100){

let myDiv = document.querySelectorAll("div")[2];

console.log(myDiv.firstElementChild);


let inputUser = document.querySelector('[name= "user"]')
let inputAge = document.querySelector('[name= "age"]')

document.forms[0].onsubmit = function Ali(){
    

    if (inputUser.value !== "" || inputUser.value.length <= 10){
        console.log("valid");
    }
    if(inputAge.value !== "" || inputAge.value !== "string"){
        console.log("valid");
    }
    else{
        console.log("notvalid")
    }
}


let Arr = [1,2,3,4,5,9];
let newAr =[];

for (let i=0; i < Arr.length; i++){
    newAr.push(Arr[i] + Arr[i])
}
console.log(newAr);



// let addA = Arr.map(function (element, index, arr){
//     return element + element;
// },10)
// console.log(addA)


let addA = Arr.map ((element) => element + element);
console.log(addA);


let Arrr = [-1, -23 ,-4 ,6 ,8 ,10];
let Arrrr = [1, 23 ,4 ,6 ,8,11,80 ,10];

let NewArrrr = Arrrr.filter(function(el){
    return el % 2 === 0 ;
})
console.log(NewArrrr)

let strri = ["M", "O", "@", "@", "U", "A", "@", "D"];
let final = strri.filter(function(el){
    return !el.startsWith("@");
}).join("")

console.log(final);

let names = ["Mouad", "Madiha", "Oktawia", "Aminnne", "Nooooooura"];
let nesNames = names.reduce(function(acc, cur){
    return acc.length > cur.length ? acc : cur;
} )
// let nesNames = names.filter(function(el){
//    return el.startsWith("M");
// } )
console.log(nesNames);
console.log(nesNames.length);

let NewArr = Arrr.map(function(el){
    return el === -el ? -el : el;
})
console.log(NewArr)

let ray = "AWET123TRU";
let newRay = ray.split("").filter(function(el){
    return !isNaN(parseInt(el));
}). map(function(el){
    return el + el
}).join("")
console.log(newRay)

let str = "AWRFE32424";
let newStr = str.split(" ");
console.log(newStr);


let trr = [1,2,3,4];
let newTrr = trr.reduce(function(acc, cur){
      return acc + cur
}, 5);
console.log(newTrr)

let s_div = document.querySelector(".okta");

s_div.addEventListener('click', function(){
    console.log("you clicked on me Mouad")
})

let ull = document.querySelectorAll(" ul li");

ull.forEach(function(el){
    el.onclick = function(){
        ull.forEach(function(el){
            el.classList.add("active")
    })
       this.classList.add("active")
       this.style.display = "none"
    };
})


let Div = document.querySelector(".momo p")

Div.removeChild(p);
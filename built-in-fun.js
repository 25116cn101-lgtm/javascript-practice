function great(name){
    console.log("Hello "+name);
}

great("raman");
great("sohan");
great("karan");

function add(a,b){

    console.log(a+b);
    console.log(a/b);
    console.log(a*b);
    console.log(a-b);
}

add(10,20);

function add1(a,b){
    return a-b;
}

let ans = add1(20,30);

console.log(ans);


function student(){
    return{
        name:"raman",
        age:18,
        course:"B.Tech"
    };
}

console.log(student());


let code="5+5";

console.log(eval(code));


let result="ABC"*5;

console.log(isNaN(result));

console.log(parseInt("100"));


// ======= URL ko safe banata hai =======

let url="https://google.com/search?name=raman kashyap";

console.log(encodeURI(url));


// ====== Encoded URL ko normal bana deta hai ======

let url2="raman%20kashyap";

console.log(decodeURI(url2));


// ====== output mein gap aata hai ismein 20 % ======

let name="Raman%20Kashyap";

console.log(decodeURIComponent(name));
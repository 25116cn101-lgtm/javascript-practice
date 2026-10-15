const arr = [1, 2, 3, 4, 5] 

for (const num of arr) { 
    console.log(num); 
} 

const greetings = "hello world!" 
for (const greet of greetings) { 
    console.log(`Each char is ${greet}`); 
} 


MAPS

const map = new Map() 
map.set(`IN`, "India") 
map.set(`USA`, "United Ststes of America") 
map.set(`FR`, "France") 
for ( const key in  map) {
    console.log(key);
}

for (const [key, value] of map) { 
    console.log(key, `:-`, value); 
} 

const myObject = { 
    'game1': 'NFS', 
    'game2': 'Spiderman' 
} 

for (const [key, value] of Object.entries(myObject)) { 
    console.log(key, ' :- ', value); 
}





const MyObject = {

    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"

}

for (const key in MyObject) {

    console.log(`${key} shortcut is for ${MyObject[key]}`);

}
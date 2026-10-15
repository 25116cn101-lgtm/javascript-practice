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
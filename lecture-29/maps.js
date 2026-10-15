//MAPS

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
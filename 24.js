// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //name iife
    console.log("DB connection established");
})();
// remender ;

((name) =>{
    console.log(`DB connection established ${name}`);
})( "raman" )
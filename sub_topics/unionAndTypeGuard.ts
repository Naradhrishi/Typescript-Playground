type ID = string | number;

function validateID(id: ID): string{
    if(typeof id == "string"){
        return "String ID: " + id.toUpperCase();
    }else{
        return "Number ID: " + (id * 10).toString();
    }
}

console.log(validateID("abc123"));
console.log(validateID(42));

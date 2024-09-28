function modifyNested(obj) {
    obj.address.city = "New York";  
}

let company = {
    name: "TechCorp",
    address: {
        city: "San Francisco",
        state: "CA"
    }
};
modifyNested(company);

console.log(company.address.city); 

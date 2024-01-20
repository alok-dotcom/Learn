let alokDetails = {
    name : "Alok Raj",
    age : 23,
    profession: "Software Developer"
}

let shashankDetails = {
    name: "shashank Kumar",
    age: 29,
    profession: "Data Scientist"
}

const showUserName = function(city) {
    console.log(this.name + " " + city);
}

//call
showUserName.call(alokDetails);
showUserName.call(shashankDetails);

//apply
showUserName.call(alokDetails,"gaya");
showUserName.apply(shashankDetails,["Gaziabad"]);

//bind
let bindResult = showUserName.bind(shashankDetails,"Lucknow");

bindResult();
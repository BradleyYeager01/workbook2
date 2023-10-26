function parseAndDisplayName(name) {
let positionOfFirstSpace = name.indexOf(" ");

let first = name.substring(0, positionOfFirstSpace);
let last = name.substring(positionOfFirstSpace + 1);


return(`Name: ${name}
First name: ${first}
Last name: ${last}`);

}

console.log(parseAndDisplayName("Brenda Kaye"));
console.log(parseAndDisplayName("Ian Austin"));
console.log(parseAndDisplayName("Siddalee Grace)"));
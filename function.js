function getSocSecTax(x){
    let total = x * .062;
    return total;
}

console.log(getSocSecTax(13350));

function getMedicareTax(x) {
    let medicare = x * .0145;
    return medicare;
}

console.log(getMedicareTax(13350));



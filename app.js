// by function work 
function updateProductNumber(product, price, isIncrasing) {
    // This fuction for both section
    //  get the input value form html both
    const productInput = document.getElementById(product + '-number');
    // covert to string to number both
    let productNumber = productInput.value;
    // make condition for decrase and incrase button  
    if (isIncrasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}
// this for phone section incrase and descrase section 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);

})

//   this for plus button called section // handle case incrase and decrasae events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
//    this for minus button called section
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

})

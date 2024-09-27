// var productcontainer = document.getElementById("products")
// var search = document.getElementById("search")
// var productlist = productcontainer.querySelectorAll("div")

// search.addEventListener("keyup",function(){
//     var enteredvalue = event.target.value.touppercase()

//     for(count=0;count<productlist.length;count=count+1){
//         var productname = productlist[count].querySelector("p").textcontent

//         if(productname.touppercase().indexof(enteredvalue)<0)
//         {
//             productlist[count].style.display="none"
//         }
//         else{
//             productlist[count].style.display="block"
//         }
//     }
// })


var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("p").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});

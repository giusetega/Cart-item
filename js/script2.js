window.onload = function() {

    //    {   
    //            "price1": 1.41,
    //            "price2": 1.42,
    //            "price3": 1.43,
    //            "minAmount1": 1,
    //            "minAmount2": 3,
    //            "minAmount3": 4,
    //            "description": "Description 1"
    //        },

    // Initialize array (JSON)
    let arr = [
        {   
            "price1": 1.41,
            "price2": 1.42,
            "price3": 1.43,
            "minAmount":[1, 3, 4],
            "description": "Asta refrigerante per vino c/tappo versatore. Asta: Ø 2,5 cm x 32 H. Scatola: 9 x 21 x 4 H - In scatola regalo"
        }, {
            "price1": 2.71,
            "price2": 2.72,
            "price3": 2.73,
            "minAmount":[2, 6, 32],
            "description": "Asta refrigerante per vino c/tappo versatore. Asta: Ø 2,5 cm x 32 H. Scatola: 9 x 21 x 4 H - In scatola regalo"
        }, {
            "price1": 3.24,
            "price2": 3.25,
            "price3": 3.26,
            "minAmount":[4, 12, 24],
            "description": "Asta refrigerante per vino c/tappo versatore. Asta: Ø 2,5 cm x 32 H. Scatola: 9 x 21 x 4 H - In scatola regalo"
        },{
            "price1": 3.24,
            "price2": 3.25,
            "price3": 3.26,
            "minAmount":[4, 12, 24],
            "description": "Asta refrigerante per vino c/tappo versatore. Asta: Ø 2,5 cm x 32 H. Scatola: 9 x 21 x 4 H - In scatola regalo"
        },{
            "price1": 3.24,
            "price2": 3.25,
            "price3": 3.26,
            "minAmount":[5, 12, 24],
            "description": "Asta refrigerante per vino c/tappo versatore. Asta: Ø 2,5 cm x 32 H. Scatola: 9 x 21 x 4 H - In scatola regalo"
        },{
            "price1": 3.24,
            "price2": 3.25,
            "price3": 3.26,
            "minAmount":[4, 12, 24],
            "description": "Asta refrigerante per vino c/tappo versatore. Asta: Ø 2,5 cm x 32 H. Scatola: 9 x 21 x 4 H - In scatola regalo"
        },{
            "price1": 3.24,
            "price2": 3.25,
            "price3": 3.26,
            "minAmount":[4, 12, 24],
            "description": "Asta refrigerante per vino c/tappo versatore. Asta: Ø 2,5 cm x 32 H. Scatola: 9 x 21 x 4 H - In scatola regalo"
        },{
            "price1": 3.24,
            "price2": 3.25,
            "price3": 3.26,
            "minAmount":[4, 12, 24],
            "description": "Asta refrigerante per vino c/tappo versatore. Asta: Ø 2,5 cm x 32 H. Scatola: 9 x 21 x 4 H - In scatola regalo"
        },{
            "price1": 3.24,
            "price2": 3.25,
            "price3": 3.26,
            "minAmount":[4, 12, 24],
            "description": "Asta refrigerante per vino c/tappo versatore. Asta: Ø 2,5 cm x 32 H. Scatola: 9 x 21 x 4 H - In scatola regalo"
        },{
            "price1": 3.24,
            "price2": 3.25,
            "price3": 3.26,
            "minAmount":[4, 12, 24],
            "description": "Asta refrigerante per vino c/tappo versatore. Asta: Ø 2,5 cm x 32 H. Scatola: 9 x 21 x 4 H - In scatola regalo"
        }];

    // Create dinamically all the item needed
    startFrame();

    // Get ll price info
    const allPriceInfo = document.querySelectorAll(".price-info")

    setSeePriceInfo(allPriceInfo);

    // Get the Modal Window
    const modal = document.querySelector("#modal-window");

    // Get all the icons cart
    let allCartIcons = document.querySelectorAll(".cart-icon");

    // Add Event Listener to each icon cart
    setCartIcons(allCartIcons, modal); 


    // Let see prices when mouse enter and none when mouse leave (class="prices")
    function setSeePriceInfo(allPriceInfo){
        allPriceInfo.forEach( item => {
            item.addEventListener("mouseenter", e => {
                e.target.parentElement.firstElementChild.firstElementChild.style.display = "flex";
            }); 

            item.addEventListener("mouseleave", e => {
                e.target.parentElement.firstElementChild.firstElementChild.style.display = "none";
            }); 
        });
    }

    // Set click listern on all cart-icon to open the modal window
    function setCartIcons(allCartIcons, modal){
        allCartIcons.forEach( item => {
            item.addEventListener("click", (event) => { 
                startModalWindow(event);
            });
        });
    }

    function startFrame(){
        let htmlResult = "";
        arr.forEach( (item, i) => {
            const priceInt = parseInt(item.price1);
            const priceFloat = (item.price1 + "").split(".")[1];

            htmlResult += ` <div class="item-container">
<div class="img-container">
<div class="prices">
${item.minAmount[1]} Pez € ${item.price1} /Pez<br>
6 Pez € 5,36 /Pez<br>
20 Pez € 4,76 /Pez
</div>
<a href="#">
<img src="gatto.jfif">
</a>
</div>

<div class="description">
${item.description}
</div>

<div class="price-info" >
<div>€ <span>${priceInt}</span>, ${priceFloat} /pez</div>
<div>
<button class="cart-icon" data-order="${i}" data-min-amount="${item.minAmount[i]}">
<img src="iconCart.png">
</button>
</div>
</div>
</div>
</div>`;

        });

        const mainContainer = document.querySelector("#mainContainer");
        console.log(mainContainer);
        mainContainer.innerHTML += htmlResult;

    }

    function startModalWindow(event){

        console.log(event);
        console.log(event.target);
        console.log(event.target.getAttribute("data-order"));
        const clickedIndex = parseInt(event.target.getAttribute("data-order"));
        const minAmount = parseInt(event.target.getAttribute("data-min-amount"));

        let htmlResult = `<div class="modal-content">
<div id="modal-foto">
<img src="gatto.jfif">
</div>
<div id="modal-info">
<div id="close" class="close" style="text-align: right;">&times;</div>
<div>
${arr[clickedIndex].description}
</div>
<div id="price-list">
<div id="${arr[clickedIndex].minAmount[0]}"> <span>${arr[clickedIndex].minAmount[0]} Pez € ${arr[clickedIndex].price1} /Pez </span></div>
<div id="${arr[clickedIndex].minAmount[1]}"> <span>${arr[clickedIndex].minAmount[1]} Pez € ${arr[clickedIndex].price2} /Pez </span></div>
<div id="${arr[clickedIndex].minAmount[2]}"> <span>${arr[clickedIndex].minAmount[2]} Pez € ${arr[clickedIndex].price3} /Pez </span></div>
</div>                        
<div id="shopping-cart">
<button id="minus">-</button>
<input type="number" value="${arr[clickedIndex].minAmount[0]}">
<button id="plus">+</button>
</div>
<div id="cart-icon-window-container">
<button class="cart-icon">
Aggiungi
</button>
</div>
</div>
</div>` ; 

        // Show up the Modal Window
        const modal = document.querySelector("#modal-window");
        modal.innerHTML = htmlResult;
        modal.style.display = "block";

        // Set Plus and Minus Buttons
        // minAmoun = param to move add or remove the number field
        // arr[clickedIndex] = get the exact object I need to work on
        setPlusMinusButtons(arr[clickedIndex].minAmount[0], arr[clickedIndex]);

        // When the user clicks on the X
        setClosingIcon(modal);

        // When the user clicks anywhere outside of the modal, close it
        setClosingModalWindow(modal);

    }

    function setPlusMinusButtons(minAmount, data){
        console.log("setPlusMinus");
        console.log(data);
        let minus = document.querySelector("#minus");
        let plus = document.querySelector("#plus");

        // Set Click Event Listener on the Minus sign to remove element
        minus.addEventListener("click", e => { moveAmountToOrder(e, -minAmount, data); });

        // Set Click Event Listener on the Plus sign to add element
        plus.addEventListener("click", e => { moveAmountToOrder(e, minAmount, data); });

    }

    function moveAmountToOrder(e, minAmount, data){
        console.log("move");
        console.log("Min amount" + minAmount);
        console.log(e.target);
        const temp = e.target.parentElement.childNodes[3];
        //        console.log("temp:" + temp);
        //        console.log("temp:" + minAmount);

        let valTemp = parseInt(temp.value);
        let result = valTemp + minAmount;
        console.log("Result: " + result);
        console.log("DATA: " + data);
        console.log(data);

        // Show up the result only if is > than the minAmount, else show up the minAmout
        result > Math.abs(minAmount) ? temp.value = result : temp.value = Math.abs(minAmount);

//        const range1 = document.querySelector("#1").id;
//        console.log(range1 + "dadfafa")
//        const range2 = document.querySelector("#2");
//        const range3 = document.querySelector("#3");
        
        const ranges = document.querySelector("#price-list").children;
//        console.log("childs: " + ranges);
//        console.log(ranges);
//        console.log(ranges[0].id);
//        console.log(ranges[2].id);
//        connsole.log(ranges)
//        let fff = ranges[2].firstElementChild;
//        
//        console.log(fff);
//        console.log(typeof(fff));

//        let ranges = [range1, range2, range3];

//        for (let i = 0; i < data.minAmount.length; i++){
//           if (ranges[i] == temp.value){
//                ranges[i].style.backgroundColor = "red";
//            }
//        }
        
        for (let i = 0; i < data.minAmount.length; i++){
            //            ranges[i].style.backgroundColor = "white";
            //            if (temp.value >= data.minAmount[i]){
            //                ranges[i].style.backgroundColor = "white";
            //            }
            if (parseInt(ranges[i].id) >= temp.value){
                console.log("Egual");
                ranges[i].firstElementChild.style.backgroundColor = "rgba(53,71,147, 0.7)";
                ranges[i].firstElementChild.style.fontWeight = "bold";
                ranges[i].firstElementChild.style.padding = "5px 4px";
                ranges[i].style.margin = "5px 0px";
                ranges[i].firstElementChild.style.borderRadius = "7px";
                break;
            } else{
                ranges[i].firstElementChild.style.backgroundColor = "white";
                ranges[i].firstElementChild.style.fontWeight = "100";
//                ranges[i].style.margin = "5px 0px";
//                ranges[i].firstElementChild.style.padding = "5px 4px";
                
            }
            
        }


        //        if (temp.value >= data.minAmount) {
        //            range1.style.backgroundColor = "red";
        //            range2.style.backgroundColor = "none";
        //            range3.style.backgroundColor = "none";
        //        }
        //        if (temp.value >= data.minAmount2) range2.style.backgroundColor = "green";
        //        if (temp.value >= data.minAmount3) range3.style.backgroundColor = "orange";


    }

    function setClosingIcon(modal){    
        // Get X to close the modal window
        const closingIcon = document.querySelector("#close");

        closingIcon.addEventListener("click", () => { 
            modal.style.display = "none"; 
        });
    }

    function setClosingModalWindow(modal){
        window.addEventListener("click", event => {
            if (event.target == modal) modal.style.display = "none";
        });
    }



}

































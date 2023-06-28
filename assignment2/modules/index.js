
let totalQty = 0;
let totalPrice = 0;
function handeldeceresing(e) {
  totalQty--;
  console.log(totalQty)
  let qty = e.target.value;
  let ele = document.getElementById(e.currentTarget.id);
  if (qty <= 0) {
    ele.innerHTML = `
      <div id=${e.currentTarget.id}> <span>Rs.60 </span>
      <div class="btn-group">
      <button class="btn-btn" onclick="handelClick(event)" id=${e.currentTarget.id}  value=${parseInt(e.target.value) + 1}>+</button> </div>
      </div>   `;
  }
  else{
    ele.innerHTML = `
    <span>Rs.60 </span>
    <div class="btn-group">
    <button class="btn-btn" onclick="handeldeceresing(event)" id=${e.currentTarget.id} value=${parseInt(e.target.value) - 1}>-</button>
    <button class="btn-btn" >${qty}</button>
    <button class="btn-btn" onclick="handelClick(event)" id=${e.currentTarget.id}  value=${parseInt(e.target.value) + 1}>+</button> </div>
 
       `;

  }
  
  if (totalQty > 8) {
    document.getElementById("alert").className = 'alert'
    document.getElementById("alert").innerHTML = `  <div id="alert"> custom pack should not exceed 8</div>`
  } else {
    document.getElementById("alert").className = ''
    document.getElementById("alert").innerHTML = `  <div id="alert"></div>`
  }

}


function handelClick(e) {
  totalQty++;
  console.log(totalQty)
  let qty = e.target.value;

  let ele = document.getElementById(e.target.id);

  // let newEle = document.createElement("div");
  ele.innerHTML = `
     <span>Rs.60 </span>
    <div class="btn-group">
    <button class="btn-btn"  onclick="handeldeceresing(event)"  id=${e.currentTarget.id}  value=${parseInt(qty) - 1}>-</button>
    <button class="btn-btn" >${qty}</button>
    <button class="btn-btn" onclick="handelClick(event)" id=${e.currentTarget.id} value=${parseInt(e.target.value) + 1}>+</button> </div>
 
          `;
          

  // document.getElementById(e.currentTarget.id).appendChild(newEle);
  if (totalQty > 8) {
    document.getElementById("alert").className = 'alert'
    document.getElementById("alert").innerHTML = `  custom pack should not exceed 8`
  } else {
    document.getElementById("alert").className = ''
    document.getElementById("alert").innerHTML = ``
  }


}

function openAddtoCart() {
  console.log(totalQty);
  totalPrice = totalQty * 60;
  if (totalQty <= 0) {
    document.getElementById("bill2").style = "display:block";
  } else if(totalQty > 8){
    document.getElementById("bill1").innerHTML = ``
  } 
  else {
    document.getElementById("bill1").style = "display:block";
    document.getElementById("bill1").innerHTML = `
    <div>Total QTY :${totalQty} X Cost Per Drink Rs.60 </div>
    <div> <h3>Totol Bill : <span>Rs.${totalPrice}</span></h3></div>
    <div> <span>Enjoy your Drink and Become ENERGETIC</span></div>
    <button class="btn-btn"><a href="/assignment2/checkout/index.html" style="text-decoration: none; color: aliceblue;"> Proessed to Checkout</a></button>
    <button class="btn-btn" onclick="closeAddtoCart()">Go back</button>
    `
  }


}
function closeAddtoCart() {
  document.getElementById("bill1").style = "display:none"
  document.getElementById("bill2").style = "display:none"
}

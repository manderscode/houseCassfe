let liked = document.getElementsByClassName("fa-solid fa-circle-check");
let trash = document.getElementsByClassName("fa-ban");
let feedBack = document.getElementsByClassName("submit");

Array.from(liked).forEach(function (element) {
  element.addEventListener("click", function () {
    // console.log(this.parentNode.parentNode);
    const coffeeSize = this.parentNode.parentNode.childNodes[1].innerText;
    const coffeeIce = this.parentNode.parentNode.childNodes[3].innerText;

    const coffeeChoice = this.parentNode.parentNode.childNodes[5].innerText;
    const coffeeInstructions =
      this.parentNode.parentNode.childNodes[7].innerText;
    const customerName = this.parentNode.parentNode.childNodes[9].innerText;
    const baristaName = this.parentNode.parentNode.childNodes[11].value;
    const orderId = this.parentNode.parentNode.childNodes[13].value;

    fetch("savedToDatabase", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName: customerName,
        coffeeSize: coffeeSize,
        coffeeIce: coffeeIce,
        coffeeChoice: coffeeChoice,
        coffeeInstructions: coffeeInstructions,
        baristaName: baristaName,
        orderId: orderId,
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        console.log(coffeeInstructions);
        window.location.reload(true);
      });
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener("click", function () {
    console.log(this.parentNode.parentNode.childNodes)
    const coffeeSize = this.parentNode.parentNode.childNodes[2].innerText;
    console.log(coffeeSize)
    const coffeeIce = this.parentNode.parentNode.childNodes[5].innerText;
    console.log(coffeeIce)
    const coffeeChoice = this.parentNode.parentNode.childNodes[8].innerText;
    console.log(coffeeChoice)

    const coffeeInstructions =
      this.parentNode.parentNode.childNodes[11].innerText;
    console.log(coffeeInstructions)
    const customerName = this.parentNode.parentNode.childNodes[14].innerText;
    console.log(customerName)

    fetch("deleteOrders", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coffeeSize: coffeeSize,
        coffeeIce: coffeeIce,
        coffeeChoice: coffeeChoice,
        coffeeInstructions: coffeeInstructions,
        customerName: customerName
      }),
    }).then(function (response) {
      window.location.reload();
    });
  });
});

// write your DOM code here.
// DOM element references
const taxiQueue = TaxiQueue();

let passengerCountElem = document.querySelector(".passenger_queue_count");
let joinBtn = document.querySelector(".join_queue");
let leaveBtn = document.querySelector(".leave_queue");

let taxiCounter = document.querySelector(".taxi_queue_count");
let joinTaxiQueueBtn = document.querySelector(".join_taxi_queue");
let departBtn = document.querySelector(".depart");
let hiddenMessageElem = document.querySelector(".hiddenMessage");




if (!localStorage["passenger"] && !localStorage["taxi"]) {
    localStorage["passenger"] = taxiQueue.queueLength();
    localStorage["taxi"] = taxiQueue.taxiQueueLength();

}

if (localStorage["passenger"] && localStorage["taxi"]) {
    taxiQueue.storage();
    passengerCountElem.innerHTML = localStorage["passenger"];
    taxiCounter.innerHTML = localStorage["taxi"];
}



joinBtn.addEventListener("click", function () {
    taxiQueue.joinQueue();
    passengerCountElem.innerHTML = taxiQueue.queueLength();


});
leaveBtn.addEventListener("click", function () {
    taxiQueue.leaveQueue();
    passengerCountElem.innerHTML = taxiQueue.queueLength();

});

joinTaxiQueueBtn.addEventListener("click", function () {

    taxiQueue.joinTaxiQueue();
    taxiCounter.innerHTML = taxiQueue.taxiQueueLength();


});
departBtn.addEventListener("click", function () {
    taxiQueue.taxiDepart();
    taxiQueue.queueLength();

    taxiCounter.innerHTML = taxiQueue.taxiQueueLength();
    passengerCountElem.innerHTML = taxiQueue.queueLength();
    
    if (taxiQueue.queueLength() < 12 && taxiQueue.taxiQueueLength() !== 0) {
        hiddenMessageElem.classList.add(taxiQueue.addRed());
        hiddenMessageElem.innerHTML = "not enough passesngers to depart";
        hiddenMessageElem.style.display = "block";
        setTimeout(function () {
            hiddenMessageElem.style.display = "none"
        }, 5000);
    }


});




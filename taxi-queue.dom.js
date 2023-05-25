// write your DOM code here.
// DOM element references

let passengerCountElem = document.querySelector(".passenger_queue_count");
let joinBtn = document.querySelector(".join_queue");
let leaveBtn = document.querySelector(".leave_queue");

let taxiCounter = document.querySelector(".taxi_queue_count");
let joinTaxiQueueBtn = document.querySelector(".join_taxi_queue");
let departBtn = document.querySelector(".depart");

const store = localStorage.getItem('passenger');
const storeTaxi = localStorage.getItem('taxi');


// create Factory Function instance
// DOM events
const taxiQueue = TaxiQueue();

joinBtn.addEventListener("click", function () {
    taxiQueue.joinQueue();
    passengerCountElem.innerHTML = taxiQueue.queueLength();
    localStorage['passengers'] = taxiQueue.queueLength();


});
leaveBtn.addEventListener("click", function () {
    taxiQueue.leaveQueue();
    passengerCountElem.innerHTML = taxiQueue.queueLength();
    localStorage['passengers'] = taxiQueue.queueLength();

});

joinTaxiQueueBtn.addEventListener("click", function () {

    taxiQueue.joinTaxiQueue();
    taxiCounter.innerHTML = taxiQueue.taxiQueueLength();
    // console.log(taxiQueue.taxiQueueLength());
    localStorage['taxi'] = taxiQueue.taxiQueueLength();

});
departBtn.addEventListener("click", function () {
    taxiQueue.taxiDepart();
    taxiQueue.queueLength();

    taxiCounter.innerHTML = taxiQueue.taxiQueueLength();
    passengerCountElem.innerHTML = taxiQueue.queueLength();
});
passengerCountElem.innerHTML = store;
taxiCounter.innerHTML = storeTaxi;



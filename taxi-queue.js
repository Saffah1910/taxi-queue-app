// They need a web widget which rank managers can use to keep track of how many people are joining and leaving taxi queues. They also want to keep track of how many taxis are queueing.
//in joinQueue function it should add one to the var queue
//leaveQueue should be able to minus 1 person from the queue
//in queue length we want to return the peopleQueue which will count how mnay people are in the queue
//it should add the counter in joinTaxiQueue
//the taxi should only depart if the people queue is 12 and above 

function TaxiQueue() {

	var peopleQueue = 0;
	var taxiCounter = 0;

	function joinQueue() {
		peopleQueue++

	}

	function leaveQueue() {
		if (peopleQueue > 0) {
			peopleQueue--
		}

	}

	function joinTaxiQueue() {
		taxiCounter++

	}

	function queueLength() {

		return peopleQueue

	}



	function taxiDepart() {
		if (peopleQueue >= 12 && taxiCounter !== 0) {
			taxiCounter =	taxiCounter - 1;
			peopleQueue = peopleQueue - 12;
		}
		else {
			return "no enough passengers to depart"
		}

	}

	function taxiQueueLength() {
	
			return taxiCounter

		
	
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}
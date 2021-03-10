class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return ++this.size;
	}

	dequeue() {
		if (this.size === 0) return null;

		const currentFirst = this.first;

		this.first = currentFirst.next;
		currentFirst.next = null;

		this.size--;
		return currentFirst.val;
	}
}

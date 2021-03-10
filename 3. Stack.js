class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const currentFirst = this.first;

			newNode.next = currentFirst;
			this.first = newNode;
		}

		return ++this.size;
	}

	pop() {
		if (this.size === 0) return null;

		const currentFirst = this.first;

		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = currentFirst.next;
		}

		this.size--;
		return currentFirst.val;
	}
}

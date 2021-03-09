class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.length += 1;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;

		let prev;
		let current = this.head;

		while (current.next) {
			prev = current;
			current = current.next;
		}

		this.tail = prev;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	shift() {
		if (this.length === 0) return undefined;

		const current = this.head;
		this.head = this.head.next;
		this.length--;

		if (this.length === 0) this.tail = null;

		return current;
	}

	unshift(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;

		let counter = 0;
		let current = this.head;

		while (counter < index) {
			current = this.head.next;
			counter++;
		}

		return current;
	}

	set(index, val) {
		const foundNode = this.get(index);

		if (!foundNode) return false;

		foundNode.val = val;
		return true;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return this.push(val);
		if (index === 0) return !!this.unshift(val);

		const newNode = new Node(val);
		const prev = this.get(index - 1);
		const temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		length++;

		return true;
	}

	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let prev = this.get(index - 1);
		const nodeRemoved = prev.next;
		prev.next = nodeRemoved.next;
		this.length--;

		return nodeRemoved;
	}

	reverse() {
		let node = this.head;
		let counter = this.length;
		let next;
		let prev = null;

		this.head = this.tail;
		this.tail = node;

		while (counter > 0) {
			next = node.next;
			node.next = prev;

			prev = node;
			node = next;
			counter--;
		}
	}
}

const list = new SinglyLinkedList();

list.push(1);
list.push(20);
list.push(999);

list.reverse();

list;

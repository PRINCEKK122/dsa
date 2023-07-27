class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error("Data should be either Node or null");
        }
    }

    getNextNode() {
        return this.next;
    }
}

const firstNode = new Node(5);
const secondNode = new Node(10);

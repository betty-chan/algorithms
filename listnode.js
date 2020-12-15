class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function arrayToListNode(array) {
    if (array.length === 0) {
        return null
    }
    var nodes = []
    for (var i = 0; i < array.length; i++) {
        var node = ListNode(array[i], null)
        nodes.push(node)
    }
    for (var i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1]
    }
    return nodes[0]
}
function listNodeToArray() {
    let array = [];
    while (head) {
        array.push(head.val)
        head = head.next
    }
    return array;
}

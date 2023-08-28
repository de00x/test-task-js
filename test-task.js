function iterate(tree) {
    const stack = [tree];
    let currentIndex = 0;

    return {
        next() {
            if (currentIndex >= stack.length) {
                return { value: undefined, done: true };
            }

            const currentNode = stack[currentIndex++];

            if (currentNode.children) {
                stack.push(...currentNode.children);
            }

            return { value: currentNode.value, done: false };
        }
    };
}
const i = iterate({
    value: 1,
    children: [
        {
            value: 2
        },
        {
            value: 3,
            children: [
                {
                    value: 4
                }
            ]
        }
    ]
});

console.log(i.next()); // {value: 1, done: false}
console.log(i.next()); // {value: 2, done: false}
console.log(i.next()); // {value: 3, done: false}
console.log(i.next()); // {value: 4, done: false}
console.log(i.next()); // {value: undefined, done: true}


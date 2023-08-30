const iterator = {
  data: {
    value: 1,
    children: [
      {
        value: 2,
      },
      {
        value: 3,
        children: [
          {
            value: 4,
          },
        ],
      },
    ],
  },
  [Symbol.iterator]() {
    const data = [this.data];
    let idx = 0;
    return {
      next() {
        if (idx >= data.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        const currentNode = data[idx++];

        if (currentNode.children) {
          data.push(...currentNode.children);
        }

        return {
          value: currentNode.value,
          done: false,
        };
      },
    };
  },
};

const i = iterator[Symbol.iterator]();

for (const val of iterator) {
  console.log("val", val);
}

console.log(i.next()); // {value: 1, done: false}
console.log(i.next()); // {value: 2, done: false}
console.log(i.next()); // {value: 3, done: false}
console.log(i.next()); // {value: 4, done: false}
console.log(i.next()); // {value: undefined, done: true}

# List
The list collection is supposed to extend the features of a normal array.
The currently available methods are listed below.

## Properties

### First
```typescript
let list = new List<number>(1, 2, 3);

let first = list.first; // first = 1
```

### Last
```typescript
let list = new List<number>(1, 2, 3);

let last = list.last; // last = 3
```

### Length
```typescript
let list = new List<number>(1, 2, 3);

let length = list.length; // length = 3
```

```typescript
let list = new List<number>(1, 2, 3, 4, 5);

list.length = 3; // list = 1, 2, 3
```

### Iterator
```typescript
let list = new List<number>(1, 2, 3);

let it = list.iterator;
let value = it.value; // value = 1
```

## Methods

### Gets
```typescript
let list = new List<number>(1, 2, 3);

let element = list.get(1); // element = 2
```

### Push front

```typescript
let list = new List<number>(1, 2, 3);

list.pushFront(4); // list = 4, 1, 2, 3
```

### Push back
```typescript
let list = new List<number>(1, 2, 3);

list.pushBack(5); // list = 1, 2, 3, 5
```

### Pop front
```typescript
let list = new List<number>(1, 2, 3);

list.popFront(); // list = 2, 3
```

### Pop back
```typescript
let list = new List<number>(1, 2, 3);

list.popBack(); // list = 1, 2
```

### Insert at
```typescript
let list = new List<number>(1, 2, 3);

list.insertAt(10, 1); // list = 1, 10, 2, 3
```

### Remove at
```typescript
let list = new List<number>(1, 2, 3, 4);

list.removeAt(2); // list = 1, 2, 4
```

### For each
```typescript
let list = new List<number>(1, 2, 3, 4);

list.forEach(value => console.log(value)); // prints 1, 2, 3, 4
```

### Map
```typescript
let list = new List<number>(1, 2, 3, 4);

let doubleList = list.map(value => value * 2); // doubleList = 2, 4, 6, 8
```

### Find index
```typescript
let list = new List<number>(10, 20, 30, 40);

let index = list.findIndex(value => value === 30); // index = 2
```

### Iterator at
```typescript
let list = new List<number>(10, 20, 30, 40);

let it = list.iteratorAt(2);
let value = it.value; // value = 30
```
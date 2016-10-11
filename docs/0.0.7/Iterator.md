# Iterator
The iterator is designed to work combined with the List class.

## Properties
### Has previous
```typescript
let list = new List<number>(1, 2, 3);

let it = list.iterator;
let value = it.value; // value = 1
let hasPrevious = it.hasPrevious; // hasPrevious = false
```

### Has next
```typescript
let list = new List<number>(1, 2, 3);

let it = list.iterator;
let value = it.value; // value = 1
let hasNext = it.hasNext; // hasNext = true
```

### Next
```typescript
let list = new List<number>(1, 2, 3);

let it = list.iterator;
let value = it.value; // value = 1
let next = it.next; // next = 2
```

### Previous
```typescript
let list = new List<number>(1, 2, 3);

let it = list.iteratorAt(1);
let value = it.value; // value = 2
let previous = it.previous; // previous = 1
```

### Value
```typescript
let list = new List<number>(1, 2, 3);

let it = list.iteratorAt(2);
let value = it.value; // value = 3
```

## Methods

## Forward
```typescript
let list = new List<number>(1, 2, 3);

let it = list.iterator;
let value = it.value; // value = 1
it.forward();
value = it.value; // value = 2
```

## Backward
```typescript
let list = new List<number>(1, 2, 3);

let it = list.iteratorAt(2);
let value = it.value; // value = 3
it.backward();
value = it.value; // value = 2
```

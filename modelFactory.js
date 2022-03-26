const locations = [ ];
const makePoint = function makePoint(x, y) {
    let p = { x: x, y: y};
    return p;
}

let p = makePoint(3,4);
locations.push(p);
console.log('locations:' + JSON.stringify(locations));
/* locations:[{"x":3,"y":4}] */


// if we want to create a lot of objects we do following
const locations = [ ];
const makePoint = function makePoint(x, y) {
    let p = { x: x, y: y};
    return p;
}

const factory = function factory(n) {
    for(let i = 0; i < n; i++) {
        let p = makePoint(i, i);
        locations.push(p)
    }
} 

factory(3);

console.log('locations:' + JSON.stringify(locations));
// locations: [{"x:0","y:0"},{"x:1","y:1"},{"x:2", "y:2"}]
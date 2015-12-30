/**
 * Created by sbawkar on 12/30/2015.
 */
'use strict';

var persons = [{
    name: 'Swapnil Bawkar',
    id: 6550
},{
    name: 'Amit Doshi',
    id: 6551
}];

var persons2 = [{
    name: 'Neeta Wadekar',
    id: 6552
},{
    name: 'Ashwini Singh',
    id: 6553
}];

persons
    .concat(persons2)
    .forEach((person) => console.log(person.name));
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
}, {
    name: 'Riyaz Hawaldar',
    id: 6552
},{
    name: 'Ashwini Singh',
    id: 6553
}];

var list = persons
            .sort((a, b) => b.id - a.id)
            .map((person) => `  <li>${person.name},${person.id}</li>`)
            .join('\n');

const output = `<ul>\n${list}\n</ul>`;
console.log(output);
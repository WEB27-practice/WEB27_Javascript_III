// _Notes form today's lecture_


// rule #1
// * Window Binding - if none of the other rules apply "this" defaults to the window object - unless you are in a strict mode in which case it returns undefined
// * Strict mode - prevents window binding from breaking our code but it sill return undefined

// ex 

'use strict';
 function ghost(){
     console.log(this.boo);
}

const boo = 'ghosty boo';

ghost();

// rule #2
// implict binding (automatically refers to what ever is to the left of the dot)
// most common rule - found in 80% of use cases
// when the function is invoked, look to the left of the dot  that's what 'this' refers to 
// only applies to object with methods

let myGhost = {
    name: 'Casper',
    boo: '👻 boooooo!',
    ghost: function(){
        console.log(ths.boo);
    }
}
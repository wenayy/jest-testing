
// jest goes to all the codebase and search for the whole .test.js files you can put it anywhere

import {describe, test, expect,it } from "@jest/globals"
// describe, test, it , expect people use it a lot
import {Sum, multiply} from "../index.js"

// you can have the  describe for 1 function and write 2 test for one function or shoove all the differnt fucntions test also inside one describe as well

describe("Sum of 2 numnbers ",()=>{
    it('adds 2 numbers', ()=>{
        expect(Sum(2,1)).toBe(3) 
        // i need not to write mannyally if (answer!=3 ) throw Error() i used the expect function 
    });

    it('adds 4 +5 equal to 9', ()=>{
        expect(Sum(4,5)).toBe(9);
    })

})


describe("multiply number function ",()=>{
    it('multiplies 2 and 3',()=>{
        expect(multiply(2,3)).toBe(6);
    });

    it('multiplies 4 and 5',()=>{
        expect(multiply(4,5)).toBe(20); 
    });
})



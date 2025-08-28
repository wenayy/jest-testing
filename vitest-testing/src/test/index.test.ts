import {test, expect, describe,it} from "vitest"

import request from "supertest"
import {app} from "../index.js"


describe("POST/sum ", ()=>{
    it("should return sum ", async()=>{
        const res = await request(app).post("/sum").send({
            a:1, 
            b:1


            
        })
        console.log(JSON.stringify(res.body));
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(2);
        
    })
})





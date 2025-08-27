// axios.post("link") you can test it like that also just like postman

// u define difffernt listen so u can import it in the index.test.ts

import {describe, it, expect} from "@jest/globals";
import request from "supertest";
import {app} from "../index.js"


// supertest simulate sending the request


describe("post/sum route", ()=>[
    it("should return sum ", async()=>{
        const res = await request(app).post("/sum").send({
            a:1, 
            b:1


        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(2);
        
    })
])





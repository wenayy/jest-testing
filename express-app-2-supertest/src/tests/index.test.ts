// axios.post("link") you can test it like that also just like postman

// u define difffernt listen so u can import it in the index.test.ts

const { describe, it, expect } = require("@jest/globals");
const request = require("supertest");
const {app} = require ("../index")


// supertest simulate sending the request


describe("POST/sum ", ()=>{
    it("should return sum ", async()=>{
        const res = await request(app).post("/sum").send({
            a:1, 
            b:1


            
        })
        console.log(JSON.stringify(res.body));
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(2);
        
    })
})





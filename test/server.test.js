const request = require('supertest');
const PORT = process.env.PORT || 4444;
const url = `http://localhost:${PORT}`

describe('Testing index', () => {

    // Correct data
    it("POST /send", async () => {
        const res = await request(url).post("/register")
            .send({
                username: 'usertest',
                email: 'janire@example.com',
                password: 'abcD123456',
                confirm_password: 'abcD123456'
            });
    
        expect(res.type).toMatch(/json/)
        expect(res.statusCode).toBe(200)
        expect(res.body.username).toMatch("usertest")
        expect(res.body.email).toMatch("janire@example.com")
    })
 
    // Usernae must be at least 5 characters long
    it("POST /send", async () => {
        const res = await request(url).post("/register")
            .send({
                username: 'use',
                email: 'janire@example.com',
                password: 'abcD123456',
                confirm_password: 'abcD123456'
            });
    
        expect(res.type).toMatch(/text/)
        expect(res.statusCode).toBe(400)
        expect(res.text).toMatch('Username must be at least 5 characters long.')
    })

    // Passwords do not match
    it("POST /send", async () => {
        const res = await request(url).post("/register")
            .send({
                username: 'usertest',
                email: 'janire@example.com',
                password: 'abcD111',
                confirm_password: 'abcD1111111'
            });
    
        expect(res.type).toMatch(/text/)
        expect(res.statusCode).toBe(400)
        expect(res.text).toMatch('Passwords do not match.')
    })

    // Password must be alphanumeric and at least 6 characters long
    it("POST /send", async () => {
        const res = await request(url).post("/register")
            .send({
                username: 'usertest',
                email: 'janire@example.com',
                password: 'ab1',
                confirm_password: 'ab1'
            });
    
        expect(res.type).toMatch(/text/)
        expect(res.statusCode).toBe(400)
        expect(res.text).toMatch('Password must be alphanumeric and at least 6 characters long.')

        const res2 = await request(url).post("/register")
        .send({
            username: 'usertest',
            email: 'janire@example.com',
            password: 'ab1111111&',
            confirm_password: 'ab1111111&'
        });

        expect(res2.type).toMatch(/text/)
        expect(res2.statusCode).toBe(400)
        expect(res2.text).toMatch('Password must be alphanumeric and at least 6 characters long.')
    })

    // Invalid email format
    it("POST /send", async () => {
        const res = await request(url).post("/register")
            .send({
                username: 'usertest',
                email: 'janire@',
                password: 'abcD111',
                confirm_password: 'abcD111'
            });
    
        expect(res.type).toMatch(/text/)
        expect(res.statusCode).toBe(400)
        expect(res.text).toMatch('Invalid email format.')

        const res2 = await request(url).post("/register")
            .send({
                username: 'usertest',
                email: '@example.com',
                password: 'abcD111',
                confirm_password: 'abcD111'
            });
    
        expect(res2.type).toMatch(/text/)
        expect(res2.statusCode).toBe(400)
        expect(res2.text).toMatch('Invalid email format.')

        const res3 = await request(url).post("/register")
            .send({
                username: 'usertest',
                email: 'janire@example',
                password: 'abcD111',
                confirm_password: 'abcD111'
            });
    
        expect(res3.type).toMatch(/text/)
        expect(res3.statusCode).toBe(400)
        expect(res3.text).toMatch('Invalid email format.')
    })


});

import request from 'supertest';

const API_URL = process.env.TEST_URL || 'http://localhost:3000';

describe('Customer Module', () => {
    let token;
    let customerId;

    beforeAll(async () => {
        // Login to get token
        const res = await request(API_URL)
            .post('/api/auth/register')
            .send({
                username: `cust_admin_${Date.now()}`,
                password: 'password123'
            });
        token = res.body.token;
    });

    test('POST /api/customers - Create a customer', async () => {
        const res = await request(API_URL)
            .post('/api/customers')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'John Doe',
                contact_info: {
                    email: 'john@example.com',
                    phone: '1234567890'
                },
                status: 'active'
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('John Doe');
        customerId = res.body._id;
    });

    test('GET /api/customers - Retrieve all customers', async () => {
        const res = await request(API_URL)
            .get('/api/customers')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('GET /api/customers - Should fail without token', async () => {
        const res = await request(API_URL).get('/api/customers');
        expect(res.statusCode).toBe(401);
    });
});

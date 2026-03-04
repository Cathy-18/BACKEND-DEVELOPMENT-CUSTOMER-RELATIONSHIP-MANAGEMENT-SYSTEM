import request from 'supertest';

const API_URL = process.env.TEST_URL || 'http://localhost:3000';

describe('Auth Module', () => {
    let token;
    const testUser = {
        username: `testuser_${Date.now()}`,
        password: 'password123',
        role: 'user'
    };

    test('POST /api/auth/register - Successfully register a user', async () => {
        const res = await request(API_URL)
            .post('/api/auth/register')
            .send(testUser);

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('token');
        expect(res.body.username).toBe(testUser.username);
    });

    test('POST /api/auth/login - Successfully login', async () => {
        const res = await request(API_URL)
            .post('/api/auth/login')
            .send({
                username: testUser.username,
                password: testUser.password
            });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
        token = res.body.token;
    });

    test('POST /api/auth/login - Fail with wrong credentials', async () => {
        const res = await request(API_URL)
            .post('/api/auth/login')
            .send({
                username: testUser.username,
                password: 'wrongpassword'
            });

        expect(res.statusCode).toBe(401);
        expect(res.body.message).toBe('Invalid username or password');
    });
});

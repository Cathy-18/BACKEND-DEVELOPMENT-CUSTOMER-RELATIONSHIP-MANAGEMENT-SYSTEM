import request from 'supertest';

const API_URL = process.env.TEST_URL || 'http://localhost:3000';

describe('Case Module', () => {
    let token;
    let userId;
    let customerId;
    let caseId;

    beforeAll(async () => {
        const suffix = Date.now();
        const res = await request(API_URL)
            .post('/api/auth/register')
            .send({ username: `case_admin_${suffix}`, password: 'password123' });
        token = res.body.token;
        userId = res.body._id;

        const custRes = await request(API_URL)
            .post('/api/customers')
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'Case Customer', contact_info: { email: 'case@example.com' } });
        customerId = custRes.body._id;
    });

    test('POST /api/cases - Create a case', async () => {
        const res = await request(API_URL)
            .post('/api/cases')
            .set('Authorization', `Bearer ${token}`)
            .send({
                customer_id: customerId,
                assigned_to: userId,
                priority: 'high',
                status: 'open'
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.priority).toBe('high');
        caseId = res.body._id;
    });

    test('PATCH /api/cases/:id - Update case status', async () => {
        const res = await request(API_URL)
            .patch(`/api/cases/${caseId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ status: 'in-progress' });

        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('in-progress');
    });

    test('GET /api/cases/:id - Retrieve specific case', async () => {
        const res = await request(API_URL)
            .get(`/api/cases/${caseId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body._id).toBe(caseId);
    });
});

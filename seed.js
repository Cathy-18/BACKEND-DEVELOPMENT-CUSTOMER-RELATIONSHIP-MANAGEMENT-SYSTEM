import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './app/models/User.js';
import Customer from './app/models/Customer.js';
import Case from './app/models/Case.js';
import connectDB from './config/db.js';

dotenv.config();

const seedData = async () => {
    try {
        await connectDB();

        console.log('Cleaning existing data...');
        await User.deleteMany();
        await Customer.deleteMany();
        await Case.deleteMany();

        console.log('Creating Users...');
        const salt = await bcrypt.genSalt(10);
        const adminPassword = await bcrypt.hash('admin123', salt);
        const userPassword = await bcrypt.hash('user123', salt);

        const users = await User.insertMany([
            { username: 'admin', password_hash: adminPassword, role: 'admin' },
            { username: 'john_doe', password_hash: userPassword, role: 'user' },
            { username: 'jane_smith', password_hash: userPassword, role: 'user' }
        ]);

        console.log('Creating Customers...');
        const customers = await Customer.insertMany([
            {
                name: 'TechCorp Solutions',
                contact_info: { email: 'contact@techcorp.com', phone: '555-0101', address: '123 Innovation Way' },
                status: 'active'
            },
            {
                name: 'Green Energy Ltd',
                contact_info: { email: 'info@greenenergy.com', phone: '555-0202', address: '456 Solar Blvd' },
                status: 'active'
            },
            {
                name: 'Retail Group',
                contact_info: { email: 'support@retailgroup.net', phone: '555-0303', address: '789 Market St' },
                status: 'lead'
            }
        ]);

        console.log('Creating Cases...');
        await Case.insertMany([
            {
                customer_id: customers[0]._id,
                assigned_to: users[1]._id,
                priority: 'high',
                status: 'open'
            },
            {
                customer_id: customers[1]._id,
                assigned_to: users[2]._id,
                priority: 'medium',
                status: 'in-progress'
            },
            {
                customer_id: customers[0]._id,
                assigned_to: users[0]._id,
                priority: 'low',
                status: 'closed'
            }
        ]);

        console.log('Database Seeded Successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedData();

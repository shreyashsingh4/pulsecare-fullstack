CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100)
);

CREATE TABLE slots (
    id SERIAL PRIMARY KEY,
    doctor_id INTEGER REFERENCES doctors(id),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    total_capacity INTEGER NOT NULL DEFAULT 1,  
    booked_count INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    slot_id INTEGER REFERENCES slots(id),
    user_id INTEGER REFERENCES users(id),
    status VARCHAR(20) CHECK (status IN ('PENDING', 'CONFIRMED', 'FAILED')),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    slot_id INTEGER REFERENCES slots(id),
    patient_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);

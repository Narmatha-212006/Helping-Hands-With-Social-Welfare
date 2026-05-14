-- Sample Data for Helping Hands Platform

USE helping_hands_db;

-- Users (passwords would be hashed in a real scenario, e.g., using BCrypt)
INSERT INTO users (username, password, email, full_name, phone_number, role_id) VALUES
('admin', 'admin123', 'admin@helpinghands.com', 'System Admin', '1234567890', 1),
('john_volunteer', 'pass123', 'john.vol@gmail.com', 'John Smith', '9876543210', 3),
('jane_donor', 'pass123', 'jane.donor@yahoo.com', 'Jane Doe', '5551234567', 4),
('redcross_ngo', 'pass123', 'contact@redcross.org', 'Red Cross Local', '8005559999', 5),
('mark_user', 'pass123', 'mark.needs@hotmail.com', 'Mark Johnson', '4445556666', 2);

-- Volunteers
INSERT INTO volunteers (user_id, skills, availability_status, location) VALUES
(2, 'First Aid, Counseling, Driving', TRUE, 'Downtown Area');

-- NGOs
INSERT INTO ngos (user_id, registration_number, description, website_url) VALUES
(4, 'NGO-RC-2026-001', 'Providing emergency assistance, disaster relief, and disaster preparedness education.', 'https://redcross.example.org');

-- Requests
INSERT INTO requests (user_id, title, description, location, status, is_emergency) VALUES
(5, 'Food Assistance Needed', 'Lost my job recently and need help with groceries for my family of 4.', 'Westside Suburbs', 'PENDING', FALSE),
(5, 'Medical Transport', 'Need a ride to the hospital for dialysis treatment this Friday.', 'Northside Clinic', 'ACCEPTED', TRUE);

-- Update the second request to be assigned to our volunteer
UPDATE requests SET assigned_volunteer_id = 1 WHERE id = 2;

-- Donations
INSERT INTO donations (user_id, amount, payment_method, transaction_id, status) VALUES
(3, 150.00, 'Credit Card', 'TXN-9988776655', 'SUCCESS'),
(3, 50.00, 'PayPal', 'TXN-1122334455', 'SUCCESS');

-- Events
INSERT INTO events (ngo_id, title, description, event_date, location) VALUES
(1, 'Winter Blood Drive', 'Annual blood donation drive. All donors get free snacks and a t-shirt.', '2026-12-15 09:00:00', 'City Community Center'),
(1, 'Disaster Preparedness Seminar', 'Learn basic survival skills and how to prepare emergency kits.', '2026-06-20 14:00:00', 'Local High School Gym');

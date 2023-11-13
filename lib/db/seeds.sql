-- departments 
INSERT INTO department 
    (name)
VALUES
    ('executive'), -- 1
    ('finance'), -- 2
    ('hr'), -- 3
    ('engineering'), -- 4
    ('marketing'), -- 5
    ('operations'); -- 6
SELECT * FROM department;

-- roles
INSERT INTO role 
    (title, salary, department_id)
VALUES('ceo', 220000, 1), -- 1
    ('cfo', 180000, 1), -- 2
    ('coo', 190000, 1), -- 3
    ('legal', 160000, 1), -- 4
    ('vp human resources', 150000, 3), -- 5
    ('vp science research', 165000, 4), -- 6
    ('vp marketing', 130000, 5), -- 7
    ('vp sales & cultivation', 155000, 6), -- 8
    ('controller', 130000, 2), -- 9
    ('training & dev manager', 100000, 3), -- 10
    ('sr. scientist', 110000, 4), -- 11
    ('creative marketing manager', 80000, 5), -- 12
    ('cultivation manager', 80000, 6), -- 13
    ('sales manager', 75000, 6), -- 14
    ('accountant', 85000, 2), -- 15
    ('scientist', 90000, 4), -- 16
    ('cultivation technician', 60000, 6), -- 17
    ('sales representative', 55000, 6); -- 18
SELECT * FROM role;

-- employees
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
-- executive department
    ('Christie', 'Smitty', 1, NULL) -- 1
    ('Andi', 'Smitty', 2, 1), -- 2
    ('Jane', 'Doobie', 3, 1), -- 3
    ('Stacy', 'Flower', 4, 1), -- 4
-- Christie Smitty, CEO
-- Andi Smitty, CFO
-- Jane Doobie, COO
-- Stacy Flower, legal

-- finance department
    ('Eliza', 'Skunk', 9, 2), -- 5
    ('Reefer', 'Adams', 15, 5), -- 6
-- Eliza Skunk, Controller
-- Reefer Adams, Accountant

-- hr
    ('Leslie', 'Kush', 5, 3), -- 7
    ('Mark', 'Cheeba', 10, 7), -- 8
-- Leslie Kush, VP HR
-- Mark Cheeba, Training & Dev Manager

-- engineering
    ('Summer', 'Widow', 6, 3), -- 9
    ('Mike', 'Haze', 11, 9), -- 10
    ('Indica', 'Runtz', 16, 9), -- 11
-- Summer Widow, Science Research VP
-- Mike Haze, Sr. Scientist
-- Indica Runtz, Scientist

-- marketing
    ('Mota', 'Moose', 7, 3), -- 12
    ('Katherine', 'Shatter', 12, 12), -- 13
-- Mota Moose, Creative VP
-- Katherine Shatter, Creative Marketing Manager

-- operations
    ('Greta', 'Blunt', 8, 3), -- 14
    ('Benjamin', 'Spliff', ), -- 15
    ('Noah', 'Diesel', 13, 14), -- 16
    ('Frances', 'Hash', , 16), -- 17
    ('Chris', 'Doobie Jr.', 18, 15); -- 18
-- Greta Blunt, VP Sales & Cultivation
-- Benjamin Spliff, Sales Manager
-- Noah Diesel, Cultivation Manager
-- Frances Hash, Cultivation Tech
-- Chris Doobie Jr., Sales Rep

SELECT * FROM employee;
-- Sample data
-- Use the DB
USE employee_db;
-- Departments
INSERT INTO department (name)
VALUES("Finance"),
    ("Operations"),
    ("Facilities"),
    ("Technology"),
    ("Marketing"),
    ("Business");
-- Roles with department
INSERT INTO role (title, salary, department_id)
VALUES(
        "President",
        400000,
        (
            SELECT id
            FROM department
            WHERE name = 'Business'
        )
    ),
    (
        "Chief Financial Officer",
        300000,
        (
            SELECT id
            FROM department
            WHERE name = 'Finance'
        )
    ),
    (
        "Chief Technology Officer",
        350000,
        (
            SELECT id
            FROM department
            WHERE name = 'Technology'
        )
    ),
    (
        "SVP of Business",
        500000,
        (
            SELECT id
            FROM department
            WHERE name = 'Business'
        )
    ),
    (
        "Business Analyst",
        75000,
        (
            SELECT id
            FROM department
            WHERE name = 'Business'
        )
    ),
    (
        "Financial Analyst",
        90000,
        (
            SELECT id
            FROM department
            WHERE name = 'Finance'
        )
    ),
    (
        "Head of Marketing",
        325000,
        (
            SELECT id
            FROM department
            WHERE name = 'Technology'
        )
    ),
    (
        "Marketing Associate",
        110000,
        (
            SELECT id
            FROM department
            WHERE name = 'Marketing'
        )
    ),
    (
        "Facilities Manager",
        150000,
        (
            SELECT id
            FROM department
            WHERE name = 'Facilities'
        )
    ),
    (
        "VP of Engineering",
        175000,
        (
            SELECT id
            FROM department
            WHERE name = 'Technology'
        )
    ),
    (
        "Lead Developer",
        160000,
        (
            SELECT id
            FROM department
            WHERE name = 'Technology'
        )
    ),
    (
        "Developer",
        150000,
        (
            SELECT id
            FROM department
            WHERE name = 'Technology'
        )
    ),
    (
        "Data Scientist",
        750000,
        (
            SELECT id
            FROM department
            WHERE name = 'Technology'
        )
    ),
    (
        "VP of Operations",
        300000,
        (
            SELECT id
            FROM department
            WHERE name = 'Operations'
        )
    ),
    (
        "Operations Manager",
        500000,
        (
            SELECT id
            FROM department
            WHERE name = 'Operations'
        )
    );
-- Employees with role and manager
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (
        "Charles",
        "Xavier",
        (
            SELECT id
            FROM role
            WHERE title = 'President'
        ),
        1
    ),
    (
        "Bob",
        "Dobalina",
        (
            SELECT id
            FROM role
            WHERE title = 'Chief Financial Officer'
        ),
        1
    ),
    (
        "Scott",
        "Summers",
        (
            SELECT id
            FROM role
            WHERE title = 'Facilities Manager'
        ),
        15
    ),
    (
        "Robert",
        "Drake",
        (
            SELECT id
            FROM role
            WHERE title = 'Financial Analyst'
        ),
        2
    ),
    (
        "Henry",
        "McCoy",
        (
            SELECT id
            FROM role
            WHERE title = 'Chief Technology Officer'
        ),
        1
    ),
    (
        "Warren",
        "Worthington",
        (
            SELECT id
            FROM role
            WHERE title = 'Head of Marketing'
        ),
        6
    ),
    (
        "Jean",
        "Grey",
        (
            SELECT id
            FROM role
            WHERE title = 'SVP of Business'
        ),
        1
    ),
    (
        "Alexander",
        "Summers",
        (
            SELECT id
            FROM role
            WHERE title = 'Marketing Associate'
        ),
        6
    ),
    (
        "Kurt",
        "Wagner",
        (
            SELECT id
            FROM role
            WHERE title = 'Developer'
        ),
        12
    ),
    (
        "James",
        "Howlett",
        (
            SELECT id
            FROM role
            WHERE title = 'Developer'
        ),
        13
    ),
    (
        "Ororo",
        "Monroe",
        (
            SELECT id
            FROM role
            WHERE title = 'VP of Engineering'
        ),
        5
    ),
    (
        "Piotr",
        "Rasputin",
        (
            SELECT id
            FROM role
            WHERE title = 'Lead Developer'
        ),
        11
    ),
    (
        "Katherine",
        "Pryde",
        (
            SELECT id
            FROM role
            WHERE title = 'Lead Developer'
        ),
        11
    ),
    (
        "Max",
        "Eisenhardt",
        (
            SELECT id
            FROM role
            WHERE title = 'Marketing Associate'
        ),
        6
    ),
    (
        "Anna",
        "LeBeau",
        (
            SELECT id
            FROM role
            WHERE title = 'Facilities Manager'
        ),
        2
    ),
    (
        "Remy",
        "LeBeau",
        (
            SELECT id
            FROM role
            WHERE title = 'Business Analyst'
        ),
        7
    ),
    (
        "Nathan",
        "Summers",
        (
            SELECT id
            FROM role
            WHERE title = 'Marketing Associate'
        ),
        14
    ),
    (
        "Raven",
        "Darkhölme",
        (
            SELECT id
            FROM role
            WHERE title = 'Developer'
        ),
        11
    ),
    (
        "Elizabeth",
        "Braddock",
        (
            SELECT id
            FROM role
            WHERE title = 'Business Analyst'
        ),
        16
    ),
    (
        "David",
        "Haller",
        (
            SELECT id
            FROM role
            WHERE title = 'Data Scientist'
        ),
        5
    ),
    (
        "Wade",
        "Wilson",
        (
            SELECT id
            FROM role
            WHERE title = 'Developer'
        ),
        10
    );
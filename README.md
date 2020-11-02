# Employee Tracker

![](https://img.shields.io/badge/license-MIT%20License-blue)

## Description

---

Employee tracker

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [Contributing](#contributing)
- [License](#license)

## Install

---

1. Clone this repo
    ```
    git@github.com:wilmararturo/employee-tracker.git
    ```
1. Update mysql by adding the `./db/schema.sql`
1. (Optional) Add seed data from `./db/seed.sql`
1. Copy `sample.env` to `.env` and update with your MySQL Password. 
1. Run the app.
    ```
    node app
    ```

## Usage

---

![employe_tracker_x](employee_tracker_x.png)

1. Make sure MySQL running and listening on `3306/tcp`

    * The `employee_db` database must be created with the provided schema.

1. Start the server 

    ```
      node app
    ```

1. Follow the test based questions to perform tasks

1. Available tasks:

    * Add departments, roles, employees

    * View departments, roles, employees

    * Update employee roles

1. Quit to end the database connection
 


## Tests

---

n/a

## Questions

---

Contact:

[wilamrarturo](https://github.com/wilamrarturo) on GitHub

[e-mail](mailto:wilamrs@gmail.com)

## Contributing

---

Create a pull request.

## License

---

Licensed under the [MIT License](https://api.github.com/licenses/mit)
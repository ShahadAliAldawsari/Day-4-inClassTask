This repository contains a series of utility functions, TypeScript features, and examples, including validation, user creation, class implementation, and asynchronous data fetching.

Sections
Section 1 - Task 1: Utility Function
Function: capitalizeWords(s: string)
Capitalizes the given string s and trims whitespace.
If the string is empty, it prints "It is empty!".
Section 1 - Task 2: Number Validator
Function: isValidNumber(value: unknown)
Checks if the given value is a valid number and logs true or false.

Section 2 - Task 3: User Interface
Interface: User
Defines a User with id, name, email, and an optional isAdmin field.
Function: createUser(u: User)
Creates a user and logs the creation message.

Section 3 - Task 4: Product Class
Class: Product
Contains product details such as name, price, and category.
Includes a method getDiscountedPrice(discount: number) to calculate the price after applying a discount.

Section 4 - Task 5: Generic Function
Function: filterArray<T>(array: T[])
Filters an array to find only even numbers.
Logs the filtered result.

Section 5 - Task 6: Fetch and Display Users Data
Function: fetch_user_info()
Fetches user data from jsonplaceholder.typicode.com and logs it to the console.

Bonus Challenge: Advanced Password Validation
Function: password_validation(password: string)
Validates a password by checking its length, composition (uppercase, lowercase, number, special character), and whether it's in a list of common passwords.

Prerequisites
Node.js and npm installed for running TypeScript.
TypeScript compiler setup to run .ts files.

How to Run
Clone the repository.
Install dependencies: npm install
Compile TypeScript: tsc
Run the generated JavaScript file: node <compiled_file.js>
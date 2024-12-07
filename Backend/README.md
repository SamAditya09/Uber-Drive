# User Registration Endpoint

## Description

The `/users/register` endpoint allows users to register by providing their full name, email, and password.

## Request Body

The following data is required in the request body:

* `fullName`: Object with `firstName` and `lastName` properties
* `email`: String
* `password`: String

## Status Codes

* `201 Created`: User registered successfully
* `400 Bad Request`: Validation errors or missing required fields

# User Login Endpoint

## Description

The `/users/login` endpoint allows users to log in by providing their email and password.

## Request Body

The following data is required in the request body:

- `email`: String
- `password`: String

## Status Codes

- `200 OK`: User logged in successfully
- `400 Bad Request`: Validation errors or missing required fields
- **401 Unauthorized**: Incorrect email or password

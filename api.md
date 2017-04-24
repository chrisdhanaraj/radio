POST /api/users
Used for signing up a user. Accepts username, email, and password to create a user. Returns a JWT.

POST /api/users/authenticate
Used for logging a user in. Accepts username or email and password to authenticate a user. Returns a JWT.

GET /api/users
Returns all users in the database. Requires a valid JWT with an admin scope.

PATCH /api/user/{id}
Updates a user. Requires a valid JWT with an admin scope.

GET /api/instructors
Returns all instructors in the database. Requires a valid JWT.

GET /api/instructors/{id}
Returns a specific instructor in the database. Requires a valid JWT.

POST /api/instructors
Saves a new instructor in the database. Requires a valid JWT with an admin scope.

DELETE /api/instructors/{id}
Deletes an instructor with a specific id. Requires a valid JWT with an admin scope.

POST /api/users/check
Checks whether a user already exists or not. Useful for doing async form validation.
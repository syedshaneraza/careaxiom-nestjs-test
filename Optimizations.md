Task 2 : INDEXES
-> We can create indexing on users age (as it is a number).
-> We can use unique filter for email column. It will boost lookups.
-> We can use Varchar(255) instead of text for email.

Task 4 : API Performance & Security
-> We can use packages like cache-manager to avoid repeated DB queries.
-> We can store all the data inside redis on initialization of the project and then use redis.get() commands to get the data in no time.

Security : 
-> We can limit the number of similar hits on database by using rate-limiting.
-> We can use class-validators to validate the CURL request body while storing data inside the DB.
-> We can use JWT Tokens + OAuth for authentication.
-> We can use guards to implement authorizations before even reaching the controller.
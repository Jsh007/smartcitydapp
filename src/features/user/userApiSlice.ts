/*
This Api slice should have the following endpoints and purposes:
USER RECORD
- addUser(POST): To signup a user. i.e add a new user doc to mongodb: : accessible to User
- DeleteUser(DELETE): To delete a user from mongodb: accessible to Admin 
- UpdateUser(PATCH): To update user's profile fields/records: accessible to Admin and User.
- getUser(GET): To retrieve a user's doc from mongodb

USER REFERRALS
# You might want to implement this in the referralApiSlice
- getUserReferrals(GET): To get a user's referrals.
- getUserDownlines(GET): To get the referrals of a user's referral. Available to affiliate users only 

USER PROFILE
- getUserProfile(GET to "/user/profile/:id")
*/

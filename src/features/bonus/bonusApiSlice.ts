/*
some endpoints:
- claimBonus : POST req to: /bonuses/claim/{username} 
: should get all of the user's docs from the bonuses collection where isClaimed:false (default)
: and update said  field (isClaimed) to true.  Only after $0.12 equivalent in SOL has been successfully deducted from their connected wallet
: The user's bonuses doc could possibly be of 2 types;
: System Bonus: has type:system - only one should exist per day (created for user via  cronjobs) and a user can only claim the doc whose createdAt:Today
: performance Bonus: hasds type: performance - only one should exist per day; created for the user after completing their  first task for the day.
*/

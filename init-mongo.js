db.createUser(
    {
        user: "day-challenge",
        pwd: "day-challenge",
        roles: [
            {
                role: "readWrite",
                db: "day-challenge"
            }
        ]
    }
)

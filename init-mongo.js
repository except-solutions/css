db.createUser(
    {
        user: "mongocss",
        pwd: "mongocss",
        roles: [
            {
                role: "readWrite",
                db: "mongocss"
            }
        ]
    }
)

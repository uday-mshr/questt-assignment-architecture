db.createUser(
    {
        user: "root",
        pwd: "toor@321",
        roles: [
            {
                role: "readWrite",
                db: "qdb"
            }
        ]
    }
);
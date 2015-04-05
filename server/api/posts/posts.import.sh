DB="LocalDB"
COLLECTION="Posts"
FILE="posts.seed.json"

mongoimport --db $DB --collection $COLLECTION $FILE --jsonArray --drop

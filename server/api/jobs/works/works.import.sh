DB="LocalDB"
COLLECTION="Works"
FILE="works.seed.json"

mongoimport --db $DB --collection $COLLECTION $FILE --jsonArray --drop

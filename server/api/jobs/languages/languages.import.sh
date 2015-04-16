DB="LocalDB"
COLLECTION="Languages"
FILE="languages.seed.json"

mongoimport --db $DB --collection $COLLECTION $FILE --jsonArray --drop

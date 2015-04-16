DB="LocalDB"
COLLECTION="Technologies"
FILE="technologies.seed.json"

mongoimport --db $DB --collection $COLLECTION $FILE --jsonArray --drop

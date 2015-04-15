DB="LocalDB"
COLLECTION="Projects.Personal"
FILE="personal.seed.json"

mongoimport --db $DB --collection $COLLECTION $FILE --jsonArray --drop

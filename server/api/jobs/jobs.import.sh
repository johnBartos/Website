DB="LocalDB"
COLLECTION="Jobs"
FILE="jobs.seed.json"

mongoimport --db $DB --collection $COLLECTION $FILE --jsonArray --drop

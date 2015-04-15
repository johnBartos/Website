DB="LocalDB"
COLLECTION="Projects.Work"
FILE="work.seed.json"

mongoimport --db $DB --collection $COLLECTION $FILE --jsonArray --drop

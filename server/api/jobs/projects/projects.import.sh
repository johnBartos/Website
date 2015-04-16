DB="LocalDB"
COLLECTION="Projects"
FILE="projects.seed.json"

mongoimport --db $DB --collection $COLLECTION $FILE --jsonArray --drop

## ON STARTUP ##
change directory into cloned down repository and open three tabs in your CLI
* - indicates steps that only need to be done the first time.

TAB ONE 
1. npm install
2. bower install
3. brew install postgresql *
...(follow other steps in other tabs)
7. npm start (or nodemon start)

TAB TWO
4. postgres -D /usr/local/var/postgres *
   (^ for brew installers -- see website if you did not use brew)

TAB THREE
5. createdb fount *
6. psql fount

NOTES
Inconsistent folder naming conventions (mix of uppercase and lowercase).
//TO DO: Make note on what the three databases are doing.
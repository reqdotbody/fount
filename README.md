# fount
-A venue for publicly sourced learning aids.

-Contributors: Edwin Calte, Esteban Castano, Farhana Maredia, Gregg Moore, Isto Barton

-This app was built with a PostgreSQL database (using knex and bookshelf), served with Express & Node, and built in Angular (using bootstrap & classy).

**ON STARTUP**
(From cloned directory in each TAB)

TAB ONE
1. npm install
2. bower install
3. brew install postgres (only if you do not currently have postgres installed)
...(follow other steps)
7. npm start

TAB TWO
4. postgres -D /usr/local/var/postgres (for brew installers -- see website if you did not use brew)

TAB THREE
5. createdb fount;
6. psql fount

## MODEL ##
  Files:

## VIEW ##
  Files: 

  Our view path is as follows:

  1. index.html (From which you can access the following views found within the App folder)

    a. subcategory_searchbar_view (Shows the results of querying the subcategory database based on searchbar input keyword)

    b. subcategory_category_view (Shows all subcategories based on the selected category)

      i. results_view (Upon selection of a subcategory in view (a) or (b) you will see the queried results of links that match the selected subcategory)

## CONTROLLERS ##
  Files:



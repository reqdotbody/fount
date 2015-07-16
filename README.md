# fount
-A venue for publicly sourced learning aids.

-Contributors: Edwin Calte, Esteban Castano, Farhana Maredia, Gregg Moore, Isto Barton

-This app was built with a PostgreSQL database, served with Express & Node, and built in Angular with Jade templating.

Our view path is as follows:
1. index.html (From which you can access the following views found within the App folder)
  a. subcategory_searchbar_view (Shows the results of querying the subcategory database based on searchbar input keyword)
  b. subcategory_category_view (Shows all subcategories based on the selected category)
    i. results_view (Upon selection of a subcategory in view (a) or (b) you will see the queried results of links that match the selected subcategory)


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

## MODEL ##
  Files:
  public/app/Auth/user_model.js


## VIEW ##
  Files: 

  Our view path is as follows:

  1. index.html (From which you can access the following views found within the App folder)

    a. subcategory_searchbar_view (Shows the results of querying the subcategory database based on searchbar input keyword)

    b. subcategory_category_view (Shows all subcategories based on the selected category)

      i. results_view (Upon selection of a subcategory in view (a) or (b) you will see the queried results of links that match the selected subcategory)

## CONTROLLERS ##
  Files:





# MAIN

url: http://fount.io/#/

The main view submits a get request via its controller
to the api endpoint of the server:
  endpoint: 'api/v1/categories'
  method: GET

and the server returns an array of objects that look like this:

{
  id: [int of category's id]
  name: [string of category's name],
  img: [string of category's image],
}
__________________________

#SEARCH


url: http://fount.io/#/

The search field updates the search view's scope.searchfield variable in real-time...
when the user hits 'enter', the scope.submitSearch method runs which
submits a post request to the api endpoint of the server:
    (insert url here)
The request looks like:

URL(After the post submit): url: http://fount.io/#/search

endpoint: 'api/v1/subcategories'
method: POST

{
  searchItem: [value of $scope.searchfield]
}

The server listens for this.. and grabs the 'req.body'.. which it uses to
make a query to database.
It'll return to the front-end (client folder) an array of objects which look like:

{
  parentCategory: [string of parent category name]
  parentCategory_id: [number of Category id]
  subcategory: [string of subcategory name]
  subcategory_id: [number of subcategory id]
}

________________________________

#SUB-CATEGORY VIEW

url: http://fount.io/#/{Category}

The user clicks on a category on the main page, or visits the URL directly. This would redirect the user to the URL for the category, and render all the subcategories for that category.

endpoint: api/v1/{Category}/
method: GET

Which will respond with an array of objects that will look like this:

{
  subcategory: [string of subcategory name],
  subcategory_id: [number of the subcategory id]
  category_id: [integer of category id]
  parentCategory: [string of parent category name]
}


____________________________________

TODO

#FOUNT VIEW

URL: http://fount.io/#/{Category}/{subCategory}

The user would clikc on a link to this URL from the SUB-CATEGORY view, or visits the URL directly. Here the user would view all the URL's that have been submitted to this Fount.

endpoint: api/v1/{Category}/{subCategory}
method:GET

This will respond with an array if objects that will look like this.

{
  title: [string of the url title]
  url: [string with the URL to the submitted URL]
  votes: [integer of the number of votes for the post]
  username: [string of the user who submited the URL]
  date: [string of the date the url was submitted]
  id: [string of the id for the submited url]
  hasVoted: [string 'upvote' 'downvote' 'none']
}

_________________________________________


#Submit Link

URL: http://fount.io/#/{Category}/{subCategory}/{Submit}

THis is how the user would be submiting new links to the site. The user would hit submit with the following information which would send a POST request to the server with the following data:

endpoint: api/v1/submit
method: POST

{
    title: [string of the url title]
    url: [string with a URL]
    user_id: [number user_id]
    subcat_id: [string of the subcategory name or number of the sbucateogry id]
}



_____________________________________________
Create a Sub Category

This endpoint is used to create new sub categories

endpoint: api/v1/submit/subcategory
method:post

{ 
  name:[Sub-Category Name in string],
  cat_id:[Parent Category as number]
}
_____________________________________________
Create a Category

This endpoint is used so admins can create new Categories

endpoint:/v1/submit/category
method:POST

{
  name:[Category Name in string],
  img:[link to image in string format]
}
# MAIN

url: http://fount.io/#/

The main view submits a get request via its controller
to the api endpoint of the server:
  endpoint: '/api/v1/categories'
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

endpoint: '/api/v1/subcategories'
method: POST

{
  searchItem: [value of $scope.searchfield]
}

The server listens for this.. and grabs the 'req.body'.. which it uses to
make a query to database.
It'll return to the front-end (client folder) an array of objects which look like:

{
  parentCategory: [string of parent category name]
  subcategory: [string of subcategory name]
}

________________________________

#SUB-CATEGORY VIEW

url: http://fount.io/#/{Category}

The user clicks on a category on the main page, or visits the URL directly. This would redirect the user to the URL for the category, and render all the subcategories for that category.

endpoint: /api/v1/{Category}/
method: GET

Which will respond with an array of objects that will look like this:

{
  subcategory: [string of subcategory name]
  category_id: [integer of category id]
}

____________________________________

#FOUNT VIEW

URL: http://fount.io/#/{Category}/{subCategory}

The user would clikc on a link to this URL from the SUB-CATEGORY view, or visits the URL directly. Here the user would view all the URL's that have been submitted to this Fount.

endpoint: /api/v1/{Category}/{subCategory}
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

endpoint: /api/v1/submit
method: POST

{
    title: [string of the url title]
    url: [string with a URL]
    username: [string -- username]
    subCategory: [string of the subcategory name]
    parentCategory: [string of the parentcategory name]
}


____________________________________________

//TODO Upvote link endpoint


//TODO Submit subcategorry
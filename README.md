This API has a front-end. 
Here's the link: https://github.com/zckramer/movie-search-frontend/tree/master

You will probably have to npm install for both front and back-ends.
The API has to be run on localhost:9000

Search for a movie title as accurately as you can. Even with misspellings or punctuation errors you can get possible matches (at the bottom of the page) while the main search will return the closest match! 
Tech Stack:
I'm using the unofficial IMDB API, found here: https://rapidapi.com/hmerritt/api/imdb-internet-movie-database-unofficial
I chose it because it's totally FREE ;) I managed to use both API methods it provides.

I used create-react-app for the front-end, and express-generator for the back-end. The database is mongoDB. 
Demonstration of use:
https://gyazo.com/e2adc00bd30997096c43315d2c1b29ad
known bugs:
after up or down voting, the displayed vote count doesn't update properly. You can see the values have changed if you hit "Submit" again and wait for it to reload.

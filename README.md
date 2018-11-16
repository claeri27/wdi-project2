# Movie Grabber

The purpose of this site is to find and display movie data easily. Users can choose to see a list of movies and then filter the list according to what they want to see. There will be a search bar as well as 'Popular' and 'Now Playing' buttons. The list of movies will not display until the user presses a button.


## MVP

### Components:
MovieForm.js - Search bar input
MovieList.js - Where and how the movies are displayed
MoviePoster.js - Each individual movie displayed in MovieList
Filler.js - Welcome screen

### Features:
Pull movies from an API and display them on screen.

Search through movies with user input.

Have buttons that display a list of movies that are either Now Playing, Top Rated, or Upcoming.

Be able to press the movie poster and see movie details

## POST MVP

### Features:
Search bar that searches as user types - COMPLETE

Choose how the movies are viewed by having two view states - a poster view and a details view. - COMPLETE

Add infinite scroll that adds the next 20 movies to the current list - INCOMPLETE

Make second API call to receive cast and crew for each movie after receiving movie ID from previous API call - INCOMPLETE

Add a flip animation to when you press the movie poster - INCOMPLETE

Settings button - INCOMPLETE

Login page with google login - INCOMPLETE

Create a custom list - INCOMPLETE


## Additional Libraries

React, axios


## Code Snippet

### Ternary within Ternary
```javascript
{this.props.movies.map(movie =>
  this.state.currentMovie === movie.id ?
  <div className='moviedetail' onClick={e => {
    return (
      this.selectMovie()
    )}}>
    <h2 id='movietitle'>{movie.title}</h2>
    <p id='releasedate'>{movie.release_date[0] + movie.release_date[1] + movie.release_date[2] + movie.release_date[3]}</p>
    <p id='overview'>{movie.overview}</p>
  </div> :
  this.props.gridView === true ?
  <MoviePoster
    key={movie.id}
    onClick={e => this.selectMovie(movie.id)}
    movie={movie}
    title={movie.title}
    release_date={movie.release_date}
    overview={movie.overview}
    poster_path={movie.poster_path}
  /> :
  <div className='listinfo'>
    <div className='listpic'>
      <img id='movieimage' src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path} />
    </div>
    <div className='listinfo2'>
      <h3 id='infotitle'>{movie.title}</h3>
      <p id='infooverview'>{movie.overview}</p>
    </div>
  </div>
)}
```

## Potential Issues & Solutions:

Getting the API to return the movie poster images may be difficult. I'll solve this by getting help from teachers or researching google. I plan on implementing a lot of high quality css when I'm done so that will probably be the hardest part.

## Wireframes:

The link to my surge is here: [Movie Grabber](https://github.com/facebook/create-react-app).

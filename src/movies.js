// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map((currentMovie) => currentMovie.director)
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let movieBySpielberg = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    )
    return movieBySpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let sum = moviesArray.reduce((acc, movie) => acc + movie.score, 0);
    let avg = sum / moviesArray.length
    return Math.round(avg * 100) / 100

}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));

    if (dramaMovies.length === 0) {
        return 0;
    }

    let sum = dramaMovies.reduce((acc, movie) => {
        if (typeof movie.score === "number" && !isNaN(movie.score)) {
            return acc + movie.score;
        } else {
            return acc;
        }
    }, 0);

    let avg = Math.round((sum / dramaMovies.length) * 100) / 100;
    return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesArrayCopy = [...moviesArray]
    let orderedByYear = moviesArrayCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        }
        else {
            return a.title.localeCompare(b.title);
        }
    })

    return orderedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphaArr = [...moviesArray];
    alphaArr.sort((a, b) => a.title.localeCompare(b.title))
    return alphaArr.slice(0, 20).map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let modifiedMovies = moviesArray.map(movie => {
        // Parse the duration string into hours and minutes
        const durationArray = movie.duration.split(" ");
    
        // Extract hours and minutes
        let hours = 0;
        let minutes = 0;
        if (durationArray.length > 0) {
          hours = durationArray[0].includes("h") ? parseInt(durationArray[0]) : 0;
        }
        if (durationArray.length > 1) {
          minutes = durationArray[1].includes("min") ? parseInt(durationArray[1]) : 0;
        }
    
        // Calculate total duration in minutes
        const totalMinutes = hours * 60 + minutes;
    
        // Create a new object with the duration in minutes
        return {
          ...movie,
          duration: totalMinutes,
        };
      });
    
      return modifiedMovies;
 }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }

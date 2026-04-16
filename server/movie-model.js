/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
let movieObject = {
    "tt001": {
        "imdbID": "tt001",
        "Title": "Matrix",
        "Year": "1993",
        "Released": "1993-03-01",
        "Runtime": 60,
        "Genres": ["Action", "Drama", "Fantasy"],
        "Writers": ["Grenville Case"],
        "Directors": ["Brother Something", "John Cusack"],
        "Actors": ["Nick Mancuso", "Phillip Jarrett", "Carrie-Anne Moss"],
        "Plot": "Hitman Steven Matrix is shot, experiences afterlife, gets second chance by helping others. Wakes up, meets guides assigning cases where he aids people using unorthodox methods from past profession.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2JiZjU1NmQtNjg1Ni00NjA3LTk2MjMtNjYxMTgxODY0NjRhXkEyXkFqcGc@._V1_SX300.jpg",
        "Metascore": 82,
        "imdbRating": 7.2
    },
    "tt002": {
        "imdbID": "tt002",
        "Title": "Inception",
        "Released": "2010-07-16",
        "Runtime": 148,
        "Genres": ["Action", "Adventure", "Sci-Fi"],
        "Directors": ["Christopher Nolan"],
        "Writers": ["Christopher Nolan"],
        "Actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO, but his tragic past may doom the project and his team to disaster.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": 74,
        "imdbRating": 8.8
    },
    "tt003": {
        "imdbID": "tt003",
        "Title": "Shutter Island",
        "Released": "2010-02-19",
        "Runtime": 138,
        "Genres": ["Drama", "Mystery", "Thriller"],
        "Directors": ["Martin Scorsese"],
        "Writers": ["Laeta Kalogridis", "Dennis Lehane"],
        "Actors": ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"],
        "Plot": "Two US marshals are sent to a mental institution on an inhospitable island in order to investigate the disappearance of a patient.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_SX300.jpg",
        "Metascore": 63,
        "imdbRating": 8.2
    }
};
module.exports = movieObject;
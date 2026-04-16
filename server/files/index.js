window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
        let movieArticle = document.createElement("article");
        let movieId = movie.imdbID;
        movieArticle.id = movie.imdbID
        let image = document.createElement("img");
        image.src = movie.Poster;
        movieArticle.appendChild(image);

        let title = document.createElement("h1");
        title.textContent = movie.Title;
        movieArticle.appendChild(title);

        let button = document.createElement("button");
        button.textContent = "Edit";
        movieArticle.appendChild(button);


        let runtime =  document.createElement("p");
        runtime.textContent = "Runtime: " + movie.Runtime + " min";
        movieArticle.appendChild(runtime);

        let release = document.createElement("p");
        release.textContent = "Release: " + movie.Released;
        movieArticle.appendChild(release);

        let genre = document.createElement("p");
        genre.textContent = "Genre: ";
        movieArticle.appendChild(genre);
        movie.Genres.forEach (element => {
          let tag = document.createElement("span");
          tag.classList.add("genre");
          tag.textContent = element;
          genre.appendChild(tag);
        });

        let plot = document.createElement("p");
        plot.textContent = movie.Plot;
        movieArticle.appendChild(plot);

        let directorLabel = document.createElement("h2");
        directorLabel.textContent = "Directors";
        movieArticle.appendChild(directorLabel);
        let directorsList = document.createElement("ul");
        movie.Directors.forEach(name => {
          let list = document.createElement("li");
          list.textContent = name;
          directorsList.appendChild(list);
        });
        movieArticle.appendChild(directorsList);

        let writersLabel = document.createElement("h2");
        writersLabel.textContent = "Writers";
        movieArticle.appendChild(writersLabel);
        let writersList = document.createElement("ul");
        movie.Writers.forEach(name => {
          let list = document.createElement("li");
          list.textContent = name;
          writersList.appendChild(list);
        });
        movieArticle.appendChild(writersList);

        let actorsLabel = document.createElement("h2");
        actorsLabel.textContent = "Actors";
        movieArticle.appendChild(actorsLabel);
        let actorsList = document.createElement("ul");
        movie.Actors.forEach(name => {
          let list = document.createElement("li");
          list.textContent = name;
          actorsList.appendChild(list);
        });
        movieArticle.appendChild(actorsList);

        bodyElement.appendChild(movieArticle);

      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};

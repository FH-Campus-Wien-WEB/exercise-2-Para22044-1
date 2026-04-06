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

        const article = document.createElement("article");
        article.id = movie.imdbID;

        const title = document.createElement("h2");
        title.textContent = movie.Title;
        
        const image = document.createElement("img");
        image.src = movie.Poster;
        image.alt = movie.Title;
        image.width = 200;

        const released = document.createElement("p");
        released.textContent = "Released: " + movie.Released;

        const runtime = document.createElement("p");
        runtime.textContent = "Runtime: " + movie.Runtime + " min";
      
        const genresParagraph = document.createElement("p");
        for (const genre of movie.Genres) {
          const genreSpan = document.createElement("span");
          genreSpan.className = "genre";
          genreSpan.textContent = genre;
          genresParagraph.append(genreSpan);
        }

        const directors = document.createElement("p");
        directors.textContent = "Directors: " + movie.Directors.join(", ");
        
        const writers = document.createElement("p");
        writers.textContent = "Writers: " + movie.Writers.join(", ");

        const actors = document.createElement("p");
        actors.textContent = "Actors: " + movie.Actors.join(", ");

        const plot = document.createElement("p");
        plot.textContent = movie.Plot;

        const metascore = document.createElement("p");
        metascore.textContent = "Metascore: " + movie.Metascore;

        const imdbRating = document.createElement("p");
        imdbRating.textContent = "IMDb Rating: " + movie.imdbRating;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        article.append(
          title,
          image,
          released,
          runtime,
          genresParagraph,
          directors,
          writers,
          actors,
          plot,
          metascore,
          imdbRating,
          editButton
        );

        bodyElement.append(article);
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

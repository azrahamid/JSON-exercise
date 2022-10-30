//Fetch the movies and log them out to the console

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(moviesData => {
        console.log(moviesData.length)

        //Render the following string to the html using the fetched movies array: 6527 movies fetched
        document.querySelector("h1")
        const h1 = document.querySelector("h1")
        h1.innerHTML= moviesData.length
        console.log(h1)

        //Render the first movie in the movies array
        h1.innerHTML= moviesData[0].title;


        //Render the first movie in the movies array







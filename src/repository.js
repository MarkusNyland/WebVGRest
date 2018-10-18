/*
    This would be the access to a Database (eg, Postgres or MySQL).
    But, here, for simplicity, we do all in memory.
 */

// map from ids to books
const videoGames = new Map();

//used to create unique ids
let counter = 0;

function initWithSomeData(){

    videoGames.clear();
    counter = 0;

    createNewVideoGame("a", "20.04.1887", "Fighting");
    createNewVideoGame("b", "05.07.2908", "Racing");
    createNewVideoGame("c", "07.09.2011", "Racing");
    createNewVideoGame("d", "17.08.2004", "Arcade");
    createNewVideoGame("e", "27.02.2017", "Fighting");
    createNewVideoGame("f", "05.11.2015", "Fighting");
}

function createNewVideoGame(title, releaseDate, genre){

    const id = "" + counter;
    counter++;

    const game = {
        id: id,
        title: title,
        releaseDate: releaseDate,
        genre: genre
    };

    videoGames.set(id, game);

    return id;
}

function deleteVideoGame(id){

    return videoGames.delete(id);
}

function getVideoGame(id){

    return videoGames.get(id);
}

function getAllVideoGames(){

    return Array.from(videoGames.values());
}

function updateVideoGame(game){

    if(! videoGames.has(game.id)){
        return false;
    }

    videoGames.set(game.id, game);
    return true;
}

function getAllVideoGamesWithGenre(genre){

    return Array.from(videoGames.values()).filter(game => game.genre === genre);
}

module.exports = {initWithSomeData, getVideoGame, getAllVideoGames, getAllVideoGamesWithGenre, deleteVideoGame, updateVideoGame};

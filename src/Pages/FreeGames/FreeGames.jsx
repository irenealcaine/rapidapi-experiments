import { Link } from "react-router-dom";
import "./FreeGames.scss";
import { useEffect, useState } from "react";
import axios from "axios";


// https://rapidapi.com/digiwalls/api/free-to-play-games-database/
// https://www.freetogame.com/api-doc

const FreeGames = () => {

  const [freeGameData, setFreeGameData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL, {
          headers: {
            'X-RapidAPI-Host': process.env.REACT_APP_HOST,
            'X-RapidAPI-Key': process.env.REACT_APP_KEY,
          },
        });

        setFreeGameData(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
    console.log(freeGameData)

  }, []);

  // const exampleData = [
  //   {
  //     id: 540,
  //     title: "Overwatch 2",
  //     thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
  //     short_description:
  //       "A hero-focused first-person team shooter from Blizzard Entertainment.",
  //     game_url: "https://www.freetogame.com/open/overwatch-2",
  //     genre: "Shooter",
  //     platform: "PC (Windows)",
  //     publisher: "Activision Blizzard",
  //     developer: "Blizzard Entertainment",
  //     release_date: "2022-10-04",
  //     freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
  //   },
  //   {
  //     id: 521,
  //     title: "Diablo Immortal",
  //     thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
  //     short_description:
  //       "A free-to-play, browser-based fantasy RPG developed \r\nby Game Hollywood and published by \r\nProficient City.",
  //     game_url: "https://www.freetogame.com/open/diablo-immortal",
  //     genre: "MMOARPG",
  //     platform: "PC (Windows), Web Browser",
  //     publisher: "Blizzard Entertainment",
  //     developer: "Blizzard Entertainment",
  //     release_date: "2022-06-02",
  //     freetogame_profile_url: "https://www.freetogame.com/diablo-immortal",
  //   },
  //   {
  //     id: 388,
  //     title: "Lord’s Road",
  //     thumbnail: "https://www.freetogame.com/g/388/thumbnail.jpg",
  //     short_description:
  //       "A free-to-play 2D browser-based fantasy MMORPG that features two playable classes.",
  //     game_url: "https://www.freetogame.com/open/lords-road",
  //     genre: "MMORPG",
  //     platform: "Web Browser",
  //     publisher: "AMZGame",
  //     developer: "AMZGame",
  //     release_date: "2015-06-03",
  //     freetogame_profile_url: "https://www.freetogame.com/lords-road",
  //   },
  //   {
  //     id: 181,
  //     title: "8BitMMO",
  //     thumbnail: "https://www.freetogame.com/g/181/thumbnail.jpg",
  //     short_description:
  //       "A free to play retro­-style 2D MMO and a giant construction sandbox! ",
  //     game_url: "https://www.freetogame.com/open/8bitmmo",
  //     genre: "MMORPG",
  //     platform: "PC (Windows), Web Browser",
  //     publisher: "Archive Entertainment ",
  //     developer: "Archive Entertainment ",
  //     release_date: "2015-01-26",
  //     freetogame_profile_url: "https://www.freetogame.com/8bitmmo",
  //   },
  // ];

  return (
    <div className="free-games">
      <h1>Free games</h1>

      <div className="container">
        {freeGameData.map((game) => (
          <div key={game.id} className="game-content">
            <Link to={game.game_url}>
              <h2 className="game-title">{game.title}</h2>
              <img
                className="thumbnail"
                alt={game.title}
                src={game.thumbnail}
              />
            </Link>

            <p className="game-description">{game.short_description}</p>
            <p className="game-genre">
              <span>Genre: </span>
              {game.genre}
            </p>
            <p className="game-platform">
              <span>Platform: </span>
              {game.platform}
            </p>
            <p className="game-publisher">
              <span>Publisher: </span>
              {game.publisher}
            </p>
            <p className="game-release_date">
              <span>Date: </span>
              {game.release_date}
            </p>
            <Link to={game.freetogame_profile_url} className="game-profile">
              Freetogame profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeGames;

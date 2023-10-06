import { Link } from "react-router-dom";
import "./FreeGames.scss";

const FreeGames = () => {
  const exampleData = [
    {
      id: 540,
      title: "Overwatch 2",
      thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
      short_description:
        "A hero-focused first-person team shooter from Blizzard Entertainment.",
      game_url: "https://www.freetogame.com/open/overwatch-2",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Activision Blizzard",
      developer: "Blizzard Entertainment",
      release_date: "2022-10-04",
      freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
    },
    {
      id: 521,
      title: "Diablo Immortal",
      thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
      short_description:
        "A free-to-play, browser-based fantasy RPG developed \r\nby Game Hollywood and published by \r\nProficient City.",
      game_url: "https://www.freetogame.com/open/diablo-immortal",
      genre: "MMOARPG",
      platform: "PC (Windows), Web Browser",
      publisher: "Blizzard Entertainment",
      developer: "Blizzard Entertainment",
      release_date: "2022-06-02",
      freetogame_profile_url: "https://www.freetogame.com/diablo-immortal",
    },
    {
      id: 388,
      title: "Lord’s Road",
      thumbnail: "https://www.freetogame.com/g/388/thumbnail.jpg",
      short_description:
        "A free-to-play 2D browser-based fantasy MMORPG that features two playable classes.",
      game_url: "https://www.freetogame.com/open/lords-road",
      genre: "MMORPG",
      platform: "Web Browser",
      publisher: "AMZGame",
      developer: "AMZGame",
      release_date: "2015-06-03",
      freetogame_profile_url: "https://www.freetogame.com/lords-road",
    },
    {
      id: 181,
      title: "8BitMMO",
      thumbnail: "https://www.freetogame.com/g/181/thumbnail.jpg",
      short_description:
        "A free to play retro­-style 2D MMO and a giant construction sandbox! ",
      game_url: "https://www.freetogame.com/open/8bitmmo",
      genre: "MMORPG",
      platform: "PC (Windows), Web Browser",
      publisher: "Archive Entertainment ",
      developer: "Archive Entertainment ",
      release_date: "2015-01-26",
      freetogame_profile_url: "https://www.freetogame.com/8bitmmo",
    },
  ];

  return (
    <div className="free-games">
      <h1>Free games</h1>

      <div className="container">
        {exampleData.map((game) => (
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
            <p className="game-genre">{game.genre}</p>
            <p className="game-platform">{game.platform}</p>
            <p className="game-publisher">{game.publisher}</p>
            <p className="game-release_date">{game.release_date}</p>
            <Link
              to={game.freetogame_profile_url}
              className="game-release_date"
            >
              Freetogame profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeGames;

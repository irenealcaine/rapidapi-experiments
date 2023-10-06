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
        "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
      game_url: "https://www.freetogame.com/open/diablo-immortal",
      genre: "MMOARPG",
      platform: "PC (Windows)",
      publisher: "Blizzard Entertainment",
      developer: "Blizzard Entertainment",
      release_date: "2022-06-02",
      freetogame_profile_url: "https://www.freetogame.com/diablo-immortal",
    },
  ];

  return (
    <div className="free-games">
      <h1>Free games</h1>
      {exampleData.map((game) => (
        <div key={game.id} className="container">
          <div className="game-content">
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
              freetogame_profile_url
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreeGames;

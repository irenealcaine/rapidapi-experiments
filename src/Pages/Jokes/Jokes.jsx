import { useEffect, useState } from "react";
import "./Jokes.scss";
import axios from "axios";

// https://rapidapi.com/apininjas/api/jokes-by-api-ninjas

const Jokes = () => {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_URL_JOKES, {
          params: { limit: '30' },
          headers: {
            "X-RapidAPI-Host": process.env.REACT_APP_JOKES_HOST,
            "X-RapidAPI-Key": process.env.REACT_APP_TU_RAPIDAPI_KEY,
          },
        });

        setJokes(response.data);
        console.log(jokes);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  // const exampleData = [
  //   {
  //     joke: "What kind of turns do letters take? U-turns!",
  //   },
  //   {
  //     joke: 'The fast food restaurant for babies. "Welcome to Gerber King, may I take your order?"',
  //   },
  //   {
  //     joke: 'What goes "Hahahahaha...*thud*"? Someone laughing their head off',
  //   },
  //   {
  //     joke: "Why didn't the baby oyster share her little pearl? She was a little shellfish.",
  //   },
  //   {
  //     joke: "What did the traffic light say to the car? Don't look at me I'm changing.",
  //   },
  // ];
  return (
    <div className="jokes">
      <h1>Jokes</h1>
      <div className="jokes-list">
        {jokes.map((joke) => (
          <p className="joke">{joke.joke}</p>
        ))}
      </div>
    </div>
  );
};

export default Jokes;

import "./Jokes.scss";

// https://rapidapi.com/apininjas/api/jokes-by-api-ninjas

const Jokes = () => {
  const exampleData = [
    {
      joke: "What kind of turns do letters take? U-turns!",
    },
    {
      joke: 'The fast food restaurant for babies. "Welcome to Gerber King, may I take your order?"',
    },
    {
      joke: 'What goes "Hahahahaha...*thud*"? Someone laughing their head off',
    },
    {
      joke: "Why didn't the baby oyster share her little pearl? She was a little shellfish.",
    },
    {
      joke: "What did the traffic light say to the car? Don't look at me I'm changing.",
    },
  ];
  return (
    <div className="jokes">
      <h1>Jokes</h1>
      {exampleData.map((joke) => (
        <p className="joke">{joke.joke}</p>
      ))}
    </div>
  );
};

export default Jokes;

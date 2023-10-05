import "./Page1.scss";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Page1 = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(process.env.REACT_APP_URL_DE_LA_API, {
  //         headers: {
  //           'X-RapidAPI-Host': process.env.REACT_APP_TU_RAPIDAPI_HOST,
  //           'X-RapidAPI-Key': process.env.REACT_APP_TU_RAPIDAPI_KEY,
  //         },
  //       });

  //       setData(response.data);
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error al obtener datos:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const exampleData = [
    {
      name: "Epistory - Typing Chronicles",
      description: "Epistory immerses you in an atmospheric game where you play a girl riding a giant fox who fights an insectile corruption from an origami world. As you progress and explore this world, the story literally unfolds and the mysteries of the magic power of the words are revealed.",
      offerImageWide: "https://cdn1.epicgames.com/spt-assets/2fe270709f944fc398851454cf476f95/epistory-typing-adventure-1t9zx.jpg",
      offerImageTall: "https://cdn1.epicgames.com/spt-assets/2fe270709f944fc398851454cf476f95/epistory--typing-chronicles-19b5z.png",
      publisher: "Plug In Digital SAS",
      discountPrice: 0,
      originalPrice: 1499,
      currencyCode: "USD",
      appUrl: "https://store.epicgames.com/en-US/p/epistory-typing-chronicles-445794"
    }, {
      name: "Godlike Burger",
      description: "In Godlike Burger you run the craziest restaurant of the galaxy! Stun, poison and kill customers in many devious ways… and turn them into burger meat! And don’t worry: Alien customers will keep coming if you are smart about it, because cannibalism is just too damn tasty.",
      offerImageWide: "https://cdn1.epicgames.com/spt-assets/f42598038b9343e58d27e0a8c0b831b6/godlike-burger-offer-1trpc.jpg",
      offerImageTall: "https://cdn1.epicgames.com/spt-assets/f42598038b9343e58d27e0a8c0b831b6/download-godlike-burger-offer-8u2uh.jpg",
      publisher: "Daedalic Entertainment",
      discountPrice: 0,
      originalPrice: 1999,
      currencyCode: "USD",
      appUrl: "https://store.epicgames.com/en-US/p/godlike-burger-4150a0",
    }
  ]

  return (
    <div>
      {exampleData.map((game) => (
        <div key={game.name}>
          <p>{game.name}</p>
          <p>{game.description}</p>
          <img alt={game.name} src={game.offerImageWide} />
          <img alt={game.name} src={game.offerImageTall} />
          <p>{game.publisher}</p>
          <p>{game.discountPrice}</p>
          <p>{game.originalPrice}</p>
          <a href={game.appUrl} >Link</a>
        </div>
      ))}
    </div>
  );
};

export default Page1;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { SHeaderText, SHeroText } from './components/Text/Text.styled';
import { SAppContainer, SCardContainer } from './components/Containers/container.styled';
import { SCart } from './components/Buttons/buttons.styled';
import Card from './components/Cards/card';
import BasketCount from './components/Labels/basketCount';
import SLoading from './components/Loaders/loading.styled';

const App = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const res = await axios.get('https://606c8796c445570017a47531.mockapi.io/products');
    setProducts([...res.data]);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SAppContainer>
      <SCart><i className="fas fa-shopping-cart fa-3x" /></SCart>
      <BasketCount count={count} />
      <SHeaderText position="center">
        Build your perfect box of vegan meals
      </SHeaderText>
      <SHeroText position="center">
        Sample our selection of sumptious vegan dishes from various parts of the world.
      </SHeroText>
      {
        loading ? <SLoading>LOADING ...</SLoading>
          : (
            <SCardContainer>
              {
                products.map((product) => (
                  <Card
                    title={product.title}
                    description={product.description}
                    imageUrl={product.image_url}
                    id={product.id}
                    handle={product.handle}
                    incrementCount={setCount}
                    count={count}
                  />
                ))
              }
            </SCardContainer>
          )
      }
    </SAppContainer>
  );
};

export default App;

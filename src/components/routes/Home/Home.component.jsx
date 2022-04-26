import { useId } from 'react';
import { Outlet } from 'react-router-dom';
import CategoriesContainer from '../../categories-container/Categories-container.component';


const Home = () => {
  const categories = [
    {
      "id": useId(),
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": useId(),
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": useId(),
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": useId(),
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": useId(),
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ];

  return (
    <div>
        <Outlet />
        <CategoriesContainer categories={categories}/>
    </div>
  );
}

export default Home;

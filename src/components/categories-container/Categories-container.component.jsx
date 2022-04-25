import CategoryItem from '../category-item/Category-item.component';
import './Categories-container.styles.scss';

const CategoriesContainer = ({categories}) => {

  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id}/>
      ))}
    </div>
  );
}

export default CategoriesContainer;
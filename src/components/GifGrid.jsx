import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);
  // console.log({images, isLoading});

  return (
    <>
      <h3> {category} </h3>

      { isLoading && ( <h2>Is Loading</h2> ) }

      <div className="card-grid">
        {images.map( (image) => (
          <GifItem 
          key={image.id}
          // De esta manera se obtionen todas las propiedades del objeto "image"
          {...image}
          />
        ))
        }
      </div>
    </>
  );
};

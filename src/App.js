import { useEffect, useState } from "react";

const   API_URL = "https://fakestoreapi.com/products"

const App = () => {
    const [products, setProducts] = useState([])   

     useEffect(() => {
      fetch(API_URL)
            .then(res => res.json())
            .then(products => setProducts(products))
    },[])

    console.log(products)

  return (
    <div className="App">
      <section className='app__container'>
        <div className="app__container__content">
          <div className='cards'>
            {products.map((product, key) => {
              const {id, title, price, description, image} = product
              return <div className='cards__item' key={key}>
                <div className='card_item__container'>
                  <div className = 'card_item__container__content'>
                    <img src={image} 
                    className='card_item__container__content__image'
                    />
                    <h1 className="card_item__container__content__title">
                      {title}
                      </h1>
                      <p className="card_item__container__content__description"> 
                      {description} 
                      </p>
                      <h3 className="card_item__container__content__price">
                        {price}
                        </h3>
                  </div>
                </div>
              </div>
            })}
             </div>
        </div>
      </section>
    </div>
  );
}

export default App;

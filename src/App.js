import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoaing] = useState(false)

  const fetchProds = async () => {
    setLoaing(true)

   await fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    setLoaing(false)
  };

  useEffect(() => {
    fetchProds();
  }, []);

  const pageChnageHandler = (e) => {
    setPage(e.target.innerText);
  };

  return (
    <div className="App">

      {loading === true ? <div class="spin"></div> : <>
        <div className="productsHold">
          {products.slice(page * 4 - 4, page * 4).map((item) => {
            return (
              <div key={item.id} className="indivitualItem">
                <img src={item.category.image} alt={item.title} />
                <p> {item.title.substring(0, 20)} </p>
                <p> ${item.price} </p>
              </div>
            );
          })}
        </div>

        <div className="activePageText">
          <p> ACTIVE PAGE = {page} </p>
        </div>




        <div className="pageHold">
          <p onClick={pageChnageHandler} className="indivitualPageItem"> 1 </p>
          <p onClick={pageChnageHandler} className="indivitualPageItem"> 2 </p>
          <p onClick={pageChnageHandler} className="indivitualPageItem"> 3 </p>
          <p onClick={pageChnageHandler} className="indivitualPageItem"> 4 </p>
          <p onClick={pageChnageHandler} className="indivitualPageItem"> 5 </p>
        </div>

      </>}


    </div>
  );
}



export default App;



const CardPizza = (props) => {
  const { name, price, ingredients, img } = props;

  return (
    <div className="card" >
    <img className="card-img-top" src={img} alt={name} style={{ width: '280px', margin: '10px' }} />
    <div className="card-body">
      <h5 className="card-title"><strong>{name}</strong></h5>
      <hr></hr>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <p>Ingredientes:</p>
      </div>
      <p>🍕{ingredients.join(', ')}</p>
      <hr></hr>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <p className="card-text" style={{ margin: '0 auto' }}><strong>Precio: ${price}</strong></p>
      </div>
      <p></p>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      <button className="btn btn-light border-solid">Ver más</button>
      <button className="btn btn-dark">Añadir 🛒 </button>
      </div>
    </div>
  </div>
);
};


export default CardPizza;
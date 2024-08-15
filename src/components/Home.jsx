
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  return (
    <div>
      
      <Header />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <CardPizza name=" Pizza Napolitana" price={5950} ingredients={["mozzarella", "tomates", "jamón", "orégano"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" />
      <CardPizza name="Pizza Española" price={6950} ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]} img="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <CardPizza name="Pizza Pepperoni" price={6950} ingredients={["mozzarella", "pepperoni", "orégano"]} img="https://images.unsplash.com/photo-1630281483897-32ae5a2f7915?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
};

export default Home;

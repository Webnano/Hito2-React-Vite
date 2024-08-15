
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Loggin from './components/Loggin';
import Register from './components/Register';



const App = () => {
  return (
    <div>
      <Navbar />
      
      <Home />

      <Loggin />
      <Register />

      <Footer />
    </div>
  );
};
export default App

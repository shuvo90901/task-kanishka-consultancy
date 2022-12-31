import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import CustomerSatisfaction from './Components/CustomerSatisfaction/CustomerSatisfaction';
import Fetures from './Components/Fetures/Fetures';
import AppDesign from './Components/AppDesign/AppDesign';
import Footer from './Components/Footer/Footer';
import LastSection from './Components/LastSection/LastSection';

function App() {
  return (
    <div className="App bg-gray-300">
      <Navbar></Navbar>
      <Banner></Banner>
      <CustomerSatisfaction></CustomerSatisfaction>
      <Fetures></Fetures>
      <AppDesign></AppDesign>
      <LastSection></LastSection>
      <Footer></Footer>
    </div>
  );
}

export default App;

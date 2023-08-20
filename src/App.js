import './App.css';
import Container from './components/Layout/Container';

import DateDefiner from './components/Date/DateDefiner'
import Footer from './components/Layout/Footer';
import MainSection from './components/Lists/MainSection';

function App() {
  return (
    <div>
      <Container>
        <DateDefiner />
        <MainSection />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

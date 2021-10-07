import './App.css';
import Container from './components/Container';
import { CityProvider } from './context/CityContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <div>
      <CityProvider>
        <WeatherProvider>
          <Container></Container>
        </WeatherProvider>
      </CityProvider>
    </div>
  );
}

export default App;

import './App.css'
import CityTabs from './components/layout/CityTabs'
import Navbar from './components/layout/Navbar'
import WeatherPage from './pages/weather'

//? We could add react-router here if we needed more pages, but we don't, so keep it simple.

function App() {
  return (
    <div className="flex flex-col bg-blue-300 min-h-[100vh]">
      <Navbar />
      <CityTabs />
      <WeatherPage />
    </div>
  )
}

export default App

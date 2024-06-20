import './App.css'
import MainDash from './components/MainDash'
import SideBar from './components/Sidebar'
import RightSide from './components/RightSide'

const App = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <MainDash/>
        <RightSide />
      </div>
    </div>
  )
}

export default App

import './App.scss'
import LPage from './components/LPage'

function App() {

  return (
    <>
      <div className="App">
        {/* <Routes>
          <Route path='/' element={LPage}></Route>
        </Routes> */}
        <LPage />
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App

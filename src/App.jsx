import './App.css'
import MyHeader from './components/MyHeader'
import MyGallery from './components/MyGallery'
import MyFooter from './components/MyFooter'

function App() {
  return(
    <>
  <MyHeader />
  <MyGallery searchTerm="Saw" />
  <MyGallery searchTerm="Rocky" />
  <MyGallery searchTerm="The lord of the rings" />
  <MyFooter />
  </>
  )
}

export default App

import './App.css'
import AutoCompleteSearchBar from './components/AutoCompleteSearchBar/AutoCompleteSearchBar'
import ProgressBar from './components/ProgressBar/ProgressBar'

function App() {



  return (
    <>
   {/* <AutoCompleteSearchBar/> */}
   <ProgressBar progress={10}/>
   <ProgressBar progress={20}/>
   <ProgressBar progress={30}/>
    </>
  )
}

export default App

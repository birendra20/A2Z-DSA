import './App.css'
import AutoCompleteSearchBar from './components/AutoCompleteSearchBar/AutoCompleteSearchBar'
import ProgressBar from './components/ProgressBar/ProgressBar'
import StopWatch from './components/StopWatch/StopWatch'
import TodoApp from './components/Todo/Todo'

function App() {



  return (
    <>
   {/* <AutoCompleteSearchBar/> */}
   <ProgressBar progress={10}/>
   <ProgressBar progress={20}/>
   <ProgressBar progress={30}/>
   <StopWatch/>
   <TodoApp/>
    </>
  )
}

export default App

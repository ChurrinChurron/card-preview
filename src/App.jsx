import './App.css'
import Card from './components/Card'

function App() {

  return (
    <main className='container'>
      <Card 
        tag="Learning"
        date="21 Dec 2023"
        title="HTML & CSS foundations"
        desc="These languages are the backbone of every website, defining structure, content, and presentation."
        nameUser="Greg Hooper"/>
    </main>
  )
}

export default App

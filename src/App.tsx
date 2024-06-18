import './App.scss'
import Header from './components/layout/header/Header'
import Sidebar from './components/layout/sidebar/Sidebar'
import Books from './pages/book/Books'

function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <div className="panel-right">
          <Header />
          <Books />
        </div>
      </div>
    </>
  )
}

export default App

import Header from './components/Header'
import Login from './components/Login';
import Menu from './components/Menu'

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Login />
        <Menu />
      </main>
    </div>
  )
}

export default App;

import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;

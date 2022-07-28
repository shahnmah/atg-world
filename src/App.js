import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AllPosts from './components/AllPosts/AllPosts';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <AllPosts/>
    </div>
  );
}

export default App;

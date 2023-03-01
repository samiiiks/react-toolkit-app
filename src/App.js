import './App.scss'; 
import UserListPage from './components/pages/UserListPage';
import Searchbar from './components/search autocomplete/Searchbar';
import './style.scss'

function App() {
  return (
    <div className="App">
      <UserListPage />
      <Searchbar />
    </div>
  );
}

export default App;

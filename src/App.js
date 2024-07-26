import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import Articles from './components/news/News'
import NavBar from './components/navbar/NavBar'
import Search from './components/search/Search'

//config & utils
import { articleRoutes } from './config'
import MemoryUsage from './utils/MemoryUsage'
import './App.css'

function App() {
  MemoryUsage();
  return (
    <Router>
      <NavBar />
      <Routes>
        { articleRoutes.map((path) => (
          <Route exact path={path.path} key={uuidv4()} element={<Articles key={path.key} category={path.category}/>} />
        ))}
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </Router>  
  );
}

export default App;

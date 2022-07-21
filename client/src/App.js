import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <ToastContainer position="top-center" /> 
     <Switch>
      <Route exact path='/' component={Home} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

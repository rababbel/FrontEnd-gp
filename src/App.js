import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import ConsulterRapports from './Rapports/ConsulterRapports';
import ConsulterSA from './StructuresAccueils/ConsulterSA';
import GestionSA from './StructuresAccueils/GestionSA';
import ajouterSA from './StructuresAccueils/ajouterSA';
import SAContextProvider from './contexts/SAContext';


const App = () => {
  return (
    <BrowserRouter>
      <SAContextProvider>
        <Switch>
          <Route exact path='/ConsulterRapports' component={ConsulterRapports} />  
          <Route exact path='/ConsulterSA' component={ConsulterSA} />  
          <Route exact path='/GestionSA' component={GestionSA} />   
          <Route exact path='/AjouterSA' component={ajouterSA} />  
        </Switch>
      </SAContextProvider>
    </BrowserRouter>
  );
}

export default App;

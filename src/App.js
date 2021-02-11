import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import ConsulterRapports from './Rapports/ConsulterRapports';
import ConsulterSA from './StructuresAccueils/ConsulterSA';
import GestionSA from './StructuresAccueils/GestionSA';
import ajouterSA from './StructuresAccueils/ajouterSA';
import modifierSA from "./StructuresAccueils/modifierSA";
import GestionUtilisateur from './utilisateur/GestionUtilisateur';
import ajouterUtilisateur from './utilisateur/ajouterUtilisateur';
import modifierUtilisateur from './utilisateur/modifierUtilisateur';
import SAContextProvider from './contexts/SAContext';
import UtilisateurContextProvider from './contexts/UtilisateurContext';


const App = () => {
  return (
    <BrowserRouter>
      <UtilisateurContextProvider>
        <SAContextProvider>
          <Switch>
            <Route exact path='/ConsulterRapports' component={ConsulterRapports} />  
            <Route exact path='/ConsulterSA' component={ConsulterSA} />  
            <Route exact path='/GestionSA' component={GestionSA} />   
            <Route exact path='/AjouterSA' component={ajouterSA} />  
            <Route exact path='/ModifierSA' component={modifierSA} />
            <Route exact path='/GestionUtilisateur' component={GestionUtilisateur} />  
            <Route exact path='/AjouterUtilisateur' component={ajouterUtilisateur} />
            <Route exact path='/ModifierUtilisateur' component={modifierUtilisateur} />  
          </Switch>
        </SAContextProvider>
      </UtilisateurContextProvider>
    </BrowserRouter>
  );
}

export default App;

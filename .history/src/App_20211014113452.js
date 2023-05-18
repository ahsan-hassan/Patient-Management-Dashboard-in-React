
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Col , Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/header/header';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Dashboard from './tabs/Dashboard';
import Patients from './tabs/Patients'
import style from './styles/style.css'


function App() {
  return ( 
          <Router>       
            <div>
                <Row>
                    <Col lg={3}>
                    <Sidebar />
                    </Col>

                    <Col lg={9} style={{marginLeft:'-15px'}}>
                    <Header />
                              <Route path="/tabs/Dashboard" component={Dashboard} />
                              <Route exact path="/tab/Patients" component={Patients} />
                    </Col>
                </Row>
            </div>
            </Router> 
  );
}

export default App;

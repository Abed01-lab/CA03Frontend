import Header from './Components/Header';
import Doc from './Components/Doc';
import Security from './Components/Security';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
    return (
        <div>
        <Header />
            <Router>
                <Switch>
                    <Route path="/home">
                        <Doc />
                    </Route>
                    <Route path='/login'>
                        <Security />
                    </Route>
                    <Route path='/user'>
                        show user
                    </Route>
                    <Route path='/admin'>
                        show admin stuff
                    </Route>
                    <Route path='/external-api'>
                        show external api
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
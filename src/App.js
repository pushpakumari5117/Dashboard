import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, PieChart, Todos, Progress } from './pages/Reports';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/piechart' exact component={PieChart} />
        <Route path='/reports/todos' exact component={Todos} />
        <Route path='/reports/progress' exact component={Progress} />
        <Route path='/team' exact component={Team} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

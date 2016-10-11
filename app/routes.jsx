var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('./containers/Main.jsx');
var GetCityContainer = require('./containers/GetCityContainer.jsx');
var ForecastContainer = require('./containers/ForecastContainer.jsx');
var DetailContainer = require('./containers/DetailContainer.jsx');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={GetCityContainer} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='detail/:city' component={DetailContainer} />
    </Route>
  </Router>
);

module.exports = routes;

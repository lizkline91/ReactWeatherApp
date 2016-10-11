var React = require('react');
var Link = require('react-router').Link;
var dateHelpers = require('../utils/dateHelpers.jsx');

var styles = {
  container: {
    textAlign: 'center'
  },
  img: {
    height:'70px',
    width:'70px',
  }
}

function Detail(props) {
  var forecast = props.forecast;
  var date = new Date(forecast.dt * 1000);
  var imgSrc = 'http://openweathermap.org/img/w/'+props.forecast.weather[0].icon+'.png';

  return (
    <div style={styles.container}>
      <h3>{props.city}</h3>
      <div>{dateHelpers(date)}</div>
      <img style={styles.img} src={imgSrc} alt='Weather Icon'/>
      <p>{forecast.weather[0].description.charAt(0).toUpperCase() + forecast.weather[0].description.slice(1)}</p>
      <p>Max: {parseInt((forecast.temp.max * 1.8) - 459.67)} ºF</p>
      <p>Min: {parseInt((forecast.temp.min * 1.8) - 459.67)} ºF</p>
      <p>Humidity: {forecast.humidity} %</p>
      <hr />
      <Link to='/'>
        <button className='btn btn-primary'>Home</button>
      </Link>
    </div>
  );
}

module.exports = Detail;

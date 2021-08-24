<template>
  <div id="app" >
    <main>
      <div>
        <h1 style="text-align:center;color:white">City Name</h1>
      </div>
      <div class="search-box">
        <input type="text" name=""  class="search-bar" placeholder="search..." v-model="query" @keypress="fetchWeather">
      </div>
      <div class="weather-wrap"  v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{weather.name}}, {{weather.sys.country}}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}'c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      api_key: 'e4027a1c5587d0c86b91822f5a369da8',
      url_base: 'http://api.openweathermap.org/data/2.5/',
      query:'',
      weather:{}
    }
  },
  methods: {
    fetchWeather(e){
      if(e.key == "Enter"){
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults(results){
      this.weather = results;
    },
     dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>

<style>
*{
  border: 0;
  padding: 0;
  box-sizing: border-box; 
}
#app{
  background-image: url('./assets/QBp2C7a.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
main{
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75));
}
.search-box{
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar{
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  appearance: none;
}

.location-box .location{
  color: white;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date{
  color: white;
  font-size: 25px;
  text-align: center;
  font-style: italic;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.weather-box{
    text-align: center;
}
.weather-box .temp{
  display: inline-block;
  padding: 10px 25px;
  columns: white;
  font-size: 90px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(255, 255, 255, 0.5);
}

.weather-box .weather{
  color: white;
  font-size: 48px;
  font-weight:700;
  font-style: italic;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
</style>

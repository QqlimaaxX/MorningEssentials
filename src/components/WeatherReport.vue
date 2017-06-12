<template>
	<div class="ui container segment" :class="{'loading':isLoading}">
		<div class="ui header">
			Weather Report
		</div>
		<div class="ui stackable equal width grid">
			<div class="column"  v-for="data,index in dataset">
				<div class="ui center aligned segment">
					<h3 v-if="index==0">Today</h3>
					<h3 v-if="index==1">Tomorrow</h3>
					<h3 v-if="index==2">Day after Tomorrow</h3>
					<h3 v-if="index==3">And so on..</h3>
					<h3 v-if="index>=4">...</h3>
					<div class="ui orange massive label">{{Math.round((data.temp.day-273)*100)/100}}&deg;C</div>
					<br><br>
					<div class="ui olive label">Humidity-{{data.humidity}}%</div>
					<br><br>
					<div class="ui teal label">{{data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1)}}</div>
					<br><br>
					<div class="ui blue label">WindSpeed- {{Math.round((data.speed*3.6)*10)/10}} kmph</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default{
	data(){
		return{
			apiKey : "28019f1837a701334c0e6086709394a5",
			forecastUrl:"http://api.openweathermap.org/data/2.5/forecast/daily",
			lat:"",
			lon:"",
			isLoading:true,
			dataset:[],
			numberofdays:5
		}
	},
	methods:{
		getWeather(){
			this.isLoading = false;
			let url = this.forecastUrl + "?lat="+ this.lat +"&lon=" + this.lon + "&APPID=" + this.apiKey;
			this.$http.get(url).then(res=>{
				console.log(res);
				this.dataset = res.body.list.reverse().splice(res.body.cnt-this.numberofdays).reverse();

				this.isLoading = false;
			},res=>{
				console.log("Weather Error");
				this.isLoading = false;
			});
		}
	},
	created(){
		navigator.geolocation.getCurrentPosition(
			pos=>{
				this.lat = Math.round(pos.coords.latitude);
				this.lon = Math.round(pos.coords.longitude);
				this.getWeather();
			}
			);
	}
}

</script>

<style>

</style>
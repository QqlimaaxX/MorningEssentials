<template>
	<div class="ui container segment" :class="{'loading':isLoading}">
		<div class="ui header">
			Weather Report
		</div>
		<div class="ui stackable equal width grid">
			<div class="column"  v-for="data,index in dataset">
				<div class="ui center aligned segment">
					<img class="ui centered image" :src="data.day.condition.icon"></img>
					<h3>{{data.date.split("-").reverse().join("-")}}</h3>
					<div class="ui huge label">Avg - {{data.day.avgtemp_c}}&deg;</div>
					<br><br>
					<div class="ui orange label">{{data.day.mintemp_c}}&deg;C | {{data.day.maxtemp_c}}&deg;C</div>
					<br>
					<br>
					<div class="ui olive label">Humidity-{{data.day.avghumidity}}%</div>
					<br><br>
					<div class="ui teal label">{{data.day.condition.text}}</div>
					<br><br>
					<div class="ui blue label">WindSpeed- {{data.day.maxwind_kph}} kmph</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default{
	data(){
		return{
			apiKey : "2e61d59f2b894b3c82364026172106",
			forecastUrl:"https://api.apixu.com/v1/forecast.json",
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
			let url = this.forecastUrl + "?q="+ this.lat +"," + this.lon + "&key=" + this.apiKey + "&days="+this.numberofdays;
			this.$http.get(url).then(res=>{
				this.dataset = res.body.forecast.forecastday;
				for(var i=0;i<this.numberofdays;i++){
					this.dataset[i].day.condition.icon = "https:"+this.dataset[i].day.condition.icon;
				}
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
				this.lat = Math.round(pos.coords.latitude*1000)/1000;
				this.lon = Math.round(pos.coords.longitude*1000)/1000;
				this.getWeather();
			}
			);
	}
}

</script>

<style>

</style>
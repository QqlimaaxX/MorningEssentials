<template>
	<div class="ui container center aligned segment" @click="weatherSelected" :class='{ "loading" : isLoading }'>
		<div class="ui header"><i class="sun icon"></i>Weather Report</div>
		<div class="content">
			<div class="ui huge label">
				{{temp}}&deg;C - {{desc}}
			</div>
			<br><br>
			<div class="ui button green">More</div>
		</div>
	</div>
</template>

<script>

export default{
	data(){
		return{
			apiKey : "28019f1837a701334c0e6086709394a5",
			weatherUrl:"http://api.openweathermap.org/data/2.5/weather",
			lat:"",
			lon:"",
			temp:"",
			desc:"",
			isLoading : true
		}
	},
	methods:{
		getWeather(){
			this.isLoading = false;
			let url = this.weatherUrl + "?lat="+ this.lat +"&lon=" + this.lon + "&APPID=" + this.apiKey;
			this.$http.get(url).then(res=>{
				this.temp = Math.round((res.body.main.temp-273)*100)/100;
				this.desc = res.body.weather[0].description[0].toUpperCase() + res.body.weather[0].description.slice(1);
				this.isLoading = false;
			},res=>{
				console.log("Weather Error");
				this.isLoading = false;
			});
		},
		weatherSelected(){
			this.$emit('weatherSelected');
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

<style scoped>
	.ui.segment{
		cursor: pointer;
		transition: all 0.25s;
	}
	.ui.segment:hover{
		background-color: #EEE;
		transform: scale(1.025);
		box-shadow: #000 0 0 1px 1px;
	}
</style>
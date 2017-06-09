<template>
	
	<div class="column">
		<h1>News</h1>
		<input type="checkbox" v-model="isChecked" value="true" @change="getSources"> Show News only related to {{countryName}}
		</br>
		<br>
		<i class="notched circle loading icon" v-if="isLoadingSources"></i>
		<select v-model="selectedSource" :disabled="isLoadingSources" class="ui dropdown">
			<option value="default" v-if="isLoadingSources">Loading</option>
			<option value="default" v-else>Select News Source</option>
			<option v-for="source,index in sources" :value="index">{{source.name}}</option>
		</select>
		<br>
		<br>
		<app-news-article :source="generatedId"></app-news-article>
	</div>

</template>

<script>

import NewsArticle from "./NewsArticle.vue";

export default{
	data:function(){
		return{
			locUrl:"https://ipapi.co/json/",
			newsUrl:"https://newsapi.org/v1/sources",
			location:"",
			countryName:"",
			isChecked:false,
			isLoadingSources:false,
			sources:[],
			selectedSource:"default"
		}
	},
	components:{
		AppNewsArticle:NewsArticle
	},
	computed:{
		generatedId(){
			if(this.selectedSource!="default"){
				return this.sources[this.selectedSource].id;
			}else return "";
		}
	},
	methods:{
		initialise(){
			this.isLoadingSources = true;
			this.getLoc();
		},
		getLoc(){   //gets country code of the user to get country based news
			console.log("getting country");
			this.$http.get(this.locUrl).then(resp=>{
				this.location = resp.body.country;
				this.countryName = resp.body.country_name;
				console.log(this.location);
				console.log(this.countryName);
				this.getSources();   //we use new location to fetch sources
			});
		},
		getSources(){
			this.selectedSource = "default";
			this.isLoadingSources = true;
			let url = this.newsUrl;
			if(this.isChecked){
				url = url + "?country=" + this.location;
			}
			this.$http.get(url).then(resp=>{
				this.sources = resp.body.sources;
				this.isLoadingSources = false;
			});
		}
	},
	created(){
			this.initialise();
		}

}
</script>

<style>
	
</style>
<template>
	
	<div class="column">
		<h1>News</h1>
		<select v-model="selectedSource">
			<!-- <option value="default">Select News Source</option> -->
			<option v-for="source,index in sources" :value="index">{{source.name}}</option>
		</select>
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
			this.getLoc();
		},
		getLoc(){   //gets country code of the user to get country based news
			console.log("getting country");
			this.$http.get(this.locUrl).then(resp=>{
				this.location = resp.body.country;
				this.getSources(this.location);   //we use new location to fetch sources
			});
		},
		getSources(location){
			let url = this.newsUrl + "?country=" + location;
			this.$http.get(url).then(resp=>{
				this.sources = resp.body.sources;
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
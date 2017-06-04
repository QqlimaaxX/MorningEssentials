<template>
	
	<div class="column">
		<h1>Article</h1>
		<div class="ui container segments">
			<div class="ui green segment" v-for="article in articles">
				<div class="ui header"><a :href="article.url">{{article.title}}</a></div>
				<img class="ui small rounded image" :src="article.urlToImage" alt="">
				<p>{{article.description}}</p>
			</div>
		</div>
	</div>

</template>

<script>
export default{
	props:['source'],
	data(){
		return{
			articles:Object,
			apiKey:"b9c65a8b75424a56afe6f912b813a06a",
			url:"https://newsapi.org/v1/articles?sortBy=latest"
		}
	},
	methods:{
		updateArticle(){
			this.$http.get(this.url+"&source="+this.source+"&apiKey="+this.apiKey).then(resp=>{
				this.articles = resp.body.articles;
				console.log(resp.body);
			});
		}
	},
	watch:{
		source(val){
			this.updateArticle(val);
		}
	}
}
</script>

<style>
	
</style>
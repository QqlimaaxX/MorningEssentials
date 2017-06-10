<template>
	<div class="ui conatiner segment" :class="{'loading' : isLoading}">
		<div class="ui header">
			<i class="book icon"></i>{{title}}
		</div>
		<div class="content">
			{{quote}} - {{author}}
		</div>
	</div>
</template>

<script>

export default{
	data(){
		return{
			apiUrl:"http://quotes.rest/qod.json",
			author:"",
			quote:"",
			title:"",
			isLoading:true,
		}
	},
	created(){
		this.isLoading = true;
		this.$http.get(this.apiUrl).then(
			resp=>{
				this.author = resp.body.contents.quotes[0].author;
				this.quote = resp.body.contents.quotes[0].quote;
				this.title = resp.body.contents.quotes[0].title;
				this.isLoading = false;
			},
			resp=>{
				this.isLoading = false;
				console.log("QuoteError");
		});
	}
}

</script>
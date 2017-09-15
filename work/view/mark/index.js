Vue.component('mark-box',{
//	props:["datalis"],
	data:function(){
       return{
       	  datalis:[],
       	  col_lis:"",
       	  index:"",
       	  show:true
       }
	},
	template:
	`<div v-show="show">
	<div class="mark"></div>
	    <div class="lis">
		<p class="title">转账记录</p>
		<ul>
			<li @click="change(i)" v-for="(items,i) in datalis" :class="{color:index==i}">
			<span>{{items.names}}</span><br><span>{{items.num}}</span>
			</li>
		</ul>

		<p class="pp">
		 <button class="no" @click="none">取消</button>
		 <button class="yes" @click="none">关注</button>
		 </p> 	
	</div>
	</div>
	`,
	methods:{
        change:function(i){
               this.index=i;
              // console.log(this.index)       	
        },
        none:function(){
        	//alert('gn')
            this.show=false;
        }
	},
	 beforeCreate:function(){
                
                this.$http.get('data/data.json')
                    .then((data)=>{
                     //console.log(data.data.data)
                        this.datalis = [...data.data.data]
                     console.log(datalis)
                  })
                  .catch(function(err){
                     console.log(err)
               })
           }

})
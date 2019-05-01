new Vue({
   el:'#app',
   data:{
	   i_class:"fa fa-square-o",
	   check:false,
	   input_remeber:"",
   },
   methods:{				   
	   tologin(){			  
		  if(this.$refs.username.value!="" && this.$refs.password.value!=""){
			  this.$refs.loginform.submit();
		  }		   
	   },
	   remeber(){
		  if(!this.check){
			  this.i_class="fa fa-check-square-o";
			  this.input_remeber="<input type='hidden' name='remeber' value='remeber'/>";
			  this.check = !this.check;
		  }else{
			  this.i_class="fa fa-square-o";
			  this.input_remeber="";
			  this.check = !this.check;
		  }
	   }
   }
});
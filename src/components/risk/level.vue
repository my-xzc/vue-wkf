<template>
<div class="container-fluid ywbl_fxcp_fxlevel" id="ywbl_fxcp_fxlevel">
	<div id="render" class="fxcpPage page-content">
		<header class="header fxlevel-header">
			<span class="logo fxlevel-logo"></span>
			<p class="level">客户风险承受能力等级： <span id="rating_lvl_name">{{level}}</span></p>
			<p style="margin:10px 0;">风险测评时间 : <span class='rating_date'>{{date}}</span></p>
		</header>
		<div class="main">
			<div class="investment-horizon">
				<span class="text-left">投资期限:</span>
				<span class="text-right duration">{{duration}}</span>
			</div>
			<div class="investment-kind">
				<p>投资品种:</p>
				<p ><span class="types"></span>{{type}}</p>
			</div>
			<div class="investment-kind expect">
                <p>期望收益：</p>
                    <div class="income">{{income}}</div>
            	</div>
		</div>
	</div>
	<router-link to='/business' class=" btn-danger btn-block fxLevelBtn">确&nbsp;&nbsp;定</router-link>
</div>
</template>
<script>
import {Radio,MessageBox} from 'mint-ui';
	export default {
		data() {
				return {
					level: '',
					type: '',
					date:'',
					income: '',
					duration:'',
					info:''
				}
			},
			methods:{
				getInfo () {
						var vm=this;
						// vm.info=JSON.parse(localStorage.getItem("user"));
						// JSON.parse(localStorage.getItem("info"))
						vm.info=this.getCookie('user')
						if(vm.info){
							console.log(vm.info);
						}else{
							MessageBox('提示','未获取到相关信息！')
						}
							
				},
				getCookie(name) 
						{ 
							var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
						
							if(arr=document.cookie.match(reg))
						
								return unescape(arr[2]); 
							else 
								return null; 
						} 
			},
			mounted() {
				this.getInfo();	
		}
	}
</script>
<style >
.investment-kind p{
	font-size: 1.3rem;
}
.fxlevel-header{
	min-height: 17rem!important;
}
#ywbl_fxcp_fxlevel .main{
	min-height: calc(100vh - 26.5rem);
}
.fxlevel-logo{
		background:url(../../assets/img/fxcp-logo.png) no-repeat 0 0;
		background-size: 100% 100%;
		border: none;
}
.level{
	font-size:1.5rem;
	font-weight:700;
}
.investment-horizon{
	height: 5rem;
	line-height: 5rem;
	padding:0 1rem;
	margin-bottom:1rem;
	background:#fff;
}
.text-left{
	float: left;
}
.text-right{
	float:right;
}
.investment-kind{
	background:#fff;
	padding: 1rem;
}
.investment-kind p:first-child{
	/*font-size:1.5rem;*/
	margin-bottom:1rem;
}
.investment-kind p:last-child{
	text-indent:2em;
}
.investment-kind p{
	font-size: 1.2rem;
}
.expect{
	margin-top: .5rem;
}
</style>

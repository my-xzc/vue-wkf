<template>
<div class="container-fluid" id="ywbl_index">
	<div v-show="!showAgree" class="ywblPage page-content">
		<header class="header ywbl-header">
			<span class="logo ywbl-logo"></span>
			<div id="loginInfo">
				<p>{{account.name}}</p>
				<p> 客户代码&nbsp;:&nbsp;{{code}}</p>
			</div>
		</header>
		<div class="mainBody">
			<router-link to="">
			<div @click="showAgreement" class="item"><b class="icon zlxg-icon"></b>资料修改 <b class="arrow"></b></div>
			</router-link>
			<router-link to="modifypwd">
				<div class="item"><b class="icon mmxg-icon"></b>密码修改 <b class="arrow"></b></div>
			</router-link>
			<router-link to="risk">
				<div class="item"><b class="icon fxcp-icon"></b>风险测评 <b class="arrow"></b></div>
			</router-link>

			<router-link to="survey">
				<div class="item myddc"><b class="icon myddc-icon"></b>满意度调查 <b class="arrow"></b></div>
			</router-link>
			<router-link to="questionnaire">
				<div class="item"><b class="icon clhf-icon"></b>存量回访 <b class="arrow"></b></div>
			</router-link>
			
			<a href="http://info.hx168.com.cn/ljhx/yybwd/index.shtml">
				<div class="item yybcx"><b class="icon yybcx-icon"></b>营业部网点查询 <b class="arrow"></b></div>
			</a>
		</div>
	</div>
	<v-loading v-show="showLoading"></v-loading>
	<v-agreement v-show="showAgree"></v-agreement>
</div>
</template>
<script>
	import VLoading from '../common/loading'
	import VAgreement from './agreement'

	export default {
		data() {
			return {
				showLoading: false,
				showAgree: false,
				code: '',
				account: JSON.parse(this.$services.getCookie('user'))
			}
		},
		components: {
			VLoading,
			VAgreement
		},
		methods: {
			showAgreement() {
				this.showAgree = true
			}
		},
		mounted() {
			var s = this.account.khzh;
			this.code = s.substr(0,4)+'*****'+s.substr(s.length-3);
		}
	}
</script>
<style media="screen">
.header{
	min-height: 17rem;
	text-align: center;
	font-size:1.4rem;
	background:#D13B36;
	color: #fff;
	overflow: auto;
}
.ywbl-header{
	background:url(../../assets/img/ywbl-head.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.ywbl-logo{
	background:url(../../assets/img/ywbl-logo.png) no-repeat 0 0;
	background-size: 100% 100%;

}
#ywbl_index .item{
	position: relative;
	height: 5rem;
	line-height: 5rem;
	padding-left: 0;
}
.icon{
	display: inline-block;
	position: relative;
	top: .6rem;
	left: 0;
	margin-left: 1rem;
	margin-right: .8rem;
	width: 2rem;
	height: 2rem;

}
.zlxg-icon{
	background:url(../../assets/img/write.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.mmxg-icon{
	background:url(../../assets/img/lock.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.fxcp-icon{
	background:url(../../assets/img/secret.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.myddc,.yybcx{
	margin-top:1rem;
}
.myddc-icon{
	background:url(../../assets/img/myddc-icon.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.clhf-icon{
	background:url(../../assets/img/clhf-icon.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.yybcx-icon{
	background:url(../../assets/img/yywdcx-icon.png) no-repeat 0 0;
	background-size: 100% 100%;
}
</style>

<template>
<div class="container-fluid" id="kf_accountManager">
	<div class="fundAccount">
		<router-link to="/release"><a style="color:#000000;">资金账号：<span class="pull-right gt"></span><span class="pull-right">{{account}}</span></a></router-link>
	</div>
	<div class="row">
		<div class="col-xs-12" v-for="item in items" :key="item.id">
			<div v-show="item.isshow" class="manager-list clearfix">
				<div>
					<h4>{{item.pmname}}</h4>
					<p>{{item.pmdesc}}</p>
				</div>
				<!-- <div> -->
					<a v-on:click="subscribe(item)" class="sub-btn pull-right subscibe" :class="item.subscibed?'subscibed':''" href="javascript:">{{item.action}}</a>
				<!-- </div> -->
			</div>
		</div>
	</div>	
	<v-loading v-if="showLoading"></v-loading>
</div>
</template>
<script>
	// import VToast from '../common/toast'
	import VLoading from '../common/loading'
	import { MessageBox } from 'mint-ui';

	export default {
		data() {
				return {
					showToast: false,
					showLoading: false,
					account: '',
					lock: false,
					items: [],
					message:''
				}
			},
			components: {
				VLoading
			},
			methods: {
				getAccount() {
					var a = this.$services.getCookie('user');
					if (a) {
						var a = JSON.parse(a).khzh,
							b = a.substr(0, 4),
							c = a.substr(a.length - 3),
							d = '*****';
						this.account = b + d + c;
						this.getProducts();
					} else {
						this.$router.push('login')
					}
				},
				getProducts() {
					var vm = this;
					vm.$services.getProducts(function(res) {
						var items = res.results;
						for (var i in items) {
							var item = items[i];
							if (item.isshow) {
								item.subscibed = item.status == 2;
								item.action = item.subscibed ? '已订阅' : '订阅';
								vm.items.push(item);
							}
						}
					})
				},
				subscribe(item) {
					var vm = this,
						msg = ['已订阅成功！', '已取消订阅！'],
						callback = function(res) {
							item.subscibed = !item.subscibed;
							item.action = item.subscibed ? '已订阅' : '订阅';
							MessageBox.alert(item.subscibed ? msg[0] : msg[1]).then(action => {
									vm.showToast = false
									vm.lock = false;
							});
							vm.showLoading = false;
						},
						errCallback = function(res) {
							vm.showLoading = false;
						};
					if(vm.lock) return false;
					vm.lock = true;
					vm.showLoading = true;
					var params = {
						pmid: item.pmid
					}
					if (item.subscibed) {
						vm.$services.unSubscribeProd(params, callback, errCallback)
					} else {
						vm.$services.subscribeProd(params, callback, errCallback)
					}
				}
			},
			created() {
				this.getAccount();
			}
	}
</script>
<style>
.mint-popup-top,
.mint-popup {
        padding: 1rem;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 1.5rem;
        background-color: #333;
        color: #fff;
        opacity: .8;
        z-index: 10000001;
        text-align: center;
    }
.mint-popup-top {

     -webkit-transform: translate3d(0, 0, 0); 
     transform: translate3d(0, 0, 0); 
}
.relieve{
    background-image: url(../../assets/img/relieve.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.gt{
    display:inline-block;
    margin-left: 3rem;
}
.fundAccount{
    margin-top: 1.4rem;
    margin-bottom:3.1rem;
    padding-right:1.4rem;
    padding-left:1.4rem;
    height:4.1rem;
    line-height:4.1rem;
    background-color: #ffffff;
}
.fundAccount a{
    display: block;
}
.manager-list{
    padding:2rem 1.4rem;
    background-color: #ffffff;
    margin-bottom:2px;

}
.manager-list > div:first-child {
    float: left;

}
.manager-list > div:last-child {
    float: right;

}
.manager-list h4{
    font-weight:900;
	font-size:1.3rem;
	margin:10px 0;
}
.manager-list p{
    font-size: 1.1rem;
    color:#414141;
}
.subscibe {
		background-color: #C7322F;
		color: #ffffff;
		width: 58px;
		height: 32px;
		position: absolute;
		top: 30%;
		right: 5%;
		margin-top: -15px;
		border-radius: 1.5rem;
		/*padding: 0.5rem 0.12px;*/
}
.subscibe:link,
.subscibe:visited,
.subscibe:hover,
.subscibe:active {
    color: #ffffff;
}
.subscibed {
    background-color: #ccc!important;
}

#kf_accountManager .sub-btn {
	margin: .8rem auto;
    width: 56px!important;
    display: block;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 14px !important;
    /* padding: 6px 0; */
    color: #fff;
    background-color: #D13B36;
    text-align: center;
}

.gt {
		display: inline-block;
		margin-left: 3rem;
    margin-top: 15px;
    line-height: 100%;
    width: 8px;
    height: 16px;
    background-image: url(../../assets/img/arr.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>

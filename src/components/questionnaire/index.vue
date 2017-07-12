<template>
<div class="questionnaire">
	<div class="questionnaire-content">
		<h3>尊敬的用户：</h3>
		<p>您好！感谢您参与存量客户回访调查，请根据实际情况填写下列问题：</p>
		<div v-for="item in questions" :key="item.id"  class="m-cell" >
                            <h2>{{item.question}}</h2>
                            <label  v-for=" lt in item.options" :key="lt.id"  class="cell-item">
                              <span class="cell-left">{{lt}}</span>
                                    <label class="cell-right">
                                         <input type="radio" :name="item.index" :value="lt" @change="checkSelect"/>
                                              <i class="cell-radio-icon"></i>
                                    </label>
                            </label>
                           
                        </div>
		<div class="m-cell">
                  	<div class="cell-item">
                      	<div class="cell-right">
                          <textarea id="reason" class="cell-textarea" disabled="disabled" placeholder="请填写原因！" name="a26"></textarea>
                       	</div>
                  	</div>
        </div>
		<div class="questionnaire-supplement">
			<p v-if=" showP1 || showP2" class="queryP">风险提示：</p>
			<p v-show="showP1" class="queryP" >分级基金产品特点区别于传统上市基金和股票，B份额带有杠杆属性，特别是临近向下折算时的杠杆较高，具有一定风险，请您详细阅读基金公司发布的文件、公告、在全面了解分级基金产品知识及风险收益特征的基础上谨慎投资。</p>
			<p v-show="showP2" class="queryP" >创业板企业经营波动很大，退市制度要求严格，投资风险相对较高，请您谨慎投资。为确保重要信息能够及时通知到您，请在【我的账户】-【业务办理】-【资料修改】菜单中填写第二联系人资料。</p>
			<p>现我公司提供更多种基金以及金融产品供您选择，您可以根据产品特点、投资方向、风险收益特征等，结合您自身的风险等级和投资偏好来选择相匹配的产品。同时请您通过正规渠道认购产品，防范非法集资，保证自身权益。</p>
			<p>您可以通过以下途径查询产品批准信息：</p>
			<p>1、中国证券投资基金协会网站<a href="http://www.amac.org.cn">http://www.amac.org.cn</a></p>
			<p>四川省证券期货业协会-阳光执业机构信息公示平台<a href="http://www.sccn.net.cn/front/wz/xxgs_xsjrcp_list.htm">http://www.sccn.net.cn/front/wz/xxgs_xsjrcp_list.htm</a></p>
			<p>您可登陆华西官网www.hx168.com.cn基金专栏或金融产品专栏，查询产品。</p>
			<p>非常感谢您参与本次回访调查，我司已开通官方微信号“华西证券微服务”，可为您提供7x24小时业务解答服务，扫描下方二维码即可轻松关注，祝您投资顺利。</p>
			<div class="barcode">
				<img src="../../assets/img/guanzhu.png" height="113" width="85">
			</div>
		</div>
	</div>
	<div class="submit-quest">
		<input class="btn btn-lg" @click="submitQuestions" type="button" value="提    交" name="">
	</div>
	<v-loading v-show="showLoading"></v-loading>
    <v-toast v-show="showToast"></v-toast>
	<v-preloading v-show="showPreloading"></v-preloading>
</div>
</template>
<script>
	import {Radio,MessageBox} from 'mint-ui';
	import VLoading from '../common/loading'
    import VToast from '../common/toast'
	import VPreloading from '../common/preloading'

	export default {
		data() {
				return {
					showLoading: false,
					showPreloading: false,
					showToast: false,
					reason: '',
					questions: [],
					
					showP1:false,
					showP2:false
				}
			},
			components: {
				VLoading,
				VToast,
				Radio,
				VPreloading
			},
			mounted() {
				this.questions = [{
					index: 1,
					question: '1、 为了保障账户安全，请问您在我公司开立的证券账户是由您本人操作的吗？',
					options: ['A、是本人操作', 'B、不是本人操作，目前由朋友代为操作', 'C、不是本人操作，目前由华西证券工作人员代为操作'],
					reason: false,
					answer: ''
				}, {
					index: 2,
					question: '2、为了能够更好地为您服务，请问您对目前我们营业部的服务感到满意吗？',
					options: ['A、满意', 'B、一般', 'C、不满意（请填写原因）'],
					reason: true,
					answer: ''
				}],
				this.quertQuestions();
				this.query()

			},
			methods: {
				toast(msg) {
					var vm = this;
					vm.showToast = true;
					if(vm.lock) return;
					vm.lock = true;
					vm.$children[1].msg = msg
					setTimeout(function(){
						vm.showToast = false
						vm.lock = false
					},5000)
				},
				query(){
					var vm = this,
					hasGemauth=0,
					hasSplitStock=0;
					var queryGemauth = function(){
					var callback=function(res){
						if(res.error=='true'){
							MessageBox("提示",res.message)
						}else{
							if(res.message !='您暂未开通创业板!'){
							   hasGemauth = 1 ;
							   vm.showP1 = true;
								}
						}
					}
					vm.$services.gemauth(callback);
				};
				var queryStrfunds = function(){
						var callback=function(res){
						if(res.error=='true'){
							MessageBox("提示",res.message)
						}else{
						return hasSplitStock =	Number(res.results[0].hasSplitStock);
							vm.showP1 = true;
						}
					}
					vm.$services.strfunds(callback);
				}
					queryGemauth();
					queryStrfunds();
				},
				quertQuestions() {
					var vm = this;
					var params = {
						'operation': 'C',
						'funcNo': 2000128,
						'khzzh': JSON.parse(vm.$services.getCookie('user')).khzh,
					};
					this.$services.questionnaire(params, function(res) {
						vm.status = parseInt(res.results[0].khstatus);
						vm.status && MessageBox("提示","您已经做过问卷回访！");
					})
				},
				checkSelect(value){
							var vm=this;	
							if(value.srcElement.value== "C、不满意（请填写原因）"){
									$(".cell-textarea").removeAttr('disabled');
										document.getElementById("reason").onchange = function() {
											vm.reason = this.value;
										}
							}else{
										$(".cell-textarea").attr('disabled','disabled');
										$('#reason').val('')
								}

				},
				submitQuestions() {
					var vm = this,
						result = '',
						els = document.querySelectorAll('input:checked');
					if(els.length<2){
						MessageBox("提示","未完成所有答题！");
						return false;
					}
					result += els[0].value + '|' + els[1].value + this.reason;
					var params = {
						'operation': 'T',
						'funcNo': 2000128,
						'khzzh': JSON.parse(vm.$services.getCookie('user')).khzh,
						'answerlist': result
					};

					vm.showLoading = true;
					this.$services.questionnaire(params, function(res) {
						vm.showLoading = false;
						var msg = parseInt(res.error_no)?res.error_info:res.message;
						MessageBox({
							title: '提示',
							message: msg,
							confirmButtonText: '我知道了'
						}).then(actions=>{
							// WeixinJSBridge.invoke('closeWindow', {}, function(res) {
							// });
							 vm.$router.push({ path: 'business' });
						});
					})
				}
			},
	}
</script>
<style>
	.questionnaire {
		background-color: #fafafa;
		width: 100%;
		min-height: 100%;
		padding: 1rem;
		box-sizing: border-box;
		display: block;
		font-size: 1.2rem;
	}
	.questionnaire-content{
		min-height:calc(100vh - 120px);
	}
	.questionnaire .questionnaire-supplement{
		margin-top: 1rem;
	}
	.questionnaire p{
		line-height: 1.5;
		text-indent: 2em;
		font-size: 1.2rem;
	}
	.queryP{
		color:#C52727;
		text-indent: 2em;
	}
	.questionnaire .mint-cell-wrapper {
		font-size: 1rem;
	}
	.questionnaire .mint-radio-label {
		color: #333;
	}
	.questionnaire input.reason {
	    display: inline-block;
	    width: 15rem;
	    color: #000;
	    font-weight: 700;
	    border: none;
	    margin-top: 5px;
	    margin-left: 3rem;
	    border-bottom: 1px solid #333;
	    border-radius: 0;
	}
	.questionnaire .submit-quest {
		margin: 24px auto;
		text-align: center;
		height: 48px;
		width: 100%;
		box-sizing: border-box;
	}
	.questionnaire .submit-quest input {
		color: #fff;
		height: 48px;
		width: 90%;
		border-radius: 15px;
		background-color: #c52727;
		font-size: 1.6rem!important;
	}
	.mint-radio-input:checked + .mint-radio-core {
	    background-color: #c52727;
    	border-color: #c52727;
	}
	.mint-radio-input:checked{
		color:#c52727;
	}
	.mint-radio-core::after{
		width:6px;
		height:6px;
	}
	.mint-msgbox-btn {
    	color: #c52727;
	}
	.mint-radiolist-title{
		font-size: 1.2rem;
	}
	.questionnaire .barcode{
		text-align: center;
		margin-top: 1rem;
	}
	.barcode img{
		display:inline;
	}
	.questionnaire .mint-radio-label{
		display: inline-block;
	    width: 88%;
	    color: #333;
	    position: relative;
	    top: 0;
	    left: 0;
	    padding: .5rem 0 .5rem;
	    font-size: 1.2rem;
	    line-height: 1.5;
	}
</style>

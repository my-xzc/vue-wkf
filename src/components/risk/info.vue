<template>
<div class="risk-quest">
<div >
	<div class="ywbl_fxcp_fxcp" id="ywbl_fxcp_fxcp">
		<div id="render" class="fxcpPage page-content">
				<div  class="article " v-for="item in riskQuestions" :key="item.id"  v-show="showArticle == item.progress">
					<header class="progress">当前进度为{{item.progress}}/{{riskQuestions.length}}</header>
						<section class="fxcpBox animated fadeIn">
						<div id="troubleBox">
							<div class="trouble_lists itemOne">
								<div class="fxcpTitle">{{item.progress}}.{{item.question}}</div>
								<ul id="trouble">
									<li v-for="key in item.answers" :key="key.id">
										<input class="radio" v-if="item.opt == '0'" type="radio" :name="item.progress" :value="key.value">
										<input class="radio" v-if="item.opt == '1'" type="checkbox" :name="item.progress" :value="key.value">
										<div class="choose-text">
											<span class="fxcpChecked">{{key.cell}}</span>
											{{key.label}}
										</div>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
		</div>
	</div>
</div>
<div class="btnGroup" v-show="!showLoading">
	<button @click="back" class="btn btn-danger btn-block">上一题</button>
	<button @click="next" v-show="!showSubmit"  type="button" class="btn btn-danger btn-block">下一题</button>
	<button @click="commit" v-show="showSubmit" type="button" class="btn btn-danger btn-block">提&nbsp;&nbsp;交</button>
</div>
<v-toast v-show="showToast"></v-toast>
<v-loading v-show="showLoading"></v-loading>
</div>
</template>
<script>
	import {
		Radio,
		MessageBox
	} from 'mint-ui';
	import VToast from '../common/toast'
	import VLoading from '../common/loading'

	export default {
		data() {
				return {
					showLoading: false,
					showToast: false,
					riskQuestions: [],
					length:null,
					show:1,
					showArticle:1,
					showSubmit:false
				}
			},
			components: {
				VLoading,
				VToast
			},
			methods: {
				toast(msg, cb) {
					var vm = this;
					vm.showToast = true
					vm.$children[0].msg = msg
					setTimeout(function() {
						vm.showToast = false
						cb&&cb()
					}, 1000)
				},
				back(){
					var vm=this;
					
					if(vm.showArticle>1){
						vm.showArticle-=1;
						vm.showSubmit=false;
					}
				},
				next(){
					var vm=this;
					var len=$("div.trouble_lists").length;
					console.info( vm.showArticle,len)
					if(vm.showArticle < len){
						vm.showArticle+=1;
					}
					if(vm.showArticle == len){
						vm.showSubmit=true;
					}else{
						vm.showSubmit=false;
					}
				},
				commit() {
					var vm=this;
					var choices=[],
						subrisksnArray=[],
						len=$("div.trouble_lists").length;

					for (let i= 0; i < len;i++){ 
						if (!$("div.trouble_lists").eq(i).find("input").is(':checked')){ 
								MessageBox('提示','请先答完题哦,亲！')
								return false;
						}
					}
					for(let i=0;i<=len;i++){
                                choices[i] = [];
								subrisksnArray.push(i); 
                   }
					$("input:checked").each(function(){
                        var $this = $(this);
                        var questionNo = /\d+/.exec($this.attr('name'));
                        choices[questionNo].push($(this).val());
                    });	
                    var keyvalue = [];
                    for(let i = 1; i <= len;i ++){
                        keyvalue.push(choices[i].join(','));
                    }
					var param = {};
                    param.keyValue = keyvalue.join('|');
                    param.subriskSn = subrisksnArray.join('|').replace('0|',' ');
					var success = function (res) {
						if(res.error == true){
							MessageBox('提示',res.message);
						}else{
							vm.$services.setCookie("info", JSON.stringify(res));
							vm.$router.push({ path: 'level' });
						}
					}
					var error = function(res){
							MessageBox('提示',res.message)
					}
					vm.$services.submitAnswer(param,success,error);
				}
			},
			mounted() {
					var formatQuestions = function(data) {
					var arr = [],
						types = [],
						durations = [],
						count = data[data.length - 1].survey_col;
					for (var a = 1; a <= count; a++) {
						var newQuest = {
							question: '',
							answers: []
						};
						for (var i = 0; i < data.length; i++) {
							var quest = data[i];
							if(quest.survey_col=='3' && !types.Contains(quest.survey_cell_text)) types.push(quest.survey_cell_text);
							if(quest.survey_col=='2' && !durations.Contains(quest.survey_cell_text)) durations.push(quest.survey_cell_text);
							if (quest.survey_col == a) {
								newQuest.question = quest.survey_col_text;
								newQuest.progress = quest.survey_col;
								newQuest.opt = quest.survey_col_opt;
								newQuest.answers.push({
									label: quest.survey_cell_text,
									value:quest.survey_cell,
									cell: String.fromCharCode(Number(quest.survey_cell)+64)
								});
							}
						}
						vm.types = types;
						vm.durations = durations;
						arr.push(newQuest);
						vm.length= arr.length;
					}
					return arr
				}
				var vm = this;
				vm.showLoading = true;
				vm.$services.getRiskQuestions(function(res) {
					vm.showLoading = false;
					vm.riskQuestions = formatQuestions(res.results)
				})
			}
	}
</script>

<style>
.ywbl_fxcp_fxcp{
	font-size: 1.2rem;
	min-height:calc(100vh - 17rem);

}
/*@media screen and(max-width:320px ){.ywbl_fxcp_fxcp{min-height:32.5rem;}}
@media screen and (min-width: 321px) and (max-width: 374px){.ywbl_fxcp_fxcp{min-height:36.5rem;}}
@media screen and (min-width:375px) and (max-width:384px){.ywbl_fxcp_fxcp{min-height:38.6rem;}}
@media screen and (min-width:385px) and (max-width:410px){.ywbl_fxcp_fxcp{min-height:38.8rem;}}
@media screen and (min-width:411px) and (max-width:639px){.ywbl_fxcp_fxcp{min-height:43.8rem;}}*/
.article{
	/*margin-top:1rem;*/
}
.progress {
    font-size: 1.4rem;
    height: 47px;
    text-align: center;
    line-height: 47px;
    background: #fff;
    margin-bottom: 1rem;
}
.fxcpBox {
    position: relative;
    width: 86%;
    margin: auto;
    /* min-height: 28rem;*/
    /* height: auto; */
    /* overflow: auto; */
    background: #fff;
    padding: 1rem;
}
#troubleBox {
    /* position: absolute; */
    background: #fff;
    /* z-index: 1; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.trouble_lists {
    padding: 0 1rem;
    margin: .5rem 0 2rem;
}
.fxcpTitle {
    margin-bottom: 1.5rem;
}
.choose-text {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    padding-left: 2.5rem;
}
.trouble_lists ul li span {
    margin-right: .6rem;
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    background: #fff;
    color: #000;
    border-radius: 1.6rem;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -.8rem;
}
.trouble_lists li {
    position: relative;
    /*min-height: 4rem;*/
    height: auto;
    padding:1rem 1rem;
    /* line-height: 4rem; */
    /*padding: 1rem;*/
    border: 1px solid #F2F2F2;
    background: #fff;
    border-bottom: 0 solid transparent;
}
.trouble_lists ul li input:checked + div.choose-text  {
		color:#C7322F;
}
.trouble_lists ul li input:checked + div.choose-text span{
	display: inline-block;
	width:1.6rem;
	height: 1.6rem;
	line-height: 1.6rem;
	text-align: center;
	background: #C7322F;
	color:#fff;
	border-radius: 1.6rem;
}
.trouble_lists ul li:last-child{
	border-bottom:1px solid #F2F2F2;

}
.mint-radio-input:checked + .mint-radio-core{
	background-color: #C73232;
	border-color: #C73232;
}
.mint-radiolist-title{
	font-size: 1.4rem;
	color: #000;
}
	.risk-quest .mint-radio-label {
		display: inline-block;
		width: 88%;
		color: #333;
		position: relative;
		top: 0;
		left: 0;
		padding:.5rem 0 .5rem;
		font-size: 1.2rem;
		line-height: 1.5;
	}
	.mint-cell{
		font-size: 1rem;
		height: auto!important;
	}
	.mint-cell-wrapper{
		min-height: 5rem;
		height: auto;
	}
	.mint-radio-core{
		width:18px;
		height: 18px;
	}
	.risk-quest button {
		font-size:1.6rem;
		background:#C7322F;
		height: 4rem;
		width: 90%;
		margin:2rem 5% 24px;
		border: none;
		color: #fff;
		border-radius: 15px;
	}
	.risk-quest label{
		font-weight: normal;
	}
	.trouble_lists ul li input{
		    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 999;
	}
</style>

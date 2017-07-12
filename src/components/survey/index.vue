<template>
        <div id="myddc">
                <img src="../../assets/img/banner_2017.jpg"/>
                <p>尊敬的投资者：</p>
                <p class="intro">为了更好地为您提供服务，感谢您于百忙之中参与我司2017年投资者满意度调查，您所提的每一项宝贵意见都将成为我们改进的方向。</p>
                <!--满意度调查-->
                <form name="form1">
                     <div v-for="(item,len) in list" :key="item.id">
                        <div v-if = " item.type == 'radio'" class="m-cell questionbox" :class="item.name">
                            <h2>{{item.title}}</h2>
                            <label  v-for=" (lt,index) in item.checkItem"  class="cell-item" :key="lt">
                              <span class="cell-left">{{lt}}</span>
                                    <label class="cell-right">
                                         <input :type="item.type" :name="item.name" :value="String.fromCharCode(index+65) " />
                                              <i class="cell-radio-icon"></i>
                                    </label>
                            </label>
                        </div>
                        <div v-if = " item.type == 'checkbox'" class="m-cell questionbox" :class="item.name">
                            <h2>{{item.title}}</h2>
                            <label  v-for=" (lt,index) in item.checkItem" class="cell-item" :key="lt">
                              <span class="cell-left">{{lt}}</span>
                                    <label class="cell-right">
                                         <input :type="item.type" :name="item.name" :value="String.fromCharCode(index+65)" />
                                              <i class="cell-checkbox-icon"></i>
                                    </label>
                            </label>
                        </div>
                     <div v-if=" len == 25"  class="cell-item">
                                    <div class="cell-right">
                                        <textarea id="question" class="cell-textarea" placeholder="其他方面" name="answer26"></textarea>
                                    </div>
                                </div> 
                    <div v-if = " item.type == 'textarea' " class="m-cell " >
                            <h2>30、如果您对本公司有任何建议，欢迎您写在下列方框中。</h2>
                            <div class="m-cell">
                                    <div class="cell-item">
                                        <div class="cell-right">
                                           <textarea id="questionarea" class="cell-textarea" placeholder="说出你的想法吧！" name="a30"></textarea>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div> 
                </form>
                <p>
                    到此，您已经填完了整张问卷，我们再次衷心的感谢您对我们公司的支持。我们一定会根据您对我们的意见和建议，把我们对您的服务做得更好。愿我们能陪伴您在事业上取得更大的成就！
                </p>
                <div class="m-button">
                    <a href="javascript:;" class="btn-block btn-primary" id="J_Btn" @click="commit">提&nbsp;交</a>
                </div>
                <mt-spinner v-show="showload" type="fading-circle"></mt-spinner>
        </div>
</template>
<script>
    import {Spinner,MessageBox} from 'mint-ui';
    export default{
        data () {
            return {
                list:this.$statics.myddcQuestions.data,
                choices:[],
                keyvalue:[],
                showload:false,
                reason:'',
                other:'',
                sUrl:'http://www.hx168.com.cn/hxzq/myddc2017/submitJsp.jsp'
            }
        },
        methods:{
            commit() {
					var vm=this;
					var choices=[],
						subrisksnArray=[],
						len=$("div.questionbox").length;
					for (let i= 0; i < len;i++){ 
						if (!$("div.questionbox").eq(i).find("input").is(':checked')){ 
								MessageBox('提示','请先答完题哦,亲！')
								return false;
						}
					}
					for(let i=0;i<=len;i++){
                                choices[i] = [];
                    }
					$("input:checked").each(function(){
                        var $this = $(this);
                        var questionNo = /\d+/.exec($this.attr('name'));
                        choices[questionNo].push($(this).val());
                    });	
                    var keyvalue = [];
                    var keyval=[];
                    var keyvalList=''
                        vm.reason = $('#questionarea').val();
                        vm.other = $('#question').val();
                    for(let i = 1; i <= len;i ++){
                        keyvalue.push(choices[i].join(','));
                    }
                    keyvalue[25]=keyvalue[25]+','+vm.other;
                        keyvalue.forEach(function(ele,index){
                               keyval.push('a'+(index+1)+'='+ele+'&');
                        })
                    keyvalList = keyval.join('')+'a30='+vm.reason;
                    
                  $.ajax({
                    url: vm.sUrl,
                    data: keyvalList,
                    complete: function (res) { 
                        if (res.status != 404 && res.readyState == 4) {
                            MessageBox('提示', "提交成功!").then(function() {
                                // WeixinJSBridge.invoke('closeWindow', {}, function(res) {});
                                vm.$router.push({ path: 'business' });
						})
                        } else { 
                            MessageBox('提示', "网络错误！");
                        }
                    }
                }).fail(function (res) { 
                             MessageBox('提示', "未获取到用户信息！");
                })			
            }
        }
    }

</script>
<style>
    #myddc img{
        width: 100%;
    }
    #myddc p{
        padding:1rem 1rem 0;
        font-size: 1.25rem;
    }
    form[name=form1]{
        margin: 1rem;
    }
    #myddc .intro{
        text-indent: 2rem;
        line-height: 1.5;
    }
    #html{
        padding:1rem;
    }
    label.cell-item{
        padding:1.5rem;
    }
    .m-cell h2{
        padding:1rem;
        line-height: 1.5;
    }
    .cell-left{
        font-size: 1.2rem;
    }
    .cell-textarea{
        height: 6rem;
        padding:1rem;
    }
    .cell-right input[type="radio"] + .cell-radio-icon:after, .cell-right input[type="checkbox"]:not(.m-switch) + .cell-radio-icon:after, .cell-right input[type="radio"] + .cell-checkbox-icon:after, .cell-right input[type="checkbox"]:not(.m-switch) + .cell-checkbox-icon:after{
        font-size: 1.2rem;
        color:#C7322F;
    }
    .cell-right input[type="radio"]:checked + .cell-checkbox-icon:after, .cell-right input[type="checkbox"]:not(.m-switch):checked + .cell-checkbox-icon:after{
        color:#C7322F; 
    }
    .m-button{
        width: 90%;
        margin: 2rem auto;
        font-size: 1.6rem;
    }
    .m-button .btn-primary{
        height: 4rem;
        font-size: 1.6rem;
        line-height: 4rem;
        border-radius: 15px;
        background: #C7322F;
    }

</style>


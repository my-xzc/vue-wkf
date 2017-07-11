<template>
        <div id="myddc">

                <!--满意度调查-->
                <!--<div v-for="item in list" :key="item.id">
                    <div v-if=" item.type !='textarea' "><h2>{{item.title}}</h2>
                        <label  v-for="list in item.checkItem" :key="list.id" class="cell-item">
                              <span class="cell-left">{{list}}</span>
                                    <label class="cell-right">
                                         <input :type="list.type" :name="list.name"/>
                                              <i class="cell-"+list.type+"-icon"></i>
                                    </label>
                        </label>
                    
                    </div>
                       

                </div>-->
                <img src="../../assets/img/banner_2017.jpg"/>
                <p>尊敬的投资者：</p>
                <p class="intro">为了更好地为您提供服务，感谢您于百忙之中参与我司2017年投资者满意度调查，您所提的每一项宝贵意见都将成为我们改进的方向。</p>
                <div id="html">
                </div>
                <p>
                    到此，您已经填完了整张问卷，我们再次衷心的感谢您对我们公司的支持。我们一定会根据您对我们的意见和建议，把我们对您的服务做得更好。愿我们能陪伴您在事业上取得更大的成就！
                </p>
                <div class="m-button">
                    <a href="javascript:;" class="btn-block btn-primary" id="J_Btn" @click="getInput">提&nbsp;交</a>
                </div>
        </div>
</template>
<script>
    export default{
        data () {
            return {
                list:this.$statics.myddcQuestions.data,
                choices:[],
                keyvalue:[]
            }
        },
        methods:{
            con(){
                var html= '';
                 this.list.forEach(function(element) {
                    html += '<div class="'+element.name+' m-cell"><h2>'+element.title+'</h2>';
                                    if(element.type != 'textarea'){   
                                            element.checkItem.forEach(function(ele,index) {
                                                    html += '<label class="cell-item">\
                                                                <span class="cell-left">'+ele+'</span>\
                                                                <label class="cell-right">\
                                                                    <input type="'+element.type+'" name="'+element.name+'" value="'+String.fromCharCode(index+65)+'"/>\
                                                                    <i class="cell-'+element.type+'-icon"></i>\
                                                                </label>\
                                                            </label>';
                                            }, this);   
                                        }
                                    if(element.type == 'textarea'){
                                                html += '<div class="m-celltitle"></div>\
                                                            <div class="m-cell">\
                                                                <div class="cell-item">\
                                                                    <div class="cell-right">\
                                                                        <textarea class="cell-textarea" placeholder="说出你的想法吧！" name="a30"></textarea>\
                                                                    </div>\
                                                                </div>\
                                                            </div>';
                                            }
                    html += '</div>';
                }, this); 
                  $('#html').append(html).find('.a26').append('<div class="m-celltitle"></div>\
                                                    <div class="m-cell">\
                                                        <div class="cell-item">\
                                                            <div class="cell-right">\
                                                                <textarea class="cell-textarea" placeholder="" name="a26"></textarea>\
                                                            </div>\
                                                        </div>\
                                                    </div>');
            },
            getRadioVal (obj) {
            var len = obj.length;
            var val = "";
            for (var i=0; i<len; i++)
            {
                if(obj[i].checked)
                    val=obj[i].value;
            }
            return val;
            },
            getCheckboxVal (obj) {
                var len = obj.length;
                var val = "";
                for (var i=0; i<len; i++)
                {
                    if(obj[i].checked)
                        val+=obj[i].value+",";
                }
                return val;
            },
            getInput(){
                 for(var i=0;i<=30;i++){
                    this.choices[i] = [];
                   }
                $("input:checked").each(function(){
                        var $this = $(this);
                        var questionNo = /\d+/.exec($this.attr('name'));
                        this.choices[questionNo].push($this.val());
                        console.info(questionNo)
                    });
                    for(var i = 1,len=$("div[data-subrisksn]").length; i <= len;i ++){
                        this.keyvalue.push(this.choices[i].join(','));
                    }
                    console.info(this.choices)
            }
        },
        mounted(){
            this.con();
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


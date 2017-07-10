<template>
        <div>

                <!--满意度调查-->
                <div v-for="item in list">
                    <div><h1>{{item.title}}</h1></div
                       

                </div>
                <div id="html">

                </div>
        </div>
</template>
<script>
    export default{
        data () {
            return {
                list:this.$statics.myddcQuestions.data
            }
        },
        methods:{
            con(){
              
                var html= '';
                 this.list.forEach(function(element) {
                    html += '<div class="'+element.name+' m-cell"><h1>'+element.title+'</h1>';
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
                //   $('#html').html(html);
            }
        },
        mounted(){
            // this.con();
        }

    }

</script>
<style>

</style>


<template>
    <div id="nav">
        <div class="tab">
             <ul><li><a href="javascript:;" v-on:click="showPosition">持仓查询</a></li><li><a href="javascript:;" v-on:click="showFund">资金查询</a></li><li><a href="javascript:;" v-on:click="showAllo">中签查询</a></li></ul>
             <span class="slider"></span>
        </div>
        <div id="accqueryBody">
            <v-fundation v-show="fundShow"></v-fundation>
            <v-position v-show="posiShow"></v-position>
            <v-allocation v-show="allocatShow"></v-allocation>
        </div>
    </div>
</template>
<script>
    import VPosition from '../position/index'
	import VFundation from '../foundation/index'
    import VAllocation from '../allocation/index'
    import { Navbar, TabItem } from 'mint-ui';
    export default{
        data(){
            return{
                posiShow:true,
                fundShow:false,
                allocatShow:false
            }
        },
        methods:{
            click (){
                 $('.tab ul li').bind('click',function(){
                       var  index = $(this).index();
                            index= Number(index);
                       var slide = ((index+1)*2-1)*16.66;
                    $('.slider').css({left: slide+'%'});
                })
            },
            showPosition(){
                this.posiShow=true;
                this.fundShow=false;
                this.allocatShow=false;
                this.click ();
            },
            showFund(){
                this.posiShow=false;
                this.fundShow=true;
                this.allocatShow=false;
                this.click ();
            },
            showAllo(){
                this.posiShow=false;
                this.fundShow=false;
                this.allocatShow=true;
                this.click ();
            }
           
        },
        mounted(){

        },
        components: {
 				VPosition,
 				VFundation,
                VAllocation
 			},
    }
</script>
<style scoped>
    
    .tab,.tab ul{
        position: relative;
        padding-left: 0;
        background: #fff;
        margin: 0;
    }
    .tab ul li {
        display: inline-block;
        box-sizing: border-box;
        width: 33.33%;
        line-height: 3.5;
        text-align: center;
    }
    .tab ul li a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #000;
    }
    .slider {
        position: absolute;
        display: inline-block;
        bottom: 0;
        left: 16.66%;
        margin-left: -15px;
        height: 3px;
        width: 30px;
        background: #C72820;
        transition: all .5s;
    }
</style>


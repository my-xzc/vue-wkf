<template>
    <div id="nav">
        <div class="tab">
             <ul><li><a href="javascript:;" v-on:click="click">持仓查询</a></li><li><a href="javascript:;" v-on:click="click">资金查询</a></li><li><a href="javascript:;" v-on:click="click">中签查询</a></li></ul>
             <span class="slider"></span>
        </div>
        <div id="accqueryBody">
            <v-fundation v-if="fundShow" class="animated fadeIn"></v-fundation>
            <v-position v-if="posiShow" class="animated fadeIn"></v-position>
            <v-allocation v-if="allocatShow" class="animated fadeIn"></v-allocation>
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
                var vm=this;
                 $('.tab ul li').bind('click',function(){
                       var  index = $(this).index();
                            index= Number(index);
                       var slide = ((index+1)*2-1)*16.66;
                        $('.slider').css({left: slide+'%'});
                        switch(index){
                            case 0:
                                vm.posiShow=true;
                                vm.fundShow=false;
                                vm.allocatShow=false;
                                break;
                            case 1:
                                vm.posiShow=false;
                                vm.fundShow=true;
                                vm.allocatShow=false;
                                break;
                            case 2:
                                vm.posiShow=false;
                                vm.fundShow=false;
                                vm.allocatShow=true;
                                break;
                            default:break;
                        }
                })
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
        font-size: 1.2rem;
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


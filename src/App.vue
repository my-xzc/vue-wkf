<template>
      <transition   name="custom-classes-transition"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut">
        <router-view class="app"></router-view>
    </transition>
</template>
<script>
    import 'assets/lib/jquery'
    export default {
    	data: function() {
    		return {
    			transitionName: 'slide-left'
    		}
    	},
    	watch: {
    		'$route' (to, from) {
    			const toDepth = to.path.split('/').length;
    			const fromDepth = from.path.split('/').length;
    			this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    		}
    	},
    }
</script>
<style>
	@import 'assets/css/ydui.css';
    @import 'assets/css/mint.style';
    @import 'assets/css/animate.min.css';
    @import 'assets/css/common';
	.app{
		position:absolute;
		width:100%;
		height:100%;
		z-index: 0;
	}
</style>

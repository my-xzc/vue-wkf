<template>
      <transition   name="custom-classes-transition"
                    enter-active-class="bounceInLeft"
                    leave-active-class="bounceOutRight">
        <router-view></router-view>
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
</style>

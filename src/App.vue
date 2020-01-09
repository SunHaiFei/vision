<template>
  <div id="app">
    <router-view/>
		<my-footer></my-footer>
  </div>
</template>


<script>
import footer from './components/footer.vue'
export default {
  components:{
		'my-footer' : footer
	}
}
</script>

<style lang="scss">
	
	
	
</style>

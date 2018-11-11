<template>
  <div class="card mr-4" style="width: 15rem; margin-bottom:1.6rem"> 
    <div class="card-header">
      <slot name="title"></slot>  
    </div>
    <div class="card-body h-100">
      {{post.body}}
    </div>
    <div class="card-footer text-muted">
      <a href="#" class="card-link">Card link</a>
    </div>
  </div>
</template>

<script>
export default {
 props: [
   'post'
 ]
}
</script>

<style lang="scss" scoped>

</style>

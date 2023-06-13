<template>
  <div v-if="message" :class="['alert', message.type]">
    {{ message.text }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>
.alert {
  padding: 10px;
  margin-bottom: 10px;
}
</style>

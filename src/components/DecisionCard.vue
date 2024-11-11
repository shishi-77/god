<template>
  <div class="decision-card">
    <DecisionText :decision="decision" />
  </div>
</template>

<script>
import DecisionText from './DecisionText.vue'

export default {
  name: 'DecisionCard',
  components: {
    DecisionText
  },
  props: {
    quote: {
      type: Object,
      required: true,
      default: () => ({
        text: ''
      })
    }
  }
}
</script>

<style>

</style>
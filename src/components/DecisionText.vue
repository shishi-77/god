<template>
  <div class="decision-text">
    <blockquote>{{ decision.text }}</blockquote>
  </div>
</template>

<script>
export default {
  name: 'DecisionText',
  props: {
    decision: {
      type: Object,
      required: true,
      default: () => ({
        text: '',
        author: ''
      })
    }
  }
}
</script>

<style scoped>
.decision-text {
  font-style: italic;
  margin: 20px;
}

blockquote {
  quotes: "“" "”" "‘" "’";
}

blockquote:before {
  content: open-quote;
}

blockquote:after {
  content: close-quote;
}

cite {
  display: block;
  text-align: right;
  margin-top: 10px;
  font-weight: bold;
}
</style>
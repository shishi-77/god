<template>
  <div class="container">
    <h1>{{ $t('decisions')[currentDecision].text }}</h1>
    <button @click="getRandomDecision">God bled me</button>
    <button @click="switchLanguage">
      {{ currentLanguage === 'en' ? 'Tiếng Việt' : 'English' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

console.log(t('decisions'))

const decisionKeys = Object.keys(t('decisions'))
const currentDecisionKey = ref(decisionKeys[0])

console.log(currentDecisionKey)

const getRandomDecision = () => {
  const randomIndex = Math.floor(Math.random() * decisionKeys.length)
  currentDecisionKey.value = decisionKeys[randomIndex]
}

const currentLanguage = computed(() =>locale)

const switchLanguage = () => {
 locale.value =locale.value === 'en' ? 'vi' : 'en'
}

getRandomDecision()
</script>

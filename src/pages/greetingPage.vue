<template>
  <div>
    <languagePicker />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="$t('greeting')"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import languagePicker from '../components/languagePicker.vue';

export default {
  name: 'greeting',
  components: {
    HelloWorld,
    languagePicker,
  },
};
</script>

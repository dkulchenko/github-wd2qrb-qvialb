<script setup>
const authed = useState('authed');

function signIn() {
  authed.value = true;
  return navigateTo('/dashboard');
}
</script>

<template>
  <div><a href="" @click.prevent="signIn">Sign in</a></div>
</template>

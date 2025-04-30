<template>
  <div>
    <h1>Redirecting...</h1>
  </div>
</template>

<script>
export default {
  name: 'OauthRedirect',
  mounted() {
    // Get the access token from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    
    if (accessToken) {
      // Store the access token in local storage or Vuex (depending on your architecture)
      localStorage.setItem('accessToken', accessToken);
      
      // Optionally redirect the user to the dashboard or another page after successful login
      this.$router.push({ name: 'main' });
    } else {
      // Handle case where the access token is not found in the URL
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<style scoped>
/* Add some styles here */
</style>

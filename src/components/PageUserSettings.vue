<template>
  <div class="split-page">
    <page-header title="Account Settings" subtitle="Customize your account here.">
    </page-header>
    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">
          <form class="form-default">
            <div class="input-group">
              <label for="user-signup-name">User Name</label>
              <input type="text" id="user-signup-name">
            </div>
            <div class="input-group">
              <label for="user-signup-email">Email</label>
              <input type="email" id="user-signup-email"> </div>
            <div class="input-group">
              <label for="user-signup-password">Password</label>
              <input type="password" id="user-signup-password">
            </div>
            <div class="form-footer">
              <input type="submit" class="btn" value="Sign Up">
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from './PageHeader'

export default {
  name: 'page-blog-index',
  components: {
    PageHeader
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
</style>

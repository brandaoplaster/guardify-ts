<script lang="ts">
export default {
    name: "DefaultTemplate"
  }
</script>

<template>
  <div class="card">
    <div>
      <router-link :to="{name: 'admin.home'}" v-can="'admin.home'">
        Home
      </router-link>
      <router-link :to="{name: 'users.index'}" v-can="'users.index'">
        Users
      </router-link>
    </div>
    <h1>
      Template
    </h1>
    <router-view />
  </div>
</template>

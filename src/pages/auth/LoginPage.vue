<script lang="ts">
import { reactive, ref } from 'vue';
import { useUsersStore } from '../../stores/users';


export default {
  setup() {
    const useStore = useUsersStore();
    const loading = ref(false);
    const email = ref("");
    const password = ref("");
    const error = reactive({
      mensageError: "",
      status: 0,
      active: false
    })

    const auth = () => {
      loading.value = true;
      useStore.auth(email.value, password.value)
        .then(response => alert(response))
        .catch(response =>
          error.mensageError = "Error authentication"
          error.status = response.response.status
          error.active = true
        )
        .finally(() => loading.value = false);
    }

    return {
      email,
      password,
      loading,
      auth,
      error
    }
  }
}


</script>


<template>
  <div class="card">
    <h1>
      Login
    </h1>
    <form action="#" method="post" @submit.prevent="auth">
      <input type="email" name="email" placeholder="E-mail" v-model="email">
      <input type="password" name="password" placeholder="Password" v-model="password">
      <button type="submit" :class="{ disabled: loading }">
        <span v-if="loading">Send...</span>
        <span v-else>Login</span>
      </button>
    </form>
  </div>
</template>

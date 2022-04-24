<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  mounted () {
    fetch('http://localhost:3000/api/user/add', {
      body: JSON.stringify({
        discordId: 123123123123,
        message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        name: 'vasea',
        time: 'Sat Apr 23 2022 17:26:05 GMT+0300 (Eastern European Summer Time)'
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
  }
})
</script>

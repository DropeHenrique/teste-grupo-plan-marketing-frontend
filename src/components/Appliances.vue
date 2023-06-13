<template>
  <div>
    <h1>Eletrodomésticos</h1>
    <ul>
      <li v-for="appliance in appliances" :key="appliance.id">
        {{ appliance.name }} - {{ appliance.brand }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      appliances: []
    }
  },
  created() {
    this.fetchAppliances()
  },
  methods: {
    async fetchAppliances() {
      try {
        const response = await axios.get('/api/appliances')
        this.appliances = response.data
      } catch (error) {
        console.error('Erro ao obter a lista de eletrodomésticos:', error)
      }
    }
  }
}
</script>

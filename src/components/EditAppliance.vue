<template>
  <div class="container">
    <h2>Editar Eletrodoméstico</h2>
    <form @submit.prevent="updateAppliance">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" class="form-control" v-model="appliance.name" required>
      </div>
      <div class="form-group">
        <label for="brand">Marca:</label>
        <input type="text" id="brand" class="form-control" v-model="appliance.brand" required>
      </div>
      <div class="form-group">
        <label for="description">Descrição:</label>
        <textarea id="description" class="form-control" v-model="appliance.description" required></textarea>
      </div>
      <div class="form-group">
        <label for="voltage">Voltagem:</label>
        <input type="text" id="voltage" class="form-control" v-model="appliance.voltage" required>
      </div>
      <button type="submit" class="btn btn-primary">Atualizar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appliance: {
        name: '',
        brand: '',
        description: '',
        voltage: ''
      }
    };
  },
  created() {
    // Chamar a API para obter os detalhes do eletrodoméstico a ser editado

    // Exemplo de chamada da API usando o Axios:
    const applianceId = this.$route.params.id; // Obter o ID do eletrodoméstico da rota
    this.$axios
        .get(`/appliances/${applianceId}`)
        .then(response => {
          this.appliance = response.data;
        })
        .catch(error => {
        });
  },
  methods: {
    updateAppliance() {
      // Chamar a API para atualizar o eletrodoméstico usando this.appliance
      // Redirecionar para a listagem de eletrodomésticos após a atualização

      // Exemplo de chamada da API usando o Axios:
      const applianceId = this.$route.params.id; // Obter o ID do eletrodoméstico da rota
      this.$axios
          .put(`/appliances/${applianceId}`, this.appliance)
          .then(response => {
            // Lógica após a atualização do eletrodoméstico

            this.$router.push('/appliances');
          })
          .catch(error => {
            // Lógica de tratamento de erro
          });
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para este componente */
.container {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 16px;
}
</style>

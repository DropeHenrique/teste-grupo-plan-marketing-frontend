<template>
  <div class="container">
    <h2>Criar Eletrodoméstico</h2>
    <form @submit.prevent="createAppliance">
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
      <button type="submit" class="btn btn-primary">Criar</button>
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
  methods: {
    createAppliance() {
      // Chamar a API para criar o eletrodoméstico usando this.appliance

      // Chamada da API usando o Axios:
      this.$axios
          .post('/appliances', this.appliance)
          .then(response => {
            // Lógica após a criação do eletrodoméstico
            this.appliance.name = '';
            this.appliance.brand = '';
            this.appliance.description = '';
            this.appliance.voltage = '';

            this.$router.push('/appliances');

          })
          .catch(error => {
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

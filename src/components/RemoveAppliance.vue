<template>
  <div>
    <h2>Remove Appliance</h2>
    <p>Are you sure you want to remove this appliance?</p>
    <button @click="removeAppliance">Remove</button>
  </div>
</template>

<script>
export default {
  methods: {
    removeAppliance() {
      // Chamar a API para remover o eletrodoméstico com o ID especificado

      // Exemplo de chamada da API usando o Axios:
      const id = this.$route.params.id;
      this.$axios.delete(`/api/appliances/${id}`)
        .then(response => {
          // Lógica após a remoção do eletrodoméstico
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
</style>

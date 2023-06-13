<template>
  <div class="container-fluid mt-4">
    <h2 class="text-center">Lista de Eletrodomésticos</h2>
    <div class="mb-2">
      <router-link to="/appliances/create" class="btn btn-success">Adicionar Eletrodoméstico</router-link>
    </div>
    <table class="table table-bordered table-striped mt-2">
      <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Marca</th>
        <th scope="col">Descrição</th>
        <th scope="col">Voltagem</th>
        <th scope="col">Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="appliance in appliances" :key="appliance.id">
        <td>{{ appliance.name }}</td>
        <td>{{ appliance.brand }}</td>
        <td>{{ appliance.description }}</td>
        <td>{{ appliance.voltage }}</td>
        <td>
          <button @click="editAppliance(appliance.id)" class="btn btn-primary mr-3">Editar Eletrodoméstico</button>
          <button @click="deleteAppliance(appliance.id)" class="btn btn-danger ml-5">Excluir</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
export default {
  data() {
    return {
      appliances: [],
    };
  },
  created() {
    // Chamar a API para obter a lista de eletrodomésticos

    // Exemplo de chamada da API usando o Axios:
    this.$axios
        .get('/appliances')
        .then(response => {
          this.appliances = response.data;
        })
        .catch(error => {
          // Lógica de tratamento de erro
        });
  },
  methods: {
    deleteAppliance(id) {
      // Chamar a API para excluir o eletrodoméstico com o ID especificado

      // Exemplo de chamada da API usando o Axios:
      this.$axios
          .delete(`http://127.0.0.1:8000/api/appliances/${id}`)
          .then(response => {
            // Exclusão bem-sucedida, exibir toast de sucesso
            window.location.reload();
          })
          .catch(error => {
            // Lógica de tratamento de erro
          });
    },
    editAppliance(id) {
      // Redirecionar para a página de edição do eletrodoméstico com o ID especificado
      this.$router.push(`/appliances/${id}/edit`);
    },
    fetchAppliances() {
      // Chamar a API para obter a lista atualizada de eletrodomésticos

      this.$axios
          .get('http://127.0.0.1:8000/api/appliances')
          .then(response => {
            this.appliances = response.data;
          })
          .catch(error => {
            // Lógica de tratamento de erro
          });
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */

/* Exemplo de estilos do Bootstrap */
.container-fluid {
  margin-top: 20px;
}

.text-center {
  text-align: center;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
  border: 1px solid #ccc;
}

.table th {
  background-color: #f2f2f2;
}

.btn {
  padding: 4px 8px;
  border-radius: 4px;
}
</style>

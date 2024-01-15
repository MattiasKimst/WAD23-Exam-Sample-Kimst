<template>
  <div>
    <h3>All Routes</h3>

    <!-- Task 1 -->
    <div class="container">
      <table>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Cost</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
        <tr v-for="route in routes" :key="route.id">
          <td>{{ route.fromcity }}</td>
          <td>{{ route.tocity }}</td>
          <td :class="{ 'red': route.cost > 12, 'blue': route.cost <= 12 }">{{ route.cost }}</td>
          <td>{{ route.departuretime }}</td>
          <td>{{ route.departuredate }}</td>
        </tr>

      </table>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [], // Array to store fetched routes
    };
  },
  mounted() {
    // Fetch data when the component is mounted
    this.fetchRoutes();
  },
  methods: {
    async fetchRoutes() {
      try {
        // Make a GET request to fetch routes data using the fetch API
        const response = await fetch('http://localhost:3000/api/routes');

        // Check if the request was successful (status code 200)
        if (response.ok) {
          // Parse the JSON response
          const routes = await response.json();

          // Update the routes data with the fetched data
          this.routes = routes;
        } else {
          console.error('Error fetching routes:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    },
  }}
</script>


<style scoped>
h3 {
  font-size: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 8px 10px;
  text-align: left;
  border: 2px solid lightgrey ;
}

th {
  background: rgb(100, 151, 122); /* Darker green for header row */
  color: white;

}
.red {
  background: rgb(225, 33, 19);
}

.blue {
  background: rgb(19, 67, 163);
}

tr{
  background: rgb(186, 228, 204); /* Lighter green for even rows */
}



.red {
  background: rgb(225, 33, 19);
}
.blue {
  background: rgb(19, 67, 163);
}
.counters {
  background: rgb(157, 160, 165);
  padding: 10px 20px;
  display: block;
  width: 40%;
  margin: auto;
  font-size: 18px;
}
</style>

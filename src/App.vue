<template>
  <div id="app">
    <header class="header">
      <button @click="toggleSidebar" class="toggle-button">Toggle Sidebar</button>
      <div>
        Header
      </div>
    </header>
    <div class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
      Sidebar
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1;
  border-bottom: 1px solid black;
  height: 60px;
}

.toggle-button {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
  background: #007BFF;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.sidebar {
  position: fixed;
  top: 0;
  left: -401px;
  width: 400px;
  height: 100%;
  background: #fff;
  border-right: 1px solid black;
  transition: left 0.3s;
}

.sidebar.sidebar-open {
  left: 0;
}

@media (max-width: 375px) {
  .sidebar {
    width: 100%;
  }
}
</style>

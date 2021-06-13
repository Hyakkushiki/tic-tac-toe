<template>
  <main class="base">
    <div id="app">
      <h1 class="board-text-format">{{ title }}</h1>

      <section class="board-container">
        Level:
        <span @click="changeLevel()"> {{ diff }} </span>
        <options v-bind:level="diff" @click="changeLevel()" />
        <board v-bind:level="diff" />
      </section>

      <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    </div>
  </main>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Board from "./components/board.vue";
import options from "./components/options.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Board,
    options,
  },
  data() {
    return {
      title: "Tic-Tac-Toe",
      diff: "Easy",
    };
  },
  methods: {
    changeLevel() {
      this.diff = this.diff === "Easy" ? "Hard" : "Easy";
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.base {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
  background-color: #6E4671;
}
.board-container {
  margin: 0;
  padding: 0;
}
.board-text-format {
  margin: 4%;
  padding: 0;
}
#app {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9B95AD;
  font-size: calc(calc(0.5 * 3vw) + calc(0.5 * 2vh));
}
</style>

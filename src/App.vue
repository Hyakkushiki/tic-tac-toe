<template>
  <main class="base">
    <div id="app">
      <h1>{{ title }}</h1>
      <!-- <img alt="Vue logo" src="./assets/logo.png" width="25%"> -->
      <!-- <section class="settings">
        <selector name="size" :items="sizes" v-model="setSize" class="setting" />
        <selector name="mode" :items="modes" v-model="mode" class="setting setting-mode" />
        <selector name="bot-level" :items="botLevels" v-model="botLevel" class="setting" :style="{visibility: mode > 0 ?'' : 'hidden'}" />
      </section> -->
      <section class="board-container">
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
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100%;
  background-color: #6E4671;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9B95AD;
  font-size: calc(calc(0.5 * 3vw) + calc(0.5 * 2vh));
}
</style>

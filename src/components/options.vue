<template>
  <section>
    <input type="radio" :id="valueId(i)" />
    <label :for="valueId(i)">
      {{ level }}
    </label>
    <div @click="$emit('click')" class="diff">{{ level }}</div>
  </section>
  <!-- <section class="selector">
    <div v-for="i in items">
      <input class="value" type="radio" :name="name" :value="getItemValue(i)" :key="getItemValue(i)" :id="valueId(i)" :checked="getItemValue(i) == value" v-on:change="onSelected">
      <label :key="getItemValue(i)" :for="valueId(i)">
        {{getItemLabel(i)}}
      </label>
    </div>
  </section> -->
</template>

<script>
export default {
  data() {
    return {
      // level: "Easy",
      dd: "hh",
    };
  },
  props: {
    level: String,
    opt: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    value: {},
  },
};
</script>

<style>
.diff {
  margin: 2vw auto;
  width: 20vw;
  align-items: center;
  color: #A28BA4;
  border-radius: 25px;
  border: 2px solid #6E272F;
}
</style>
<template>
  <div>
    Hey {{ foo }}
    <Foo />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Foo from './Foo.vue';

const foo = ref(0);
</script>

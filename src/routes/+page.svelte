<script lang="ts">
  import { screenType } from "../store/common";
  import List from "../components/06_templates/ListTemplate/index.svelte";
  import Detail from "../components/06_templates/DetailTemplate/index.svelte";
</script>

<main>
  <h1>メモアプリ</h1>
  {#if $screenType === 0}
    <List />
  {:else if $screenType === 1}
    <Detail />
  {/if}
</main>

<style lang="scss">
  main {
    width: 544px;
    padding: 20px;
  }
</style>
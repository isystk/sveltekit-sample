<main>
    <h1>メモアプリ</h1>
    <Detail />
</main>

<script lang="ts">
import Detail from "../../components/06_templates/DetailTemplate/index.svelte";
import {selectId} from "../../store/common";
import { page } from '$app/stores';
export let id = $page.params.id;
selectId.set(id)
</script>
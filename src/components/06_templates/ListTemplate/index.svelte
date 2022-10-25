<div class="home">
    <div class="contents">
        <button type="button" class="btn" on:click={showRegistMemoModal}
        >メモを登録</button
        >
        <div class="memo-list-area">
            {#await load()}
                Loading...
            {:then data}
                <MemoListComponent />
            {:catch error}
                <p style="color: red">{error.message}</p>
            {/await}
        </div>
    </div>
</div>

{#if showRegistMemoModalFlg}
    <RegistMemoModal on:close={closeRegistMemoModal} />
{/if}
{#if $showDeleteMemoModalFlg}
    <DeleteMemoModal />
{/if}

<script lang="ts" context="module">
  import { memoList } from "../../../store/common";

  /**
   * ローカルストレージからメモ一覧を取得
   */
  async function loadMemoList() {
    const storageMemoList: {} =
      JSON.parse(localStorage.getItem("memoList")) || {};
    memoList.set(storageMemoList);
  }

  export async function load() {
    await loadMemoList(); // ローカルストレージからメモ一覧を取得
  }
</script>

<script lang="ts">
  import MemoListComponent from "../../04_organisms/MemoList/index.svelte";
  import RegistMemoModal from "../../04_organisms/RegistMemoModal/index.svelte";
  import DeleteMemoModal from "../../04_organisms/DeleteMemoModal/index.svelte";
  import { showDeleteMemoModalFlg } from "../../../store/common";

  let showRegistMemoModalFlg: boolean = false; // メモ登録モーダルの表示フラグ

  /**
   * メモ登録モーダルを表示
   */
  function showRegistMemoModal() {
    showRegistMemoModalFlg = true;
  }

  /**
   * メモ登録モーダルを非表示
   */
  function closeRegistMemoModal() {
    showRegistMemoModalFlg = false;
  }
</script>

<style lang="scss">
  .home {
    .contents {
      margin-top: 12px;
      .btn {
        width: 120px;
      }
      .memo-list-area {
        margin-top: 20px;
      }
    }
  }
</style>

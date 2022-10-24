<script lang="ts">
  import {
    memoList,
    showDeleteMemoModalFlg,
    selectId,
  } from "../../../store/common";

  /**
   * メモ削除モーダルを表示
   *
   * @param {number} index 選択したメモのインデックス
   */
  function showDeleteMemoModal(id: string) {
    selectId.set(id);
    showDeleteMemoModalFlg.set(true);
  }

</script>

{#if Object.keys($memoList).length > 0}
  <ul class="memo-list">
    {#each Object.entries($memoList) as [id, {title, date}], i}
        <li>
            <a href="/{id}">
                <p class="id">{id}</p>
                <p class="title">{title}</p>
                <p class="date">登録日：{date}</p>
                <span class="delete" on:click|stopPropagation={() => showDeleteMemoModal(id)}>×</span>
            </a>
        </li>
    {/each}
  </ul>
{:else}
  <p>メモは１件も登録されていません</p>
{/if}

<style lang="scss">
  .memo-list {
    li {
      border: 1px solid;
      padding: 20px;
      position: relative;
      cursor: pointer;
      &:not(:first-child) {
        border-top: none;
      }
      &:hover {
        background: #dcfaff;
      }
      .title {
        font-size: 24px;
      }
      .delete {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 32px;
        &:hover {
          color: #cbb5b5;
        }
      }
    }
  }
</style>
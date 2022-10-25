<div class="detail">
  <p class="link-text" on:click={() => backListPage()}>一覧画面に戻る</p>
  <div class="contents">
    <label class="input-title">
      <p>タイトル</p>
      <input bind:value={memoTitle} type="text" />
    </label>
    <label class="input-context">
      <p>内容</p>
      <textarea bind:value={memoContext} />
    </label>
  </div>
  <div class="buttons">
    <button class="btn" on:click={updateMemo}>更新</button>
  </div>
</div>

<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from "svelte";
  import { memoList, selectId } from "../../../store/common";
  
  // data
  let memoTitle = '' 
  let memoContext = ''

  // init
  onMount(() => {
    loadMemoList(); // ローカルストレージからメモ一覧を取得
  });

  // compute
  $: {

  }

  // ローカルストレージからメモ一覧を取得
  const loadMemoList = () => {
    const storageMemoList: {} =
            JSON.parse(localStorage.getItem("memoList")) || {};
    memoList.set(storageMemoList);
    memoTitle =  $memoList[$selectId].title;
    memoContext = $memoList[$selectId].context;
  }
  
  // メモ一覧画面に戻る
  const backListPage = () => {
    goto("/")
  }

  // メモを更新する
  const updateMemo = () => {
    const localStorageMemoList: string = localStorage.getItem("memoList");
    const newMemoList: {} = localStorageMemoList
      ? JSON.parse(localStorageMemoList)
      : {};

    newMemoList[$selectId].title = memoTitle;
    newMemoList[$selectId].context = memoContext;

    localStorage.setItem("memoList", JSON.stringify(newMemoList));

    memoList.set(newMemoList);
    backListPage(); // メモ一覧画面に戻る
  }
</script>

<style lang="scss">
  .detail {
    margin-top: 12px;
    .contents {
      margin-top: 24px;
      label {
        display: block;
        &:not(:first-child) {
          margin-top: 12px;
        }
        input,
        textarea {
          width: 100%;
          margin-top: 8px;
          font-size: 20px;
        }
        input {
          height: 32px;
        }
        textarea {
          height: 150px;
        }
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
      .btn {
        width: 120px;
      }
    }
  }
</style>
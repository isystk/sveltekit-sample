import { writable } from "svelte/store";

export const screenType = writable<number>(0); // 0:一覧画面 1:詳細画面
export const showDeleteMemoModalFlg = writable<boolean>(false);
export const selectId = writable<string>(null);

export type memo = {
  id: string;
  title: string;
  context: string;
  date: string;
};
export type memos = {
  [id: string]: memo
};

export const memoList = writable<memos>({});
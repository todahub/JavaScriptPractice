/*
 * 第1章 演習1-1：タスク管理の基本処理
 *
 * 【問題】
 * 以下の初期データを使って、次の処理を実装しなさい。
 *
 * 1. for...of でIDが2のタスクを探し、doneをtrueに変更する。
 * 2. push() で4件目のタスクを追加する。
 *    id: 4, title: "面接対策", done: false
 * 3. for...of で完了済みのタスク数を数える。
 * 4. 完了済みタスク数と全タスク数を表示する。
 *
 * 【制約】
 * - タスクの検索と件数の集計にはfor...ofとifを使うこと。
 * - 関数やfilter()などは使用しないこと。
 *
 * 【期待する出力】
 * 完了済み: 2
 * 全タスク: 4
 */

// 初期データ
const tasks = [
  { id: 1, title: "JavaScriptの勉強", done: false },
  { id: 2, title: "履歴書の作成", done: false },
  { id: 3, title: "GitHubの整理", done: true }
];

// ここから実装

let count = 0;

for (const task of tasks){
  if(task.id === 2){
    task.done = true;
  }
}

tasks.push({id: 4, title: "面接対策", done: false});

for (const task of tasks){
  if(task.done === true){
    count += 1;
  }
}



console.log("完了済みタスク:",count);
console.log("全タスク数:",tasks.length);


/*
 * 第3章 演習3-1：配列メソッド
 *
 * 【問題】
 * 以下のタスクデータを使って実装しなさい。
 *
 * 1. find() を使い、idが2のタスクを取得する。
 *    取得したタスクのタイトルを表示する。
 *
 * 2. filter() を使い、完了済みのタスクだけを
 *    抽出した新しい配列を作る。
 *
 * 3. map() を使い、全タスクのタイトルだけを
 *    取り出した文字列の配列を作る。
 *
 * 4. reduce() を使い、完了済みタスクの
 *    作業時間（minutes）の合計を計算する。
 *
 * 【制約】
 * - map、filter、find、reduceを必ず使うこと。
 * - for、for...ofは使用しないこと。
 * - 元のtasks配列は変更しないこと。
 *
 * 【期待する出力】
 * 検索結果: 履歴書の作成
 * 完了済みタスク数: 2
 * 全タイトル: JavaScriptの勉強,履歴書の作成,GitHubの整理,面接対策
 * 完了済み作業時間: 60分
 */

const tasks = [
  { id: 1, title: "JavaScriptの勉強", done: true, minutes: 45 },
  { id: 2, title: "履歴書の作成", done: false, minutes: 30 },
  { id: 3, title: "GitHubの整理", done: true, minutes: 15 },
  { id: 4, title: "面接対策", done: false, minutes: 60 }
];

// ここから実装
const id_2object = tasks.find(task => task.id === 2);
const filterDone = tasks.filter(task => task.done === true);
const mappingTitle = tasks.map(task => task.title);
const totalMinutes = filterDone.reduce((total,task) => total + task.minutes, 0);

console.log(`検索結果：${id_2object.title}`);
console.log(`完了済みタスク数：${filterDone.length}`);
console.log(`全タイトル：${mappingTitle}`);
console.log(`完了済み作業時間：${totalMinutes}分`);
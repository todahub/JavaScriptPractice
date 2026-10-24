/*
 * 第2章 演習2-1：タスク処理の関数化
 *
 * 【問題】
 *
 * 1. completeTask(tasks, id) を通常の関数で作成する。
 *    - 指定IDのタスクを完了状態にする。
 *    - 見つかったら true、なければ false を返す。
 *
 * 2. addTask(tasks, id, title) をアロー関数で作成する。
 *    - 指定されたID・タイトルの未完了タスクを追加する。
 *    - 追加したタスクを戻り値として返す。
 *
 * 3. countCompleted(tasks) をアロー関数で作成する。
 *    - 完了済みタスクの件数を返す。
 *    - console.log() で表示するだけでは不可。
 *
 * 4. 上記の関数を呼び出し、結果を表示する。
 *
 * 【制約】
 * - for...of、if、push() を使用すること。
 * - map()、filter()、find() は使用しないこと。
 * - 結果表示にはテンプレートリテラルを使うこと。
 *
 * 【期待する出力】
 * 更新成功: true
 * 追加タスク: 面接対策
 * 完了済み: 2
 * 全タスク: 4
 */

const tasks = [
  { id: 1, title: "JavaScriptの勉強", done: false },
  { id: 2, title: "履歴書の作成", done: false },
  { id: 3, title: "GitHubの整理", done: true }
];

// ここに3つの関数を実装する

function completeTask(tasks,id){
    let status = false;
    for(const task of tasks){
        if(task.id === id){
            task.done = true;
            status = true;
            break;
        }
    }
    return status;
}

const addTask = (tasks, id, title) =>{
    const newTask = {id: id, title: title, done: false};
    tasks.push(newTask);
    return newTask;
}

const countCompleted = (tasks) => {
    let count = 0;
    for(const task of tasks){
        if(task.done === true){
            count += 1;
        }
    }
    return count;
}

// 実装後に呼び出す
const updated = completeTask(tasks, 2);
const added = addTask(tasks, 4, "面接対策");
const completed = countCompleted(tasks);

// ここに結果を表示する処理を書く

console.log(`更新成功: ${updated}`);
console.log(`追加タスク: ${added.title}`);
console.log(`完了済み: ${completed}`);
console.log(`全タスク: ${tasks.length}`);


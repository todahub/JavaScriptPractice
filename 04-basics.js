
/*
 * 第4章 演習4-1：モダンJavaScript
 *
 * 【問題】
 *
 * 1. 分割代入を使って、最初のタスクから
 *    idとtitleを取り出して表示する。
 *
 * 2. map()とスプレッド構文を使い、
 *    idが2のタスクを完了状態にした
 *    新しい配列 updatedTasks を作る。
 *    元のtasksは変更しないこと。
 *
 * 3. map()、?.、?? を使い、
 *    各タスクの作業時間を取り出す。
 *    detailsが存在しない場合は0にする。
 *    結果はminutesListという配列に格納する。
 *
 * 4. 元のtasksとupdatedTasksそれぞれの
 *    idが2のタスクのdoneを表示する。
 *
 * 【制約】
 * - 分割代入、スプレッド構文、?.、?? を使うこと。
 * - 元のtasks配列を変更しないこと。
 *
 * 【期待する出力】
 * 最初のタスク: 1 JavaScriptの勉強
 * 元の完了状態: false
 * 更新後の完了状態: true
 * 作業時間: 40,0,0
 */

const tasks = [
  {
    id: 1,
    title: "JavaScriptの勉強",
    done: false,
    details: { minutes: 40 }
  },
  {
    id: 2,
    title: "GitHubの更新",
    done: false
  },
  {
    id: 3,
    title: "履歴書の作成",
    done: true,
    details: { minutes: 0 }
  }
];

// ここから実装

const {id, title} = tasks[0];

const updatedTasks = tasks.map(task => {
        if(task.id === 2){
            return {...task, done: true}
        }
        return {...task}
    }
);

const beforeState = tasks.find(task => task.id === 2);

const afterState = updatedTasks.find(task => task.id === 2);

const minutesList = tasks.map(task => task.details?.minutes ?? 0);

console.log(`最初のタスク：${id}${title}`);
console.log(`元の完了状態：${beforeState.done}`);
console.log(`更新後の完了状態：${afterState.done}`);
console.log(`作業時間：${minutesList}`);


function addTaskLink(taskNum, text = taskNum) {
  document.write("<a href=task_" + taskNum + ".html" + " >" + "Завдання " + + text + "</a>")
}

const url = window.location.href;
const match = url.match(/task_(\d+)\.html/);
const taskNumber = parseInt(match[1]);

let nextTask = taskNumber + 1;
let previousTask = taskNumber - 1;

if (taskNumber === 1) {
  previousTask = 11;
}

if (taskNumber === 11) {
  nextTask = 1;
}

addTaskLink(previousTask)

addTaskLink(nextTask)



// import BoardComponent from './components/board.js';
// import FilterComponent from './components/filter.js';
// // import LoadMoreButtonComponent from './components/load-more-button.js';
// // import TaskEditComponent from './components/task-edit.js';
// // import TaskComponent from './components/task.js';
// // import TasksComponent from './components/tasks.js';
// // import NoTasksComponent from './components/no-tasks.js';
// import SiteMenuComponent from './components/site-menu.js';
// // import SortComponent from './components/sort.js';
// import {generateTasks} from './mock/task.js';
// import {generateFilters} from './mock/filter.js';
// import {render, RenderPosition} from './utils/render.js';

// const TASK_COUNT = 22;
// const SHOWING_TASKS_COUNT_ON_START = 8;
// const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

// // const renderTask = (taskListElement, task) => {
// //   const onEscKeyDown = (evt) => {
// //     const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

// //     if (isEscKey) {
// //       replaceEditToTask();
// //       document.removeEventListener(`keydown`, onEscKeyDown);
// //     }
// //   };

// //   const replaceEditToTask = () => {
// //     replace(taskComponent, taskEditComponent);
// //   };

// //   const replaceTaskToEdit = () => {
// //     replace(taskEditComponent, taskComponent);
// //   };

// //   const taskComponent = new TaskComponent(task);

// //   taskComponent.setEditButtonClickHandler(() => {
// //     replaceTaskToEdit();
// //     document.addEventListener(`keydown`, onEscKeyDown);
// //   });

// //   const taskEditComponent = new TaskEditComponent(task);

// //   taskEditComponent.setSubmitHandler(replaceEditToTask);

// //   render(taskListElement, taskComponent, RenderPosition.BEFOREEND);
// // };

// const renderBoard = (boardComponent, tasks) => {
//   const isAllTasksArchived = tasks.every((task) => task.isArchive);

//   if (isAllTasksArchived) {
//     render(boardComponent.getElement(), new NoTasksComponent(), RenderPosition.BEFOREEND);
//     return;
//   }

//   render(boardComponent.getElement(), new SortComponent(), RenderPosition.BEFOREEND);
//   render(boardComponent.getElement(), new TasksComponent(), RenderPosition.BEFOREEND);

//   const taskListElement = boardComponent.getElement().querySelector(`.board__tasks`);

//   let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
//   tasks.slice(0, showingTasksCount)
//     .forEach((task) => {
//       renderTask(taskListElement, task);
//     });

//   const loadMoreButtonComponent = new LoadMoreButtonComponent();
//   render(boardComponent.getElement(), loadMoreButtonComponent, RenderPosition.BEFOREEND);

//   loadMoreButtonComponent.setClickHandler(() => {
//     const prevTasksCount = showingTasksCount;
//     showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

//     tasks.slice(prevTasksCount, showingTasksCount)
//       .forEach((task) => renderTask(taskListElement, task));

//     if (showingTasksCount >= tasks.length) {
//       remove(loadMoreButtonComponent);
//     }
//   });
// };

// const siteMainElement = document.querySelector(`.main`);
// const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

// render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

// const filters = generateFilters();
// render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

// const boardComponent = new BoardComponent();
// render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

// const tasks = generateTasks(TASK_COUNT);

// renderBoard(boardComponent, tasks);


import BoardComponent from './components/board.js';
import BoardController from './controllers/board.js';
import FilterComponent from './components/filter.js';
import SiteMenuComponent from './components/site-menu.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';
import {render, RenderPosition} from './utils/render.js';

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

const filters = generateFilters();
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);

const boardController = new BoardController(boardComponent);

boardController.render(tasks);

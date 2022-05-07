import { Categories } from 'util/enum';

export interface ITask {
  category: Categories,
  text: string,
}

export interface ITaskItem extends ITask {
  id: string
  completed: boolean
}

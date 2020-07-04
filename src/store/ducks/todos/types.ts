export enum TodosTypes {
  LOAD_REQUEST = '@todos/LOAD_REQUEST',
  LOAD_SUCCESS = '@todos/LOAD_SUCCESS',
  LOAD_FAILURE = '@todos/LOAD_FAILURE',
}

/**
 * Data Types
 */
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

/**
 * State Types
 */
export interface TodosState {
  readonly data: Todo[];
  readonly loading: boolean;
  readonly error: boolean;
}

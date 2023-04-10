// laver nyt costum hook
import create from 'zustand'; 
import { persist } from 'zustand/middleware';

export interface Todo{
    id: number;
    text: string; 
    done: boolean;
}

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));


const removeTodo = (todos: Todo[], id: number): Todo[] =>
todos.filter((todo) => todo.id !== id);


// laver en type til Store
type TodoStore = { 
  todos: Todo[];
  newTodo: string;
  setTodos: (todos: Todo[]) => void;
  addTodo: () => void;
  updateTodo: (id: number, text: string) => void;
  removeTodo: (id: number) => void;
  setNewTodo: (newTodo: string) => void; 
}; 
  
export const useStore = create<TodoStore>()(
  persist(
    (set) => ({
    todos: [],
    newTodo: '',
    setTodos: (todos: Todo[]) =>
    set((state) => ({
      ...state,
      todos,
    })),

     
      addTodo: () =>
      set((state) => ({
        ...state,
        todos: addTodo(state.todos, state.newTodo),
        newTodo: '',
      })),

      setNewTodo: (newTodo: string) =>
      set((state) => ({
        ...state,
        newTodo,
      })),


      updateTodo: (id: number, text: string) =>
      set((state) => ({
        ...state,
        todos: updateTodo(state.todos, id, text),
      })),
    
      removeTodo: (id: number) =>
      set((state) => ({
        ...state,
        todos: removeTodo(state.todos, id),
      })),

       
  }),
    {
      name: 'todo-storage',
    }
)
);



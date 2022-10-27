export const validateTodo = todo => {
  return todo.replace(/ /g, '').length >= 3;
};

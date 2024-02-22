import {
  ADD_ARTICLE,
  ADD_LIKE,
  DELETE_ARTICLE,
  ADD_DISLIKE,
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
  EDIT_TODO,
  EDIT_ARTICLE,
} from "../Constants/actions-types"
export const addPost = (newPost) => {
  return {
    type: ADD_ARTICLE,
    payload: newPost,
  }
}
export const deletePost = (id) => {
  return {
    type: DELETE_ARTICLE,
    payload: id,
  }
}
export const addLike = (id) => {
  return {
    type: ADD_LIKE,
    payload: id,
  }
}
export const addDislike = (id) => {
  return {
    type: ADD_DISLIKE,
    payload: id,
  }
}
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  }
}
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}
export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    payload: id,
  }
}
export const editTodo = (id, description) => {
  console.log("od", id)

  return {
    type: EDIT_TODO,
    payload: id,
    desc: description,
  }
}
export const editArticle = (id, title, content) => {
  return {
    type: EDIT_ARTICLE,
    payload: id,
    title: title,
    content: content,
  }
}

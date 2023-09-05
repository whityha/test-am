import { Card } from "../Card"
import { Header } from "../Header"
import { Container } from "./styled"
import { useCallback, useEffect, useRef, useState } from "react"
import axios from "axios"

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>(),
        [pageNumber, setPageNumber] = useState(1),
        observer = useRef<IntersectionObserver>(),
        [isLoading, setIsLoading] = useState(false);

  const lastCardRef = useCallback((node: HTMLDivElement) => {
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) {
        setPageNumber(prev => prev + 1)
      }
    })
    if(node) observer.current.observe(node)
  }, [todos])

  const addTodos = useCallback((pgNumber: number) => {
    if(!pageNumber) return;
    setIsLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${pgNumber}&_limit=6`).then((response) => {
      setTimeout(() => {
        setTodos(prevTodos => prevTodos ? [...prevTodos, ...response.data] : response.data)
        setIsLoading(false);
      }, 1000)}) // искусственная задержка
  }, []);

  useEffect(() => {
    addTodos(pageNumber)
  }, [pageNumber, addTodos])

  return (
    <Container>
       <Header todosCount={todos?.length || 0} />
       {todos && todos.map(({id, completed, title}, index) => {
        if(todos.length - 1 === index) return <Card ref={lastCardRef} key={id} checked={completed} title={title} />
        return <Card key={id} checked={completed} title={title} />
        })}
        {isLoading && 'Loading...'}
        </Container>
  )
}

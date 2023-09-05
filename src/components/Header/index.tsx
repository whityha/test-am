import { AddTodoButton, Container, Title, TotalTodos } from "./styled"

interface Header {
    todosCount: number;
}

export const Header = ({todosCount}: Header) => {
    return <Container>
        <Title>Today</Title>
        <AddTodoButton />
        <TotalTodos>{todosCount}</TotalTodos>
    </Container>
}
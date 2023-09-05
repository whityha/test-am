import { styled } from "styled-components";

export const Container = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;
    background: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    padding: 5px;
    & > :nth-child(1) {
        margin-right: auto;
    }
`

export const Title = styled.h4`
    margin: 0;
    color: #50B810;
;    
`

export const AddTodoButton = styled.button`
    position: relative;
    width: 20px;
    aspect-ratio: 1;
    background: #EBEEF6;
    border-radius: 4px;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 12px;
        height: 2px;
        background: #3D8FEC;
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 2px;
        height: 12px;
        background: #3D8FEC;
    }
`

export const TotalTodos = styled.div`
    width: 20px;
    aspect-ratio: 1;
    border: 1px solid #7B8AAB;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
`
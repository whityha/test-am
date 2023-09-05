import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 260px;
    height: 700px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 7px;
    };
    &::-webkit-scrollbar-track {
        background: white;
        border: 1px solid #EBEEF6;
        border-radius: 50px;

    };
    &::-webkit-scrollbar-thumb {
        background: #EBEEF6;
        border-radius: 50px;
    }
`
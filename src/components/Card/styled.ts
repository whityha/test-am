import { css, styled } from "styled-components";

export const Container = styled.div`
    position: relative;
    margin: 4px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 7px;
    box-shadow: 0px 1px 2px 0px #D0DAEB, 0px 0px 2px 0px #EEF4FE;
    background: white;
    gap: 8px;
    text-align: start;
    &:after {
        content: '';
        position: absolute;
        left: -4px;
        top: -4px;
        right: 0;
        bottom: 0;
        background: #F4F8FF;
        width: calc(100% + 8px);
        height: calc(100% + 8px);
        border-radius: 7px;
        z-index: -1;
    }
`

export const Title = styled.label`
    color: #3D8FEC;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    max-height: 56px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
`

export const DateContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const Description = styled.div`
    color: #555555;
    font-size: 13px;
    font-weight: 500;
    line-height: 19px;
    max-height: 19px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Tags = styled.div`
    display: flex;
    gap: 4px;
`


const TagsVariants = {
    base: css`
        color: #616C82;
        background: #EBEEF6;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            width: 10px;
            height: 100%;
            left: 96%; 
            top: 0;
            color: grey;
            background: url('/rectangle.svg') no-repeat center center;
        }
    `,
    color: css`
        color: white;
        background: #B233A6;
    `
}
export const Tag = styled.div<{variant: 'base' | 'color'}>`
    border-radius: 4px;
    padding: 1px 6px 2px 6px;
    font-size: 12px;
    background: gray;
    ${({variant}) => TagsVariants[variant]}
`

export const Date = styled.div`
    font-size: 13px;
    font-weight: 600;
    color: #50B810;
;
`

export const CheckBox = styled.input.attrs({type: "checkbox"})`
    margin: 0;
    margin-right: 5px;
`

export const Footer = styled.footer`
    display: flex;
    & > :nth-child(2) {
        margin-left: auto;
    }
`

export const Photo = styled.img`
    width: 24px;
    aspect-ratio: 1;
    border: none;
    border-radius: 50%;
`
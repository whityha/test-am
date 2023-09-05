import { forwardRef, useMemo, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { Container, DateContainer, Description, DescriptionContainer, Tag, Tags, Title, Date, CheckBox, Footer, Photo } from "./styled"
import { faker } from '@faker-js/faker';

export const Card = forwardRef<HTMLDivElement, {checked?: boolean | undefined; title?: string}>((props, ref) => {
    const {checked, title} = props;
    const [checkedState, setChecked] = useState(checked)
    const [startDate, endDate, description, tags] = useMemo(() => [formatDate(faker.date.anytime()), formatDate(faker.date.anytime()), faker.lorem.lines(), [faker.word.adjective({ length: { min: 5, max: 7 }}), faker.word.adjective({ length: { min: 5, max: 7 }})]], [])
    return (
        <Container ref={ref}>
            <Title>
                <CheckBox checked={checkedState} onChange={(e) => setChecked(e.currentTarget.checked)} />
                {title}
            </Title>
            <DescriptionContainer>
                <DateContainer>
                    <Date>{startDate}</Date>
                    <Date>{endDate}</Date>
                </DateContainer>                
                <Description>{description}</Description>
            </DescriptionContainer>
            <Footer>
                <Tags>
                    <Tag variant='color'>
                    {tags[0]}
                    </Tag>
                    <Tag variant='base'>
                    {tags[1]}

                    </Tag>
                </Tags>
                <Photo src="/Img.png" alt='photoUser' />
            </Footer>
        </Container>
    )
})
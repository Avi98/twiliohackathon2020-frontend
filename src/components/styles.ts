import Styled from 'styled-components/macro';

export const Container = Styled.article`
    
    box-shadow: 0 2rem 2.4rem rgba(0,0,0,0.1);
    width: 60%;
    border-radius: 0.8rem;
    display:flex;
    flex-direction: colum;
    background-color: var(--base-white-color);

`
export const ImageSection = Styled.div`
        width: 50%;
        background-color: var(--base-green-color);

`
export const Section = Styled.section`
        color: var(--base-title-color);
        background-color: var(--base-white-color);
        margin-left: 2rem;
        >h2{
            font-size: 2.1rem;
            font-weight: 400;
        }
        >h3{
            font-size: 1.4rem;
            font-weight: 400;
        }


`

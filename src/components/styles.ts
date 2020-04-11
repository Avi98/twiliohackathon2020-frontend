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
        margin-left: 2em;
        >h2{
            font-size: 3.1em;
            font-weight: 400;
        }
        >h3{
            font-size: 2.4em;
            font-weight: 400;
        }


`
export const SubmitButton = Styled.button`
    background-color: var(--base-title-color);
    color: var(--base-white-color);
    padding: 0.5rem 4.5rem;
    font-size: 1em;
    font-weight: 200;
    margin: 40px 0 0 0;
    cursor: pointer;

`
export const FormCol = Styled.form`
    display:flex;
    flex-direction: column;
    margin-bottom: 1em;
    .message{
        font-size: 0.7em;
    }.link{
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
    }
`
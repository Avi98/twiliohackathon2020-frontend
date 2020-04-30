import Styled from 'styled-components/macro';

export const Container = Styled.article`
    width: 60%;
    border-radius: 0.8rem;
    display:flex;
    box-shadow: 0 2rem 2.4rem rgba(0,0,0,0.1);
    background-color: var(--base-white-color);

    @media (max-width: 768px) {
    --base-title-color: #feeeee;
    flex-direction: column;
    background-color: var(--base-green-color);
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
  }

  @media (min-width: 1200px){
    height:470px;

  }
    

`
export const ImageSection = Styled.div`
        width: 50%;
        background-color: var(--base-green-color);

`
export const Section = Styled.section`
        color: var(--base-title-color);
        background-color: var(--c);
        margin-left: 2em;
        position: relative;
        @media (max-width: 768px) {
             background-color: var(--base-green-color);
        }        
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
    @media (max-width: 768px){
        background-color: var(--base-button-color);
        color: var(--base-title-color);
    }
    &&&{
        >svg{
        height: 20px;
        width: 20px;

    }
}

`

export const Footer = Styled.footer`
    @media (min-width: 768px){
    position: absolute;
    bottom:0;
    }
`
export const FormCol = Styled.div`
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
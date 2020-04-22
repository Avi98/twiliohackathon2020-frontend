
import Styled from 'styled-components/macro';
import defaultImage from '../assests/default-profile.png'

// const test = ''
// const imageUrl = (p:{selectedImg?:string})=> p.selectedImg ? `url(${p.selectedImg})` : `url(${defaultImage})`

export const AvatarContainer = Styled.div`
position:relative;
max-width: 50px;
`
export const EditIcon = Styled.div`
position:absolute;
left: 70px;
z-index: 2;
>input{
    height: 110px;
    width: 140px;
    position: absolute;
    right: 0px;
    opacity: 0;
}
>label{
            
            display: inline-block;
            width: 34px;
            height: 34px;
            margin-bottom: 0;
            border-radius: 100%;
            background: #FFFFFF;
            border: 1px solid transparent;
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
            cursor: pointer;
            font-weight: normal;
            transition: all .2s ease-in-out;
            &:hover {
                background: #f1f1f1;
                border-color: #d6d6d6;
            }
    ::after {
                content: "\f040";
                font-family: 'FontAwesome';
                color: #757575;
                position: absolute;
                top: 10px;
                left: 0;
                right: 0;
                text-align: center;
                margin: auto;
            }
}

`
export const Preview = Styled.div`
width:92px;
height: 92px;
position:relative;
border-radius: 100%;
border: 6px solid #F8F8F8;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`

export const SelectedImg = Styled.img`
border-radius: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
/* background-image: ; */
height: 100%;
width: 100%;

}
`
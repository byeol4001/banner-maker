import styled, { keyframes } from "styled-components";

export const MainWrap = styled.div`
    width:100vw;
    height:max-content;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    padding: 70px 0;
    background: ${props => props.theme.bgColor};
    @media (max-width: 950px) {
        width: calc(100vw - 60px);
        padding: 70px 30px;
    }
`

export const Title = styled.div`
    font-size:60px;
    font-weight: 900;
    margin-bottom:40px;
    color: ${props => props.theme.fontColor};
    font-family: 'Montserrat', sans-serif;
`

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    max-width:800px;
    padding-bottom: 40px;
    & > div:first-child{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 530px;
    }
    @media (max-width: 850px) {
        width:90%;
        flex-direction: column;
        gap:50px;
        & > div:first-child{
            width: 100%;
        }
    }
`

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    label{
        font-size: 17px;
        margin-bottom: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight:200;
        color: ${props => props.theme.fontColor};
    }
    input{
        max-width:600px;
        padding: 20px;
        font-size: 20px;
        border-radius: 10px;
        border:none;
        background: ${props => props.theme.fontColor};
        color: #fff;
        box-shadow: 8px 9px 16px 0px #8CAAA2;
        &:focus{
            border:none;
        }
        &::placeholder{
            color:#fff;
            opacity:0.4;
        }
    }
    @media (max-width: 600px) {
        align-items:center;
        input {
            width:100%;
            max-width:100%;
        }
    }
`

export const BannerBox = styled.div`
    width:100%;
    max-width:860px;
    height:422px;
    position:relative;
    background:#252526;
    box-shadow: #ddd 7px 7px 20px;
`


export const BannerTitle = styled.div`
    position:absolute;
    color:#fff;
    left: 50%;
    transform: translate(-50%,0);
    width: fit-content;
    top:${(props:{top? :number}) => props.top+'px'};
    font-weight:700;
`

export const BannerSub = styled(BannerTitle)`
    font-weight:100;
    font-family: 'Cafe24Ohsquareair',sans-serif;
`


export const Line = styled.div`
    width:100%;
    height:40px;
    position:absolute;
    bottom:0;
    left:0;
    background:${props => props.color};
`

export const CopyButton = styled.div`
    padding: 9px 13px;
    border:3px solid;
    border-color :${props => props.theme.fontColor};
    background :${(props:{copyings? :boolean}) => props.copyings ? '#2C705E' : "#EBE7E1"};
    color :${(props:{copyings? :boolean}) => props.copyings ? '#EBE7E1' : "#2C705E"};
    font-weight:900;
    font-family: inherit;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s ease-in-out ;
    &:hover {
        transform: translate(3px, -3px);
    }

`

export const Devider = styled.div`
    max-width:860px;
    width:100%;
    height:2px;
    margin:15px 0;
    background :${props => props.theme.fontColor}
`

export const PrevWrap = styled.div`
    max-width: 840px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.fontColor};
    & > h5 {
        font-family: inherit;
        font-weight:700;
        font-size:25px;
    }
`

export const FooterWrap = styled.div`
    padding: 30px 0;
    color: ${props => props.theme.fontColor};

`

const effect = keyframes`
    0% {
        opacity:1;
    }
    50% {
        opacity:0.6;
        transform: translate(0, -5px)
    }
    100% {
        opacity:1;
    }
`

export const LinkWrap = styled.div`
    display:flex;
    gap:10px;
    align-items: center;
    justify-content: center;
    margin-bottom:20px;
    & > a{
        text-decoration: none;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        color:#fff;
        font-family: 'Montserrat',sans-serif;
        font-weight: 900;
        font-size: 14px;
        animation: ${effect} 2s linear infinite;
        &:first-child{
            background: #4063D4;
        }
        &:last-child{
            background: #1c1c1c;
        }
    }
`

export const CumtomBox = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 15px;
    @media (max-width: 850px) {
        width: 100%;
        flex-direction: column;
    }
`

export const CustomInput = styled.input.attrs({type:'number'})`
    width: auto!important;
    @media (max-width: 600px) {
        width: 100%!important;
    }

`
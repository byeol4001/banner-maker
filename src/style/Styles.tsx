import styled from "styled-components";

export const MainWrap = styled.div`
    width:100vw;
    height:max-content;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background: ${props => props.theme.bgColor};
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
        width:100%;
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
`

export const BannerBox = styled.div`
    width:100%;
    max-width:860px;
    height:422px;
    position:relative;
    background:#252526;
    box-shadow: #ddd 7px 7px 20px;
}
`

export const BannerTitle = styled.div`
    position:absolute;
    color:#fff;
    top:120px;
    left: 50%;
    transform: translate(-50%,0);
    width: fit-content;
    font-size:60px;
    font-weight:700;
`

export const BannerSub = styled(BannerTitle)`
    top:240px;
    font-size:35px;
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
    color: ${props => props.theme.fontColor};
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

import styled from "styled-components";

const MainWrap = styled.div`
    width:100vw;
    height:max-content;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`

const Title = styled.div`
    font-size:60px;
    font-weight: 900;
    margin-bottom:40px;
`

const InputBox = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    width:100%;
    max-width:700px;
    padding-top:50px;
`

const Input = styled.div`
    display: flex;
    flex-direction: column;
    label{
        font-size: 17px;
        margin-bottom: 5px;
    }
    input{
        width:100%;
        max-width:600px;
        padding: 20px;
        font-size: 20px;
        border-radius: 10px;
    }
`

const BannerBox = styled.div`
    width:860px;
    max-width:860px;
    height:422px;
    position:relative;
    background:#252526;
    box-shadow: #ddd 7px 7px 20px;
}
`

const BannerTitle = styled.div`
    position:absolute;
    color:#fff;
    top:120px;
    left: 50%;
    transform: translate(-50%,0);
    width: fit-content;
    font-size:60px;
    font-weight:700;
`

const BannerSub = styled(BannerTitle)`
    top:240px;
    font-size:35px;
    font-weight:100;
    font-family: 'Cafe24Ohsquareair',sans-serif;
`


const Line = styled.div`
    width:100%;
    height:40px;
    position:absolute;
    bottom:0;
    left:0;
    background:#B9EB46;
`

export {MainWrap,Title,InputBox,Input,BannerBox,BannerTitle,BannerSub,Line}
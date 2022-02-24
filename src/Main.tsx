
import { useState } from "react";
import { TwitterPicker } from 'react-color';

import {MainWrap,Title,InputBox,Input,BannerBox,BannerTitle,BannerSub,Line} from "./style/Styles"


export default function Main() {
  const [title,setTitle] = useState("")
  const [sub,setSub] = useState("")
  const [lineColor, setLineColor] = useState("#fff")
  const handleTitle = (e: React.FormEvent<HTMLInputElement>)=>{
    setTitle(e.currentTarget.value)
  }
  const handleSub = (e: React.FormEvent<HTMLInputElement>)=>{
    setSub(e.currentTarget.value)
  }

  const handleChangeComplete = (color:any) => {
    setLineColor(color.hex);
    console.log(typeof color.hex)
  };
  return <MainWrap>
    <Title>Banner Maker</Title>
    <BannerBox>
      <BannerTitle>{title}</BannerTitle>
      <BannerSub>{sub}</BannerSub>
      <Line />
    </BannerBox>
    <InputBox>
      <Input>
        <label htmlFor="title">제목</label>
        <input onChange={handleTitle} id="title" type="text"/>
      </Input>
      <Input>
        <label htmlFor="sub-title">설명</label>
        <input onChange={handleSub} id="sub-title" type="text"/>
      </Input>
    <TwitterPicker color={lineColor}
        onChangeComplete={ handleChangeComplete }/>
    </InputBox>
  </MainWrap>;
}

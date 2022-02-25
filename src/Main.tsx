
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import * as clipboard from 'clipboard-polyfill';
import { ClipboardItem } from 'clipboard-polyfill';

import { MainWrap, Title, InputBox, Input, BannerBox, BannerTitle, BannerSub, Line, CopyButton, Devider, PrevWrap} from "./style/Styles"


export default function Main() {
  const [title,setTitle] = useState("")
  const [sub,setSub] = useState("")
  const [lineColor, setLineColor] = useState("#2C705E")
  const copyBanner:any = useRef()
  const handleTitle = (e: React.FormEvent<HTMLInputElement>)=>{
    setTitle(e.currentTarget.value)
  }
  const handleSub = (e: React.FormEvent<HTMLInputElement>)=>{
    setSub(e.currentTarget.value)
  }

  const handleChangeComplete = (color:any) => {
    setLineColor(color);
  };

  const copyToClipboard = () =>{
    html2canvas(copyBanner.current).then((canvas: HTMLCanvasElement) => {
      canvas.toBlob((blob:any) => {
        clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      })
  });
  }


  return <MainWrap>
    <Title>Banner Maker</Title>
    <InputBox>
    <div>
      <Input>
        <label htmlFor="title">Title</label>
        <input onChange={handleTitle} id="title" placeholder="제목 입력" type="text"/>
      </Input>
      <Input>
        <label htmlFor="sub-title">Desciption</label>
        <input onChange={handleSub} id="sub-title" placeholder="설명 입력" type="text"/>
      </Input>
      </div>
      <Input>
        <label htmlFor="sub-title">Select Bottom Color</label>
        <HexColorPicker color={lineColor} onChange={handleChangeComplete} />
      </Input>
    </InputBox>
    <PrevWrap>
      <h5>Preview</h5>
      <CopyButton onClick={copyToClipboard}>copy</CopyButton>
    </PrevWrap>
    <Devider/>
    <BannerBox ref={copyBanner}>
      <BannerTitle>{title}</BannerTitle>
      <BannerSub>{sub}</BannerSub>
      <Line color={lineColor}/>
    </BannerBox>
    <Devider/>    
  </MainWrap>;
}

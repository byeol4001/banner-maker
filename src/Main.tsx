
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import * as clipboard from 'clipboard-polyfill';
import { ClipboardItem } from 'clipboard-polyfill';

import { Title, InputBox, Input, BannerBox, BannerTitle, BannerSub, Line, CopyButton, Devider, PrevWrap, CumtomBox, CustomInput} from "./style/Styles"
import { useRecoilState } from "recoil";
import { TitleCustom, DescriptionCustom } from './atom/atom'




export default function Main() {
  const [title,setTitle] = useState("")
  const [sub,setSub] = useState("")
  const [lineColor, setLineColor] = useState("#2C705E")
  const [copying,setCopying] = useState(false)
  const [titleStyle,setTitleStyle] = useRecoilState(TitleCustom)
  const [descriptionStyle,setDescriptionStyle] = useRecoilState(DescriptionCustom)

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
    setCopying(true)
    html2canvas(copyBanner.current).then((canvas: HTMLCanvasElement) => {
      canvas.toBlob((blob:any) => {
        clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        setTimeout(()=>{
          setCopying(false)
        },1300)
      })
  });
  }

  const handleTitleStyleTop = (e: React.FormEvent<HTMLInputElement>) => {
    setTitleStyle((oldValue) => {
      const newTop = {top: parseInt(e.currentTarget.value)}
      return {...oldValue, ...newTop}
    })
  }

  const handleTitleStyleFont = (e: React.FormEvent<HTMLInputElement>) => {
    setTitleStyle((oldValue) => {
      const newFontsize = {fontsize: parseInt(e.currentTarget.value)}
      return {...oldValue, ...newFontsize}
    })
  }


  const handleDesciptionStyleTop = (e: React.FormEvent<HTMLInputElement>) => {
    setDescriptionStyle((oldValue) => {
      const newTop = {top: parseInt(e.currentTarget.value)}
      return {...oldValue, ...newTop}
    })
  }

  const handleDesciptionStyleFont = (e: React.FormEvent<HTMLInputElement>) => {
    setDescriptionStyle((oldValue) => {
      const newFontsize = {fontsize: parseInt(e.currentTarget.value)}
      return {...oldValue, ...newFontsize}
    })
  }


  return <>
    <Title>Banner Maker</Title>
    <InputBox>
    <div>
      <Input>
        <label htmlFor="title">Title</label>
        <input onChange={handleTitle} id="title" placeholder="제목 입력" type="text"/>
        <CumtomBox>
          <Input>
            <label htmlFor="title-top-custom">Title Top</label>
            <CustomInput id="title-top-custom" onChange={handleTitleStyleTop} defaultValue={titleStyle.top} />
          </Input>
          <Input>
            <label htmlFor="title-fontsize-custom">Title Font Size</label>
            <CustomInput id="title-fontsize-custom" onChange={handleTitleStyleFont} defaultValue={titleStyle.fontsize} />
          </Input>
        </CumtomBox>
      </Input>
      <Input>
        <label htmlFor="sub-title">Description</label>
        <input onChange={handleSub} id="sub-title" placeholder="설명 입력" type="text"/>
        <CumtomBox>
          <Input>
            <label htmlFor="Description-top-custom">Description Top</label>
            <CustomInput id="Description-top-custom" onChange={handleDesciptionStyleTop} defaultValue={descriptionStyle.top} />
          </Input>
          <Input>
            <label htmlFor="Description-fontsize--custom">Description Font Size</label>
            <CustomInput id="Description-fontsize--custom" onChange={handleDesciptionStyleFont} defaultValue={descriptionStyle.fontsize} />
          </Input>
        </CumtomBox>
      </Input>
      </div>
      <Input>
        <label htmlFor="sub-title">Select Bottom Color</label>
        <HexColorPicker color={lineColor} onChange={handleChangeComplete} />
      </Input>
    </InputBox>
    <PrevWrap>
      <h5>Preview</h5>
      <CopyButton copyings={copying} onClick={copyToClipboard}>{copying ? 'compelete COPY 🥳' :'copy'}</CopyButton>
    </PrevWrap>
    <Devider/>
    <BannerBox ref={copyBanner}>
      <BannerTitle style={{fontSize:titleStyle.fontsize}} {...titleStyle}>{title}</BannerTitle>
      <BannerSub style={{fontSize:descriptionStyle.fontsize}} {...descriptionStyle}>{sub}</BannerSub>
      <Line color={lineColor}/>
    </BannerBox>
    <Devider/>
  </>;
}

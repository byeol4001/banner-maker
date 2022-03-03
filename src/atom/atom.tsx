import { atom } from "recoil";

export const TitleCustom = atom({
    key: 'TitleCustom', 
    default: {
        fontsize: 50,
        top: 110,
    }
  });

export const DescriptionCustom = atom({
    key: 'DescriptionCustom', 
    default: {
        fontsize: 35,
        top: 250,
    }
  });
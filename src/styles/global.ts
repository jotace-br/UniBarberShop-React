import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* .h1{ font: ${(props) => props.theme.text.h1}}
  .h2{ font: ${(props) => props.theme.text.h2}}
  .h3{ font: ${(props) => props.theme.text.h3}}
  .h4{ font: ${(props) => props.theme.text.h4}}
  .h5{ font: ${(props) => props.theme.text.h5}}
  .l{ font: ${(props) => props.theme.text.text_large}}
  .lb{ font: ${(props) => props.theme.text.text_large_bold}}
  .m{ font: ${(props) => props.theme.text.text_medium}}
  .mb{ font: ${(props) => props.theme.text.text_medium_bold}}
  .s{ font: ${(props) => props.theme.text.text_small}}
  .sb{ font: ${(props) => props.theme.text.text_small_bold}}
  .sub{ font: ${(props) => props.theme.text.subtitle}}
  .subB{ font: ${(props) => props.theme.text.subtitle_bold}}
  .subSB{ font: ${(props) => props.theme.text.subtitle_small}}
  .subSB{ font: ${(props) => props.theme.text.subtitle_small_bold}} */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, input, button{
    font-family: Poppins, sans-serif;
  }
  p{
    margin-bottom: 0;
    color: ${(props) => props.theme.colors.black10} !important;
  }
  .ant-select-dropdown{
    background-color: ${(props) => props.theme.colors.black70} !important;
    .ant-select-item{color: ${(props) =>
      props.theme.colors.black10} !important;}
      .ant-select-item-option-active:not(.ant-select-item-option-disabled){
        background-color: ${(props) => props.theme.colors.black60} !important;
      }
      .ant-select-item-option-selected:not(.ant-select-item-option-disabled){
        background-color: ${(props) => props.theme.colors.black60} !important;
      }
  }
    
`;
export default GlobalStyles;
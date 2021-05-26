import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* .h1{ font: ${props => props.theme.text.h1}}
  .h2{ font: ${props => props.theme.text.h2}}
  .h3{ font: ${props => props.theme.text.h3}}
  .h4{ font: ${props => props.theme.text.h4}}
  .h5{ font: ${props => props.theme.text.h5}}
  .l{ font: ${props => props.theme.text.text_large}}
  .lb{ font: ${props => props.theme.text.text_large_bold}}
  .m{ font: ${props => props.theme.text.text_medium}}
  .mb{ font: ${props => props.theme.text.text_medium_bold}}
  .s{ font: ${props => props.theme.text.text_small}}
  .sb{ font: ${props => props.theme.text.text_small_bold}}
  .sub{ font: ${props => props.theme.text.subtitle}}
  .subB{ font: ${props => props.theme.text.subtitle_bold}}
  .subSB{ font: ${props => props.theme.text.subtitle_small}}
  .subSB{ font: ${props => props.theme.text.subtitle_small_bold}} */
  /* Scrollbar */
  * {
    scrollbar-width: thin;          /* "auto" or "thin"  */
    scrollbar-color: ${props => props.theme.colors.primary100} ${props =>
  props.theme.colors.black80};   /* scroll thumb & track */
  }

  /* Works on Chrome/Edge/Safari */
  *::-webkit-scrollbar {
    width: 7px;
    height: 7px;             /* width of the entire scrollbar */
  }
  *::-webkit-scrollbar-track {
    background: ${props =>
      props.theme.colors.black80};        /* color of the tracking area */
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${props =>
      props.theme.colors.primary100};    /* color of the scroll thumb */
    border-radius: 40px;       /* roundness of the scroll thumb */
    border: 1px solid ${props =>
      props.theme.colors.black80};  /* creates padding around scroll thumb */
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, input, button{
    font-family: Poppins, sans-serif;
  }
  html{
    overflow-x: hidden;
  }
  p{
    margin-bottom: 0;
    color: ${props => props.theme.colors.black10} !important;
  }
  .ant-select-dropdown{
    background-color: ${props => props.theme.colors.black70} !important;
    .ant-select-item{color: ${props => props.theme.colors.black10} !important;}
      .ant-select-item-option-active:not(.ant-select-item-option-disabled){
        background-color: ${props => props.theme.colors.black60} !important;
      }
      .ant-select-item-option-selected:not(.ant-select-item-option-disabled){
        background-color: ${props => props.theme.colors.black60} !important;
      }
  }
  .ant-notification .ant-notification-notice{
    padding: 8px;
    background-color: ${props => props.theme.colors.black90} !important;

    .ant-notification-notice-close{
      color: ${props => props.theme.colors.black60};
      font-weight: 900;
    }
    .ant-notification-notice-with-icon{
      box-shadow: 8px 0px 0px #000 inset;
      padding-left: 12px;
      .ant-notification-notice-icon{
        margin: 8px;
      }
      .ant-notification-notice-message{
        font: ${props => props.theme.text.subtitle_bold};
        color: ${props => props.theme.colors.white};
      }
      .ant-notification-notice-description{
        font: ${props => props.theme.text.subtitle};
        color: ${props => props.theme.colors.black20} !important;
      }
    }
  }
  .ant-notification .ant-notification-notice.ant-notification-notice-success{
    .ant-notification-notice-with-icon{
      box-shadow: 4px 0px 0px #58C86A inset;
      .ant-notification-notice-icon svg{
        background-color: #58C86A;
        border-radius: 50%;
        color: white;
      }
    }
  }
  .ant-notification .ant-notification-notice.ant-notification-notice-warning{
    .ant-notification-notice-with-icon{
      box-shadow: 4px 0px 0px #D6C52E inset;
       .ant-notification-notice-icon svg{
        background-color: #D6C52E;
        border-radius: 50%;
        color: white;
      }
    }
  }
  .ant-notification .ant-notification-notice.ant-notification-notice-info{
    .ant-notification-notice-with-icon{
      box-shadow: 4px 0px 0px #428BC1 inset;
       .ant-notification-notice-icon svg{
        background-color: #428BC1;
        border-radius: 50%;
        color: white;
      }
    }
  }
  .ant-notification .ant-notification-notice.ant-notification-notice-error{
    .ant-notification-notice-with-icon{
      box-shadow: 4px 0px 0px #FF7070 inset;
      .ant-notification-notice-icon svg{
        background-color: #FF7070;
        border-radius: 50%;
        color: white;
      }
    }
  }

`
export default GlobalStyles

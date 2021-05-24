import styled from 'styled-components'

export const ContainerBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  p {
    font: ${props => props.theme.text.text_medium};
    color: ${props => props.theme.colors.black10};
  }
  .ant-progress-line {
    width: 70%;
  }
  .ant-progress-line .ant-progress-outer .ant-progress-inner,
  .ant-progress-line .ant-progress-outer .ant-progress-inner .ant-progress-bg {
    height: 26px !important;
  }
  .ant-progress-line .ant-progress-outer .ant-progress-inner {
    background-color: ${props => props.theme.colors.black70};
    overflow: visible;
  }
  .ant-progress-line .ant-progress-outer .ant-progress-inner .ant-progress-bg {
    background: rgb(230, 154, 39);
    background: linear-gradient(
      270deg,
      rgba(230, 154, 39, 1) 0%,
      rgba(230, 190, 39, 1) 100%
    );
    box-shadow: 0px 0px 10px #e6a827;
  }
  .ant-progress-line .ant-progress-text {
    color: ${props => props.theme.colors.black10};
    font: ${props => props.theme.text.subtitle_bold};
    position: relative;
    right: 45px;
    top: -1px;
  }
`
export const WrapperProgress = styled.div`
  padding: 60px 0;
`

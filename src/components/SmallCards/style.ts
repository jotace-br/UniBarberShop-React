import { Progress } from 'antd'
import { ProgressProps } from 'antd/lib/progress'
import styled from 'styled-components'

export const SmallCard = styled.div`
  min-width: 320px;
  width: auto;
  height: 108px;
  background-color: ${props => props.theme.colors.black100};
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.15);
  margin-right: 26px;
  justify-content: space-between;
`
export const CardIcon = styled.div`
  flex-shrink: 0;
  margin: 0 16px;
  width: 62px;
  height: 62px;
  background-color: transparent;
  border: 3px solid ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px ${props => props.color};
  box-shadow: inset 0px 0px 10px 0px ${props => props.color},
    0px 0px 10px 0px ${props => props.color};
  margin-right: 25px;
  svg {
    width: 31px;
    height: 31px;
    color: ${props => props.color};
  }
`
export const SmallCardText = styled.div`
  /* width: 70%; */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p:first-child {
    font: ${props => props.theme.text.text_large_bold};
  }
  p:last-child {
    font: ${props => props.theme.text.subtitle};
  }
`
export const SmallCardAction = styled.button`
  flex-shrink: 0;
  margin-right: 12px;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 12px;
  text-shadow: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.black90};
  color: #fff;
  svg {
    width: 19px;
    height: 12px;
    ${props => props.theme.colors.black10}
  }
  a {
    color: #fff;
    margin-top: 2px;
  }
  :hover {
    background-color: #777777;
    color: #fff;
  }
`

export const SmallCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  overflow-x: auto;
  padding-bottom: 12px;
  margin: 12px 0;
  /* Works on Chrome/Edge/Safari */
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px; /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.25); /* color of the tracking area */
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props =>
      props.theme.colors.primary100}; /* color of the scroll thumb */
    border-radius: 40px; /* roundness of the scroll thumb */
    border: 1px solid rgba(0, 0, 0, 0.25); /* creates padding around scroll thumb */
  }
`
export const InfoCardContainer = styled.div`
  display: flex;
  width: 100%;
`

interface ProgressBarProps extends ProgressProps {
  color: string
}
export const ProgressBar = styled(Progress)<ProgressBarProps>`
  /* top: 38px;
  right: 54px; */
  width: 85%;
  .ant-progress-text {
    font: ${props => props.theme.text.subtitle};
    color: ${props => props.theme.colors.black20};
    float: right;
    right: 24px;
    position: relative;
    width: 0px;
  }
  .ant-progress-outer {
    padding-right: 0;
    display: flex;
    width: 100%;
  }
  .ant-progress-outer .ant-progress-inner {
    overflow: visible;
    background-color: ${props => props.theme.colors.black70};
  }
  .ant-progress-outer .ant-progress-inner .ant-progress-bg {
    background-color: ${props => props.color};
    box-shadow: 0px 0px 10px ${props => props.color.concat('50')};
  }
`

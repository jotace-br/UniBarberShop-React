import { Tabs as AntdTabs } from 'antd'
import styled from 'styled-components'

const { TabPane } = AntdTabs

export const Tabs = styled(AntdTabs)`
  color: ${props => props.theme.colors.black40};
  .ant-tabs-nav {
    background-color: rgba(29, 29, 29, 0.65);
    padding: 14px 20px;
    border-radius: 8px;
    height: 56px;
  }
  .ant-tabs-nav {
    margin: 0;
  }
  .ant-tabs-tab:hover {
    color: ${props => props.theme.colors.primary80};
  }
  .ant-tabs-nav::before {
    border: none;
  }
  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 50px;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${props => props.theme.colors.white};
    font: ${props => props.theme.text.text_small_bold};
    svg {
      margin-right: 12px;
      color: ${props => props.theme.colors.primary100};
    }
  }
  .ant-tabs-tab.ant-tabs-tab .ant-tabs-tab-btn {
    svg {
      margin-right: 12px;
    }
  }
  .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
    background-color: ${props => props.theme.colors.primary100};
    border-left: 2.5em solid rgba(29, 29, 29, 1);
    border-right: 0.5em solid rgba(29, 29, 29, 1);
    height: 3px;
    border-radius: 2px;
  }
`

export const TabsPane = styled(TabPane)``

export const TabsPaneBody = styled.div`
  background: #222222;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 5px 5px;
  padding: 25px;
`

export const TabCard = styled(AntdTabs)`
  color: ${props => props.theme.colors.black40};
  .ant-tabs-nav {
    background-color: ${props => props.theme.colors.black80};
    padding: 14px 20px;
    border-radius: 8px 8px 0 0;
    height: 56px;
  }
  .ant-tabs-nav {
    margin: 0;
  }
  .ant-tabs-tab:hover {
    color: ${props => props.theme.colors.primary80};
  }
  .ant-tabs-nav::before {
    border: none;
  }
  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 50px;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${props => props.theme.colors.white};
    font: ${props => props.theme.text.text_small_bold};
  }
  .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
    background-color: ${props => props.theme.colors.primary100};
    border-left: 0.5em solid #262626;
    border-right: 0.5em solid #262626;
    height: 3px;
    border-radius: 2px;
  }
`

export const IconTab = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`

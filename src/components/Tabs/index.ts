import styled from "styled-components";
import { Tabs as AntdTabs } from "antd";

const { TabPane } = AntdTabs;

export const Tab = styled(AntdTabs)`
  color: ${props=>props.theme.colors.black40};
  .ant-tabs-nav{
    background-color: ${props=>props.theme.colors.black80};
    padding: 14px 20px;
    border-radius: 8px 8px 0 0;
    height: 56px;
  }
  .ant-tabs-nav{
    margin: 0;
  }
  .ant-tabs-tab:hover{
    color: ${props=>props.theme.colors.primary80};
  }
  .ant-tabs-nav::before{
    border: none;
  }
  .ant-tabs-tab + .ant-tabs-tab{
    margin: 0 0 0 50px;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
    color: ${props=>props.theme.colors.white};
    font: ${props=>props.theme.text.text_small_bold}
  }
  .ant-tabs-ink-bar.ant-tabs-ink-bar-animated{
    background-color: ${props=>props.theme.colors.primary100};
    border-left: 0.5em solid #262626;
    border-right: 0.5em solid #262626;
    height: 3px;
    border-radius: 2px;
  }
`;

export const TabsPane = styled(TabPane)`
  
`;

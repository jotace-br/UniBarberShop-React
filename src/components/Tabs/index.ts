import styled from "styled-components";
import { Tabs as AntdTabs } from "antd";

const { TabPane } = AntdTabs;

export const Tab = styled(AntdTabs)`
  color: ${props=>props.theme.colors.black40};
  .ant-tabs-nav{
    background-color: ${props=>props.theme.colors.black80};
    padding: 14px 20px;
    border-radius: 8px;
  }
  .ant-tabs-nav::before{
    border: none;
  }
  .ant-tabs-tab + .ant-tabs-tab{
    margin: 0 0 0 50px;
  }
`;

export const TabsPane = styled(TabPane)`
  
`;

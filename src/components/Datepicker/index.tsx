import React from "react";
import { StyledDatepicker, StyledRangePicker } from "./style";
import "moment/locale/pt-br";
import moment from 'moment';
import locale from "antd/lib/locale/pt_BR";
import { Space } from "antd";
import { ConfigProvider } from "antd";
// import { Container } from './styles';

const Datepicker: React.FC = () => {
  return (
    <ConfigProvider locale={locale}>
      <StyledDatepicker placeholder="Insira a data" format="DD/MM/YY" />
    </ConfigProvider>
  );
};

export default Datepicker;

const dateFormat = 'DD/MM/YY';

export const Rangepicker: React.FC = () => {
  return (
    <ConfigProvider locale={locale}>
      <Space direction="vertical" size={12}>
        <StyledRangePicker
          placeholder={['','']}
          defaultValue={[moment(moment(), dateFormat), moment(moment().add(1,'months'), dateFormat)]} 
          format={dateFormat}
          separator=" - "
        />
      </Space>
    </ConfigProvider>
  );
};

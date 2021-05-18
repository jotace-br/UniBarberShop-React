import React from "react";
import { StyledDatepicker, StyledRangePicker } from "./style";
import "moment/locale/pt-br";
import moment from "moment";
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

const dateFormat = "DD/MM/YY";

interface RangePickerProps {
  hackValue?: any;
  dates?: never[];
  value?: any;
  onChangeRP?: (e: any) => void;
  onCalendarChangeRP?: (e: any) => void;
  onOpenChangeRP?: (e: any) => void;
}

export const Rangepicker = ({
  hackValue,
  dates,
  value,
  onChangeRP,
  onCalendarChangeRP,
  onOpenChangeRP,
}: RangePickerProps) => {
  return (
    <ConfigProvider locale={locale}>
      <Space direction="vertical" size={12}>
        <StyledRangePicker
          placeholder={["Dt. Início", "Dt. Final"]}
          defaultValue={[
            moment(moment().add(-1, "months"), dateFormat),
            moment(moment(), dateFormat),
          ]}
          value={hackValue || value}
          onCalendarChange={onCalendarChangeRP}
          onChange={onChangeRP}
          onOpenChange={onOpenChangeRP}
          format={dateFormat}
          separator=" - "
        />
      </Space>
    </ConfigProvider>
  );
};

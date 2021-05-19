import { notification } from "antd";
// o estilo está nas cofigurações globais
const notificationStyle = {
  width: 440,
  minHeight: 49,
};

export const successNotification = (
  title: string = "",
  description: string = ""
) => {
  notification["success"]({
    message: title,
    description: description,
    style: notificationStyle,
  });
};

export const infoNotification = (
  title: string = "",
  description: string = ""
) => {
  notification["info"]({
    message: title,
    description: description,
    style: notificationStyle,
  });
};

export const warningNotification = (
  title: string = "",
  description: string = ""
) => {
  notification["warning"]({
    message: title,
    description: description,
    style: notificationStyle,
  });
};

export const errorNotification = (
  title: string = "",
  description: string = ""
) => {
  notification["error"]({
    message: title,
    description: description,
    style: notificationStyle,
  });
};

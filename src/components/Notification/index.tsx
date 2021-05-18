import { notification } from "antd";

export const successNotification = (
  title: string = "",
  description: string = ""
) => {
  notification["success"]({
    message: title,
    description: description,
  });
};

export const infoNotification = (
  title: string = "",
  description: string = ""
) => {
  notification["info"]({
    message: title,
    description: description,
  });
};

export const warningNotification = (
  title: string = "",
  description: string = ""
) => {
  notification["warning"]({
    message: title,
    description: description,
  });
};

export const errorNotification = (
  title: string = "",
  description: string = ""
) => {
  notification["error"]({
    message: title,
    description: description,
  });
};

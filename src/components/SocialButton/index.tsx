import React from "react";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";
import { SocialBtn } from "./style";

// import { Container } from './styles';
interface Props {
  logo?: any;
  brandName?: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
}
const SocialButton: React.FC<Props> = ({
  brandName,
  logo,
  onClick,
  disabled,
}) => {
  return (
    <SocialBtn onClick={onClick} disabled={disabled}>
      {logo}
      Continue com {brandName}
    </SocialBtn>
  );
};

export default SocialButton;

export const ButtonGoogle: React.FC<Props> = ({ onClick, disabled }) => {
  return (
    <SocialBtn onClick={onClick} disabled={disabled}>
      <GoogleLogo />
      Continue com Google
    </SocialBtn>
  );
};

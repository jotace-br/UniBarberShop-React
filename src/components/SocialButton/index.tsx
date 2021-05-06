import React from 'react';
import {ReactComponent as GoogleLogo} from "../../assets/google.svg";
import {SocialBtn} from './style'

// import { Container } from './styles';
interface Props{
  logo?: any
  brandName?: string
}
const SocialButton: React.FC<Props> = ({brandName, logo}) => {
  return(
    <SocialBtn>
      {logo}
      Continue com {brandName}
    </SocialBtn>
  );
}

export default SocialButton;

export const ButtonGoogle: React.FC = () => {
  return(
    <SocialBtn>
      <GoogleLogo />
      Continue com Google
    </SocialBtn>
  );
}

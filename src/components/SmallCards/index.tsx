import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  CardIcon,
  InfoCardContainer,
  SmallCard,
  SmallCardAction,
  SmallCardText,
} from "./style";
// import { Container } from './styles';

interface Props {
  color: string;
  icon: React.ReactNode;
  linkTo?: string;
  value: string | number;
  label: string;
}

const SmallCards: React.FC<Props> = ({ color, icon, value, label, linkTo }) => {
  return (
    <SmallCard>
      <InfoCardContainer>
        <CardIcon color={color}>{icon}</CardIcon>
        <SmallCardText>
          <p>{value}</p>
          <p>{label}</p>
        </SmallCardText>
      </InfoCardContainer>
      {linkTo ? (
        <SmallCardAction>
          <Link to={linkTo}>
            <FaChevronRight />
          </Link>
        </SmallCardAction>
      ) : (
        <></>
      )}
    </SmallCard>
  );
};

export default SmallCards;

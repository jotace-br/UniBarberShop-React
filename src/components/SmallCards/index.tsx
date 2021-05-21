import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
  CardIcon,
  InfoCardContainer,
  SmallCard,
  SmallCardAction,
  SmallCardText,
  ProgressBar,
} from './style'
// import { Container } from './styles';

interface Props {
  color: string
  icon: React.ReactNode
  linkTo?: string
  value: string | number
  label: string
  progress?: number
}

const SmallCards: React.FC<Props> = ({
  color,
  icon,
  value,
  label,
  linkTo,
  progress,
}) => {
  return (
    <SmallCard>
      <div>
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
      </div>
      {progress ? <ProgressBar color={color} percent={progress} /> : <></>}
    </SmallCard>
  )
}

export default SmallCards

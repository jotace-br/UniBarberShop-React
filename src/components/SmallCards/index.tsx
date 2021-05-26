import React from 'react'
import { Link } from 'react-router-dom'

import {
  CardIcon,
  InfoCardContainer,
  SmallCard,
  SmallCardAction,
  SmallCardText,
  ProgressBar,
} from './style'

import { FaChevronRight } from 'react-icons/fa'
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
      <InfoCardContainer>
        <CardIcon color={color}>{icon}</CardIcon>
        <SmallCardText>
          <p>{value}</p>
          <p>{label}</p>
          {progress ? <ProgressBar color={color} percent={progress} /> : <></>}
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
  )
}

export default SmallCards

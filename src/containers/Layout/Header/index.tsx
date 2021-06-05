import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { IconButton, RedirectButton } from 'components/IconButton'
import { StyledHeader, Title } from './style'

import { Icon } from '@iconify/react'
import cogOutline from '@iconify/icons-mdi/cog-outline'
import whatsappIcon from '@iconify/icons-mdi/whatsapp'
import { Menu, Popover } from 'antd'
import { logout } from 'services/login'

import Logo from 'assets/logo.png'

// import { Container } from './styles';
import { useFetch } from '../../../hooks/useFetch'

const Header: React.FC = () => {
  const location = useLocation()
  var [index, setIndex] = useState<string>(location.pathname)
  var [selectedKey, setSelectedKey] = useState<string>(
    index.slice(1, index.length),
  )

  const { data: profile } = useFetch('api/auth/profile')

  useEffect(() => {
    const handleTitle = () => {
      setIndex(location.pathname)
      let selected = index.slice(1, index.length).replace('/', ' > ')
      setSelectedKey(selected)
    }
    handleTitle()
  }, [index, selectedKey, location.pathname])

  const content = (
    <Menu>
      <Menu.Item danger onClick={logout}>
        Sair
      </Menu.Item>
    </Menu>
  )

  return (
    <StyledHeader>
      <img src={Logo} alt="" width={50} />
      <Title>Bem-vindo{', ' + profile?.name}</Title>
      <div className="icon-wrapper">
        <RedirectButton
          href="http://wa.link/flwm5n"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={whatsappIcon} />
        </RedirectButton>

        <Popover
          content={content}
          title="Configurações"
          placement="bottomRight"
          trigger="click"
        >
          <IconButton>
            <Icon icon={cogOutline} />
          </IconButton>
        </Popover>
      </div>
    </StyledHeader>
  )
}

export default Header

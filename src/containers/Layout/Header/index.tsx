import React from "react";

import { IconButton } from "../../../components/IconButton";
import { NotificationsBadge, StyledHeader } from "./style";

import { Icon } from "@iconify/react";
import cogOutline from "@iconify/icons-mdi/cog-outline";
import bellOutline from "@iconify/icons-mdi/bell-outline";
import magnifyIcon from "@iconify/icons-mdi/magnify";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h4>Dashboard</h4>
      <div className="icon-wrapper">
        <IconButton>
          <Icon icon={magnifyIcon} />
        </IconButton>
        <NotificationsBadge count={5} offset={[-15, 10]}>
          <IconButton>
            <Icon icon={bellOutline} />
          </IconButton>
        </NotificationsBadge>
        <IconButton>
          <Icon icon={cogOutline} />
        </IconButton>
      </div>
    </StyledHeader>
  );
};

export default Header;

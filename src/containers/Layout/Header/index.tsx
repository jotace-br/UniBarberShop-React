import React, { useEffect, useState } from "react";

import { IconButton } from "../../../components/IconButton";
import { NotificationsBadge, StyledHeader, Title } from "./style";

import { Icon } from "@iconify/react";
import cogOutline from "@iconify/icons-mdi/cog-outline";
import bellOutline from "@iconify/icons-mdi/bell-outline";
import magnifyIcon from "@iconify/icons-mdi/magnify";
import { useLocation } from "react-router";

// import { Container } from './styles';

const Header: React.FC = () => {
  const location = useLocation();
  var [index, setIndex] = useState<string>(location.pathname);
  var [selectedKey, setSelectedKey] = useState<string>(
    index.slice(1, index.length)
  );

  useEffect(() => {
    const handleTitle = () => {
      setIndex(location.pathname)
      if (index === "/"){
        setSelectedKey("Home")
      } else {
        let selected = index.slice(1, index.length).replace("/", " > ");
        setSelectedKey(selected);
      }
     
    };
    handleTitle();
    console.log(index);
    console.log(selectedKey);
  }, [index, selectedKey, location.pathname]);
  return (
    <StyledHeader>
      <Title>{selectedKey}</Title>
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

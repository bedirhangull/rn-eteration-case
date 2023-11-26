import React from 'react';
import { HeaderButton, HeaderContainer, HeaderTitle } from './style';

interface IHeader {
    icon?: React.ReactNode;
    headerTitle: string;
    headerFunction?: () => void;
}

const Header: React.FC<IHeader> = ({ icon, headerTitle, headerFunction }) => {
    return (
        <HeaderContainer testID="header-container">
            {icon && <HeaderButton testID="header-button" onPress={headerFunction}>
                {icon}
            </HeaderButton>}
            <HeaderTitle testID="header-title">{headerTitle}</HeaderTitle>
        </HeaderContainer>
    );
};

export default Header;

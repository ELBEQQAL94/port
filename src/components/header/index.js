import React from 'react'

// Components
import TitleBar from './TitleBar';

const Header = ({title}) => (
    <div class="header">
        <div class="right">
            <span>elbeqqal</span>
        </div>

        <div class="left">
            <TitleBar title={title} />
        </div>
    </div>
);

export default Header;
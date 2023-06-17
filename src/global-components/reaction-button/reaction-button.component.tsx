import React from 'react';
import { IconType } from 'react-icons/lib';

import './reaction-button.styles.scss'

type ReactionButtonProp = {
    Icon: IconType;
    text: string;
};

const ReactionButton:React.FC<ReactionButtonProp> = ({Icon, text}) => {

    return (
        <div className='icon'>
            <Icon className='icon__svg'/>
            <span>{text}</span>
        </div>
    )
}

export default ReactionButton;
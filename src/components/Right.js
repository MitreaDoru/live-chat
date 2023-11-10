import { Fragment } from 'react';
import ChatInfo from './right/ChatInfo';
import ChatBox from './right/ChatBox';
import InputMessage from './right/InputMessage';

const right = () => {
    return (
        <Fragment>
            <ChatInfo />
            <ChatBox />
            <InputMessage />
        </Fragment>

    )
}

export default right
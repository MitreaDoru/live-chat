import { Fragment } from 'react';
import CreateChat from './left/CreateChat';
import Search from './left/Search';
import PersonalMessages from './left/PersonalMessages';

const Left = () => {
    return (

        <Fragment>
            <CreateChat />
            <Search />
            <PersonalMessages />
        </Fragment>

    )
}

export default Left
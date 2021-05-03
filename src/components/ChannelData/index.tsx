import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="Bruno Martins"
                    date="03/05/2021"
                    content="Olá pessoal!"
                />

                <ChannelMessage
                    author="ZukyN"
                    date="03/05/2021"
                    content={
                        <>
                            <Mention>@Bruno Martins</Mention>, me carrega no CS novamente?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input
                    type="text"
                    placeholder="Conversar em #chat-livre"
                />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;
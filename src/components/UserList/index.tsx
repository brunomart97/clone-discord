import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> =({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot? 'bot' : ''} />
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Bruno Martins" />

            <Role>Offline - 18</Role>
            <UserRow nickname="ZukyN" isBot />
            <UserRow nickname="llx Fenix xll" isBot />
            <UserRow nickname="Fallen" />
            <UserRow nickname="TACO" />
            <UserRow nickname="s1mple" />
            <UserRow nickname="Coldzera" />
            <UserRow nickname="Fnx" />
            <UserRow nickname="dev1ce" />
            <UserRow nickname="NiKo" />
            <UserRow nickname="EliGE" />
            <UserRow nickname="dupreeh" />
            <UserRow nickname="KSCERATO" />
            <UserRow nickname="GuardiaN" />
            <UserRow nickname="Twistzz" />
            <UserRow nickname="ScreaM" />
            <UserRow nickname="flusha" />
            <UserRow nickname="fer" />
            <UserRow nickname="kennyS" />
        </Container>
    )
};

export default UserList;
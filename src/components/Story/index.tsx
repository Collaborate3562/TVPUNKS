import React, { useEffect } from 'react'
import WebFont from "webfontloader";
import {
  StoryContainer,
  UserListWrapper,
  UserProfileWrapper,
  UserPhotoWrapper,
  ColorSection,
  UserInfoWrapper
} from './styles'

export const Story = () => {
  const userList = [
    { id: 1, name: '1', url: 'assets/images/user1.png', color: '#3248', type: 'common', sex: 'male', typeColor: '#F9D054', sexColor: '#F88771' },
    { id: 2, name: '2', url: 'assets/images/user2.png', color: '#3248', type: 'rare', sex: 'male', typeColor: '#E44DFF', sexColor: '#58B4F6' },
    { id: 3, name: '3', url: 'assets/images/user3.png', color: '#3248', type: 'common', sex: 'male', typeColor: '#F9D054', sexColor: '#58B4F6' },
    { id: 4, name: '4', url: 'assets/images/user4.png', color: '#3248', type: 'common', sex: 'male', typeColor: '#F9D054', sexColor: '#58B4F6' },
  ]
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Butcherman",
          "Fuzzy Bubbles",
          "Slackey",
          "Lobster",
          "Secular One",
          "VT323",
          "Press Start 2P",
        ],
      },
    });
  }, []);
  return (
    <StoryContainer id='story'style={{fontFamily: 'VT323'}}>
      <h1>Story</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
      <UserListWrapper>
        {userList.map((user, i) => (
            <UserProfileWrapper key={i}>
              <UserPhotoWrapper>
                <img src={user.url} alt={user.name} />
                <ColorSection>
                  <p>{user.color}</p>
                </ColorSection>
              </UserPhotoWrapper>
              <UserInfoWrapper>
                <div style={{ background: user.typeColor }}>{user.type}</div>
                <div style={{ background: user.sexColor }}>{user.sex}</div>
              </UserInfoWrapper>
            </UserProfileWrapper>
          ))}
      </UserListWrapper>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
      <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </StoryContainer>
  )
}
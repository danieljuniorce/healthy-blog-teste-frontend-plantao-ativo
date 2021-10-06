import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  padding-horizontal: 20px;
`;

const BackTouch = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

const TitleBackTouch = styled.Text``;

const Title = styled.Text`
  font-size: 28px;
`;

const PostView = styled.View`
  width: 100%;
  margin-vertical: 25px;
`;

const InfoView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 25px;
`;

const TitleInfo = styled.Text`
  font-size: 17px;
  font-weight: 700;

  text-transform: capitalize;
  text-align: justify;

  max-width: 290px;
`;

const FavoritePost = styled.TouchableOpacity`
  margin-left: 15px;
  width: 45px;
  height: 45px;

  display: flex;
  justify-content: center;
`;

const TextFavoritePost = styled.Text`
  font-size: 35px;
  color: #e09a02;
`;

const BodyPost = styled.Text`
  width: 100%;

  font-size: 16px;
  text-align: justify;
`;

const DeletePost = styled.TouchableOpacity`
  margin-top: 20px;

  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TextDeletePost = styled.Text`
  color: #ca0808;

  font-size: 16px;
`;

export {
  Container,
  Title,
  PostView,
  InfoView,
  TitleInfo,
  FavoritePost,
  TextFavoritePost,
  BodyPost,
  DeletePost,
  TextDeletePost,
  BackTouch,
  TitleBackTouch,
};

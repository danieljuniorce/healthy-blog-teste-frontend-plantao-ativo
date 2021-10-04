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
  justify-content: space-between;
  align-items: center;

  margin-bottom: 25px;
`;

const TitleInfo = styled.Text`
  font-size: 19px;
  font-weight: 700;
`;

const FavoritePost = styled.TouchableOpacity``;

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
  margin-top: 200px;
  margin-bottom: 20px;

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

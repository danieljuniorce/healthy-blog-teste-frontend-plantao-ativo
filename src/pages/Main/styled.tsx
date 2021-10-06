import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  padding-horizontal: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
`;

const SubTitleView = styled.View`
  margin-top: 25px;
`;
const SubTitlePrimary = styled.Text`
  font-size: 19px;
`;
const SubInfos = styled.Text`
  font-size: 16px;
`;

const FavoriteTitlePost = styled.Text`
  margin-top: 35px;
`;

const PostsContainer = styled.FlatList`
  height: 300px;
  margin-top: 10px;
`;

export {
  Container,
  Title,
  SubTitleView,
  SubTitlePrimary,
  SubInfos,
  FavoriteTitlePost,
  PostsContainer,
};

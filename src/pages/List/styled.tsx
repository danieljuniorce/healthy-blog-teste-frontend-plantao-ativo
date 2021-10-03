import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  padding-horizontal: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
`;

const SubTitle = styled.Text`
  font-size: 19px;
  margin-bottom: 25px;
`;

const Posts = styled.View``;

const TitlePosts = styled.Text``;

const PostsContainer = styled.FlatList`
  height: 350px;
  margin-top: 10px;
`;

export { Container, Title, SubTitle, Posts, TitlePosts, PostsContainer };

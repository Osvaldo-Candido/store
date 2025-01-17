import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const { width } = Dimensions.get('window');
export const Container = styled.View`
  background-color: #fff;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const HeaderContainer = styled.View`
  max-width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SearchContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  margin: 0 10px;
  border-radius: 8px;
  height: 40px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding: 0 8px;
`;
export const ButtonCart = styled.TouchableOpacity``;
export const TextLogo = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const IconContainer = styled.View`
  background-color: #f8f8f8;
  border-radius: 25px;
  padding: 10px;
`;

export const TextNumberProductsOfCart = styled.Text`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #db4747;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  overflow: hidden;
`;

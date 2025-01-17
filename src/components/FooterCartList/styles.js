import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  border-top: 1px solid #ddd;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextTotal = styled.Text`
  font-size: 20px;
`;

export const BtnBuy = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #f7d5d5;
  padding: 10px;
  border: 1px solid #f3c1c1;
  border-radius: 6px;
`;
export const TextBuy = styled.Text`
  font-size: 16px;
`;

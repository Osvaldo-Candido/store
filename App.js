import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ProductProvider } from './src/context/products';
export default function App() {
  return (
    <NavigationContainer>
      <ProductProvider>
        <Routes />
      </ProductProvider>
    </NavigationContainer>
  );
}

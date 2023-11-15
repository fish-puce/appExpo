import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Inicio from './Inicio';

const AppNavigator = createStackNavigator(
  {
    Inicio: {
      screen: Inicio,
      navigationOptions: {
        headerShown: false, // Utiliza headerShown en lugar de header: null
      },
    },
  },
  {
    initialRouteName: 'Inicio',
  }
);

export default createAppContainer(AppNavigator);

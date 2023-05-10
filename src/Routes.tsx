import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

import { RootStackParamList } from './types/Types'

const Routes = () => {
	const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

	return (
		<NavigationContainer>
			<Navigator>
				<Screen
					name="Home"
					component={HomeScreen}
					options={{ headerTitleAlign: 'center', headerTitle: 'Bíblia' }}
				/>
				<Screen
					name="Details"
					component={DetailsScreen}
					options={{ headerTitleAlign: 'center' }}
				/>
			</Navigator>
		</NavigationContainer>
	)
}

export default Routes

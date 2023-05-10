import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Center, NativeBaseProvider, Text } from 'native-base'

import { RootStackParamList } from '../types/Types'

type DetailsScreenNavigationProps = NativeStackScreenProps<
	RootStackParamList,
	'Details'
>

type Props = DetailsScreenNavigationProps

const DetailsScreen = () => {
	return (
		<Center>
			<Text>Details</Text>
		</Center>
	)
}

export default DetailsScreen

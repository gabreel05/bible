import { NativeBaseProvider } from 'native-base'

import Routes from './src/Routes'

export default function App() {
	return (
		<NativeBaseProvider>
			<Routes />
		</NativeBaseProvider>
	)
}

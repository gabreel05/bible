import { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
	Button,
	Card,
	Center,
	Container,
	Spinner,
	Text,
	VStack
} from 'native-base'
import axios from 'axios'

import { RootStackParamList } from '../types/Types'
import { Book } from '../types/Book'
import BookComponent from '../components/Book'

type HomeScreenNavigationProps = NativeStackScreenProps<
	RootStackParamList,
	'Home'
>

type Props = HomeScreenNavigationProps

const HomeScreen = ({ navigation }: Props) => {
	const [books, setBooks] = useState<Book[]>([])

	useEffect(() => {
		async function getBibleBooks() {
			const response = await axios.get(
				'https://www.abibliadigital.com.br/api/books'
			)

			setBooks(response.data)
		}

		getBibleBooks()
	}, [])

	return (
		<VStack
			space={2}
			justifyContent="center"
			alignItems="center"
		>
			{books.length > 0 ? (
				books.map((book, index) => (
					<BookComponent
						book={book}
						key={index}
					/>
				))
			) : (
				<Center>
					<Spinner accessibilityLabel="Carregando livros" />
				</Center>
			)}
			<Button onPress={() => navigation.navigate('Details')}>
				Go To Details
			</Button>
		</VStack>
	)
}

export default HomeScreen

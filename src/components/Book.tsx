import { Card, Text } from 'native-base'

import { Book } from '../types/Book'

interface BookComponentProps {
	book: Book
}

type Props = BookComponentProps

const BookComponent = ({ book }: Props) => {
	return (
		<Card>
			<Text>Livro: {book.name}</Text>
			<Text>Autor: {book.author}</Text>
			<Text>Capítulos: {book.chapters}</Text>
		</Card>
	)
}

export default BookComponent

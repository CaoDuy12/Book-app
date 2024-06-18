import { styled } from '@mui/material'
import palette from '../../../../theme/palette'
import typography from '../../../../theme/typography'
import { Book } from '../../../../types/book.model'
import './list.scss'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
const TableHeadTitle = styled('th')({
  fontFamily: typography.base.fontFamily,
  fontSize: typography.base.fontSize,
  fontWeight: typography.base.fontWeight,
  lineHeight: typography.base.lineHeight,
  color: palette.grey[400]
})

const TableBodyDesc = styled('td')({
  fontFamily: typography.base.fontFamily,
  fontSize: typography.base.fontSize,
  fontWeight: typography.base.fontWeight,
  lineHeight: 'normal',
  color: palette.grey[800],

  '&:nth-child(2)': {
    fontWeight: typography.h4.fontWeight,
    color: palette.grey[900]
  }
})

interface ListProps {
  books: Book[]
  startEditBook: (id: string) => void
  deleteBook: (id: string) => void // Thêm prop deleteBook
}

function List(props: ListProps) {
  const { books, startEditBook, deleteBook } = props

  return (
    <>
      <div className='book-list'>
        <div className='list-container'>
          <h2>Book List</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadTitle>Book Code</TableHeadTitle>
                <TableHeadTitle>Book Name</TableHeadTitle>
                <TableHeadTitle>Author</TableHeadTitle>
                <TableHeadTitle>Price</TableHeadTitle>
                <TableHeadTitle>Action</TableHeadTitle>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.id}>
                  <TableBodyDesc>{book.code}</TableBodyDesc>
                  <TableBodyDesc>{book.title}</TableBodyDesc>
                  <TableBodyDesc>{book.author}</TableBodyDesc>
                  <TableBodyDesc>${book.price}</TableBodyDesc>
                  <td>
                    <div className='btn-action'>
                      <img src='/assets/svg/list/edit.svg' alt='edit' onClick={() => startEditBook(book.id)} />
                      <img
                        src='/assets/svg/list/trash-alt.svg'
                        alt='trash-alt'
                        onClick={() => deleteBook(book.id)}
                      />{' '}
                      {/* Thêm onClick và gọi hàm deleteBook */}
                    </div>
                  </td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default List

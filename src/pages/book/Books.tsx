import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Book } from '../../types/book.model'

import List from './components/list/List'
import './book.scss'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import { createTheme } from '@mui/material'
import Form from './components/form/Form'

function Books() {
  const [books, setBooks] = useState<Book[]>([])
  const [currentBook, setCurrentBook] = useState<Book | null>(null)

  useEffect(() => {
    axios
      .get('https://65376d90bb226bb85dd3368a.mockapi.io/api/book')
      .then((response) => {
        setBooks(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const addBook = (code: string, title: string, author: string, price: string) => {
    const book: Book = {
      id: Date.now().toString(),
      code,
      title,
      author,
      price
    }
    setBooks((prev) => [...prev, book])
    toast.success('Book added successfully!')
  }

  const startEditBook = (id: string) => {
    const foundBook = books.find((book) => book.id === id)
    if (foundBook) {
      setCurrentBook(foundBook)
    }
  }

  const editBook = (code: string, title: string, author: string, price: string) => {
    setCurrentBook((prev) => {
      if (prev) {
        return { ...prev, code, title, author, price }
      }
      return null
    })
  }

  const finishEditBook = () => {
    if (currentBook) {
      setBooks((prev) => {
        return prev.map((book) => {
          if (book.id === currentBook.id) {
            return currentBook
          }
          return book
        })
      })
      setCurrentBook(null)
      toast.success('Book updated successfully!')
    }
  }

  const cancelEdit = () => {
    if (currentBook) {
      setCurrentBook(null)
    }
  }

  const deleteBook = (id: string) => {
    const bookDelete = books.find((book) => book.id === id)
    if (bookDelete) {
      const bookName = bookDelete.title
      // Swal.fire({
      //   title: ' <span className="ag-delete-title " >Do you want to delete </span>',
      //   text: `<span className="ag-delete-text" >The Bookshop on the Corner: ${bookName} ?</span>`,

      //   showCancelButton: true,
      //   confirmButtonColor: '#F05697',
      //   cancelButtonColor: '#F8F9FA',
      //   confirmButtonText: 'Delete!',
      //   cancelButtonText: `<span style="color: black ">Cancel</span>`
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     setBooks((prev) => prev.filter((book) => book.id !== id))
      //     toast.success('Book deleted successfully!')
      //   }
      // })
      Swal.fire({
        title: `<p class="delete-title">Do you want to delete</p><p class="delete-text">${bookName} ?</p>`,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        customClass: {
          title: 'delete-title delete-text',
          confirmButton: 'delete-button',
          cancelButton: 'cancel-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          if (currentBook) {
            setCurrentBook(null)
          }
          setBooks((prev) => {
            const findIndexBook = prev.findIndex((book) => book.id === id)
            if (findIndexBook > -1) {
              const result = [...prev]
              result.splice(findIndexBook, 1)
              return result
            }
            return prev
          })
          toast.success('Book delete successfully!', {
            position: 'top-right',
            autoClose: 3000 // You can adjust the duration
          })
        }
      })
    }
  }

  const Title = styled.span`
    font-size: 30px;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    color: #f05697;
  `

  return (
    <div className='book'>
      <div className='book-container'>
        <div className='book-intro'>
          <div className='book-welcome'>
            <h1 className='book-welcome-title'>Welcome to My</h1>&nbsp;<Title>Bookstore!</Title>
          </div>
          <p>Oct 19, 2023 | Thursday, 11:00 AM</p>
        </div>

        <Form
          addBook={addBook}
          currentBook={currentBook}
          editBook={editBook}
          finishEditBook={finishEditBook}
          cancelEdit={cancelEdit}
        />
        <List books={books} startEditBook={startEditBook} deleteBook={deleteBook} />
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}

export default Books

import { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Book } from '../../../../types/book.model'
import './form.scss'
import FormGroup from '../../../../components/shared/form-group/FormGroup'

interface FormProps {
  addBook: (code: string, title: string, author: string, price: string) => void
  editBook: (code: string, title: string, author: string, price: string) => void
  finishEditBook: () => void
  cancelEdit: () => void
  currentBook: Book | null
}

function Form(props: FormProps) {
  const { addBook, currentBook, editBook, finishEditBook } = props
  const [code, setCode] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [codeError, setCodeError] = useState<string>('')
  const [titleError, setTitleError] = useState<string>('')
  const [authorError, setAuthorError] = useState<string>('')
  const [priceError, setPriceError] = useState<string>('')
  const [isEditing, setIsEditing] = useState(false)

  const handleCancelClick = () => {
    if (isEditing) {
      // If editing, show a confirmation dialog to confirm canceling changes
      const confirmCancel = window.confirm('Discard changes?')
      if (!confirmCancel) {
        return // User canceled the cancel operation
      }
    }

    // Reset the form and finish editing
    setCode('')
    setTitle('')
    setAuthor('')
    setPrice('')
    setCodeError('')
    setTitleError('')
    setAuthorError('')
    setPriceError('')

    if (isEditing) {
      finishEditBook()
      setIsEditing(false)
    } else {
      // Remove the current book data
      props.cancelEdit() // Cancel the editing of the current book
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setCodeError('')
    setTitleError('')
    setAuthorError('')
    setPriceError('')

    if (currentBook) {
      finishEditBook()
      setIsEditing(false)
    } else {
      if (!code) {
        setCodeError('This field is required.')
      }
      if (!title) {
        setTitleError('This field is required.')
      }
      if (!author) {
        setAuthorError('This field is required.')
      }
      if (!price) {
        setPriceError('This field is required.')
      }

      if (code && title && author && price) {
        if (isEditing) {
          const confirmUpdate = window.confirm('Confirm update?')
          if (!confirmUpdate) {
            return
          }
          editBook(code, title, author, price)
          setIsEditing(false)
        } else {
          addBook(code, title, author, price)
        }
        setCode('')
        setTitle('')
        setAuthor('')
        setPrice('')
        setCodeError('')
        setTitleError('')
        setAuthorError('')
        setPriceError('')
      }
    }
  }

  return (
    <>
      <div className='book-information'>
        <div className='form-container'>
          <h2>Book information</h2>
          <form onSubmit={handleSubmit}>
            <div className='form'>
              <div className='form-input'>
                <FormGroup
                  labelName='Book Code *'
                  label='code'
                  type='text'
                  value={currentBook ? currentBook.code : code}
                  onChange={(e) => {
                    if (currentBook) {
                      editBook(e.target.value, currentBook.title, currentBook.author, currentBook.price)
                    } else {
                      setCode(e.target.value)
                    }
                  }}
                />
                {codeError && <p className='error-message'>{codeError}</p>}
              </div>
              <div className='form-input'>
                <FormGroup
                  labelName='Book Name *'
                  label='name'
                  type='text'
                  value={currentBook ? currentBook.title : title}
                  onChange={(e) => {
                    if (currentBook) {
                      editBook(currentBook.code, e.target.value, currentBook.author, currentBook.price)
                    } else {
                      setTitle(e.target.value)
                    }
                  }}
                />
                {titleError && <p className='error-message'>{titleError}</p>}
              </div>
              <div className='form-input'>
                <FormGroup
                  labelName='Author *'
                  label='author'
                  type='text'
                  value={currentBook ? currentBook.author : author}
                  onChange={(e) => {
                    if (currentBook) {
                      editBook(currentBook.code, currentBook.title, e.target.value, currentBook.price)
                    } else {
                      setAuthor(e.target.value)
                    }
                  }}
                />
                {authorError && <p className='error-message'>{authorError}</p>}
              </div>
              <div className='form-input'>
                <FormGroup
                  labelName='Price *'
                  label='price'
                  type='text'
                  value={currentBook ? currentBook.price : price}
                  onChange={(e) => {
                    if (currentBook) {
                      editBook(currentBook.code, currentBook.title, currentBook.author, e.target.value)
                    } else {
                      setPrice(e.target.value)
                    }
                  }}
                />
                {priceError && <p className='error-message'>{priceError}</p>}
              </div>
            </div>
            <div className='btn-save_cancel'>
              <button className='btn-save' type='submit'>
                {isEditing ? 'Update' : 'Save changes'}
              </button>
              <button
                className='btn-cancel'
                type='button'
                onClick={() => {
                  handleCancelClick()
                  props.cancelEdit()
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form

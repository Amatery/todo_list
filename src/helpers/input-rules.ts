export const titleInputRules = [
  {
    required: true,
    message: 'Required field!',
  },
  {
    min: 5,
    max: 50,
    message: 'Title must be from 5 to 50 characters',
  },
]

export const descriptionInputRules = [
  {
    required: true,
    message: 'Required field!',
  },
  {
    min: 5,
    max: 50,
    message: 'Description must be from 5 to 100 characters',
  },
]

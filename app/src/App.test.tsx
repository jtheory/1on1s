import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/laern you this tasty raect/i)
  expect(linkElement).toBeInTheDocument()
})

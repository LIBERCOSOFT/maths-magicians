import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';

test('renders navbar component snapshot', () => {
  const { asFragment } = render(<Navbar />, { wrapper: BrowserRouter });
  expect(asFragment()).toMatchSnapshot();
});

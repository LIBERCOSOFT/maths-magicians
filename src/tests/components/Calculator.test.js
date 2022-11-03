import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../../pages/Calculator';

test('renders calculator component snapshot', () => {
  const { asFragment } = render(<Calculator />, { wrapper: BrowserRouter });
  expect(asFragment()).toMatchSnapshot();
});

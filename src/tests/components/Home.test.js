import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';

test('renders home component snapshot', () => {
  const { asFragment } = render(<Home />, { wrapper: BrowserRouter });
  expect(asFragment()).toMatchSnapshot();
});

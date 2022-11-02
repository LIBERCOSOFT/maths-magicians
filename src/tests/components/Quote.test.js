import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../../pages/Quote';

test('renders quote component snapshot', () => {
  const { asFragment } = render(<Quote />, { wrapper: BrowserRouter });
  expect(asFragment()).toMatchSnapshot();
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

test('renders calculator component snapshot', () => {
  const component = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(component).toMatchSnapshot();
});

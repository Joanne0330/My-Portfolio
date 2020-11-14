import React from 'react';
import { render, waitForElement, screen } from '@testing-library/react';
import App from './App';
import mockResponse from './__mocks__/weather-api-mock.json';

jest.spyOn(global, "fetch").mockImplementation(() =>{
  return Promise.resolve({
      json: () => Promise.resolve(mockResponse)
  })
})

test('renders the name in the heading', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Joanne Chen/i);
  expect(heading).toBeInTheDocument();
});

test('show my city', async () => {
  render(<App />)
  const city = await waitForElement(() => screen.getByText(/Location: London/i))
  expect(city).toBeInTheDocument();
})

test('show the weather', async () => {
  render(<App />)
  const weather = await waitForElement(() => screen.getByText(/Weather: scattered clouds/i))
  expect(weather).toBeInTheDocument();
})

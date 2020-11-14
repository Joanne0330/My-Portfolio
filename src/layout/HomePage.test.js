import React from 'react';
import { findAllByTestId, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import HomePage from './HomePage';


test('it renders the heading', () => {
    const { getByText} = render(<HomePage />) 
    const heading = getByText(/Joanne Chen/i)
    expect(heading).toBeInTheDocument();
})

test('some content of my bio showing', () => {
    const { getByText} = render(<HomePage />) 
    const languages = getByText(/Ruby, JavaScript, Python, SQL, HTML, CSS/i)
    expect(languages).toBeInTheDocument();
})

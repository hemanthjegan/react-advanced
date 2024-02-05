// __test__ is the format to create folder for testing
// filename.test.js --> format for creating test file

import { render , screen } from "@testing-library/react"
import Login from "../Login"


test('checking component loaded', ()=>{
    // condition for testing
    render(<Login/>);
    expect(screen.queryByText('Login')).toBeInTheDocument();
})

test('checking input fields are empty', ()=>{
    render(<Login/>);
    expect(screen.queryByPlaceholderText('Email')).toHaveValue('');
    expect(screen.queryByPlaceholderText('Password')).toHaveValue('');
})


// npm test // is the command to run
import React from 'react';
import Button from '../button';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

it("from react itself", () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
})

it("from external render", () => {
    const { getByTestId } = render(<Button label='hello' />)
    expect(getByTestId('button')).toHaveTextContent('hello')
})

it('snapshot testing', () => {
    const tree = renderer.create(<Button label={'changed'} />).toJSON()
    expect(tree).toMatchSnapshot()
})

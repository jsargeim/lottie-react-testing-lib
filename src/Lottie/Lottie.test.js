// tslint:disable-next-line:no-implicit-dependencies
import '@testing-library/jest-dom'
import {cleanup, render, screen} from '@testing-library/react'
import React from 'react'
import {LottieComponent} from './Lottie'

afterEach(cleanup)

describe('Testing XIAnimation', () => {
  it('renders and unmounts', () => {
    const {unmount} = render(<LottieComponent />)

    // svg does not show in the dom tree
    screen.debug()
    unmount()
  })
})

import { render } from '@testing-library/react'
import { ActiveLink } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return{
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
  
    expect(getByText('Home')).toBeInTheDocument()
  })
  
  it('Adds active class if the link as currently active', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
  
    expect(getByText('Home')).toHaveClass('active')
  })
})

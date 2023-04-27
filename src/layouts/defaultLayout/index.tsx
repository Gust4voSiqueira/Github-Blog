import { Outlet } from 'react-router-dom'
import { Header } from '../../ui/components/header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}

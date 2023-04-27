import coverImage from '../../../assets/cover.png'
import logoImage from '../../../assets/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImage} className="logo" alt="" />
      <img src={coverImage} alt="" />
    </HeaderContainer>
  )
}

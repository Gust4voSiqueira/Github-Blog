import { Link } from 'phosphor-react'
import {
  CardProfileContainer,
  CardProfileContent,
  FooterCardProfile,
  HeaderCardProfile,
} from './styles'

import githubLogo from '../../../../../assets/github.svg'
import companyLogo from '../../../../../assets/company.svg'
import peoplesLogo from '../../../../../assets/peoples.svg'
import { useEffect, useState } from 'react'
import { api } from '../../../../../lib/axios'
import { Card } from '../../../../components/card'

interface IProfileInfo {
  avatar_url: string
  name: string
  bio: string
  github: string
  company?: string
  followers: number
}

export function CardProfile() {
  const [profileInfo, setProfileInfo] = useState<IProfileInfo>(
    {} as IProfileInfo,
  )
  const [loading, setLoading] = useState<boolean>(true)

  async function loadInfoProfile() {
    const response = await api.get(
      'https://api.github.com/users/Gust4voSiqueira',
    )
    const { data } = response

    setProfileInfo({
      avatar_url: data.avatar_url,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      github: data.html_url,
      name: data.name,
    })
  }

  useEffect(() => {
    loadInfoProfile()
  }, [])

  useEffect(() => {
    const isProfileInfo = Object.keys(profileInfo).length === 0
    setLoading(isProfileInfo)
  }, [profileInfo])

  return (
    <Card isLoading={loading}>
      <CardProfileContainer>
        <img src={profileInfo.avatar_url} alt="" />

        <CardProfileContent>
          <HeaderCardProfile>
            <h4>{profileInfo.name}</h4>
            <a href={profileInfo.github}>
              GITHUB
              <Link size={16} />
            </a>
          </HeaderCardProfile>

          <p>{profileInfo.bio}</p>

          <FooterCardProfile>
            <nav>
              <li>
                <img src={githubLogo} alt="" />
                {profileInfo.name}
              </li>

              <li>
                <img src={companyLogo} alt="" />
                {profileInfo.company ? (
                  profileInfo.company
                ) : (
                  <span>Sem Empresa</span>
                )}
              </li>

              <li>
                <img src={peoplesLogo} alt="" />
                {profileInfo.followers} Seguidores
              </li>
            </nav>
          </FooterCardProfile>
        </CardProfileContent>
      </CardProfileContainer>
    </Card>
  )
}

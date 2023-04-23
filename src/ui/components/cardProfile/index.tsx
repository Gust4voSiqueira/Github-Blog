import { Link } from "phosphor-react";
import { CardProfileContainer, CardProfileContent, FooterCardProfile, HeaderCardProfile } from "./styles";

import githubLogo from '../../../assets/github.svg'
import companyLogo from '../../../assets/company.svg'
import peoplesLogo from '../../../assets/peoples.svg'
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";

interface IProfileInfo {
  avatar_url: string;
  name: string;
  bio: string;
  github: string;
  company?: string;
  followers: number;
}

export function CardProfile() {
  const [profileInfo, setProfileInfo] = useState<IProfileInfo>({} as IProfileInfo)

  async function loadInfoProfile() {
    const response = await api.get('https://api.github.com/users/Gust4voSiqueira')
    const { data } = response    

    setProfileInfo({
      avatar_url: data.avatar_url,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      github: data.html_url,
      name: data.name
    })    
  }

  useEffect(() => {
    loadInfoProfile()    
  }, [])

  return (
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
              gustavo
            </li>
            
            <li>
              <img src={peoplesLogo} alt="" />
              32 Seguidores
              </li>

              {profileInfo.company 
            ? (
              <li>
                <img src={companyLogo} alt="" />
                {profileInfo.company}
              </li>
            )
            : <li></li>
            }
          </nav>
        </FooterCardProfile>
      </CardProfileContent>
    </CardProfileContainer>
  )
}
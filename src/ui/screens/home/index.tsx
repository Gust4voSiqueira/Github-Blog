import { useEffect, useState } from "react";
import { CardPost } from "../../components/cardPost";
import { CardProfile } from "../../components/cardProfile";
import { Header } from "../../components/header";
import { SeachForm } from "./components/searchPost";
import { HomeContainer, HomeContent, PostsContainer } from "./styles";
import { api } from "../../../lib/axios";

export function Home() {
  const [posts, setPosts] = useState([])

  async function loadPosts() {
    const response = await api.get("search/issues?q=javascript%20repo:Gust4voSiqueira/Github-Blog")
    const { data } = response

    console.log(data);
    
  }

  //https://api.github.com/search/issues?q=javascript%20repo:Gust4voSiqueira/Github-Blog
  //https://api.github.com/search/issues?q=Boas%20pr%C3%A1ticas%20repo:rocketseat-education/reactjs-github-blog-challenge

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <>
      <Header />
      <CardProfile />
      <HomeContainer>
        <HomeContent>
          <SeachForm />

          <PostsContainer>
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
          </PostsContainer>
          
        </HomeContent>
      </HomeContainer>
    </>
  )
}
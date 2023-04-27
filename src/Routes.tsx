import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './ui/screens/home'
import { Post } from './ui/screens/post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:idPost" element={<Post />} />
      </Route>
    </Routes>
  )
}

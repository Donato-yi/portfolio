import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import ThemeProvider from './components/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
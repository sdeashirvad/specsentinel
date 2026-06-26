import { Routes, Route } from 'react-router-dom'
import StudioApp from './pages/StudioApp'
import { LandingPage } from './pages/landing/LandingPage'
import { StructuredDataRoute } from './components/StructuredDataRoute'

const isWebviewOnly = import.meta.env.VITE_APP_MODE === 'webview'

export default function App() {
  if (isWebviewOnly) {
    return <StudioApp />
  }

  return (
    <>
      <StructuredDataRoute />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studio/*" element={<StudioApp />} />
      </Routes>
    </>
  )
}

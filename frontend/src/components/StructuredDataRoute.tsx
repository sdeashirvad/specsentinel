import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { StructuredData } from './StructuredData'
import { getHomeStructuredData, getStudioStructuredData } from '../brand/structuredData'

export function StructuredDataRoute() {
  const { pathname } = useLocation()

  const data = useMemo(() => {
    if (pathname.startsWith('/studio')) {
      return getStudioStructuredData()
    }
    return getHomeStructuredData()
  }, [pathname])

  return <StructuredData data={data} />
}

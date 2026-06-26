import { useEffect } from 'react'
import { LabFooter } from '../../brand/LabFooter'
import { LandingNav } from '../../components/landing/LandingNav'
import { HeroSection } from '../../components/landing/HeroSection'
import { ProblemSection } from '../../components/landing/ProblemSection'
import { WorkflowPipeline } from '../../components/landing/WorkflowPipeline'
import { FeatureGrid } from '../../components/landing/FeatureGrid'
import { GovernanceHighlight } from '../../components/landing/GovernanceHighlight'
import { StudioShowcase } from '../../components/landing/StudioShowcase'
import { TerminalDemo } from '../../components/landing/TerminalDemo'
import { SocialProofStrip } from '../../components/landing/SocialProofStrip'
import { ComparisonSection } from '../../components/landing/ComparisonSection'
import { NpmInstallStrip } from '../../components/landing/NpmInstallStrip'
import { FinalCTASection } from '../../components/landing/FinalCTASection'
import { LabsCreditSection } from '../../components/landing/LabsCreditSection'

export function LandingPage() {
  useEffect(() => {
    const theme = localStorage.getItem('acd_theme')
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col">
      <LandingNav />
      <HeroSection />
      <ProblemSection />
      <WorkflowPipeline />
      <FeatureGrid />
      <GovernanceHighlight />
      <StudioShowcase />
      <TerminalDemo />
      <SocialProofStrip />
      <ComparisonSection />
      <NpmInstallStrip />
      <FinalCTASection />
      <LabsCreditSection />
      <LabFooter />
    </div>
  )
}

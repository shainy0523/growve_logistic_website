import BillingHero from './BillingHero'
import OpsShowcaseDarkSection from './OpsShowcaseDarkSection'
import OpsMiniCardsSection from './OpsMiniCardsSection'
import DecisionDataSection from './DecisionDataSection'
import BillingTestimonialSection from './BillingTestimonialSection'
import CompareCourierSection from './CompareCourierSection'
import EverythingSection from '@/components/landing/sections/problems-section/EverythingSection'

const BillingReconciliationView = () => {
  return (
    <>
      <BillingHero />
      <OpsShowcaseDarkSection />
      <OpsMiniCardsSection />
      <DecisionDataSection />
      <BillingTestimonialSection />
      <CompareCourierSection />
      <EverythingSection excludeTitles={["Billing & Reconciliation","NDR Recovery Automation"]} showCenterCard={false} />
    </>
  )
}

export default BillingReconciliationView

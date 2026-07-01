
import BillingHero from '@/components/landing/sections/services/billing-reconciliation/BillingHero'
import OpsShowcaseDarkSection from '@/components/landing/sections/services/billing-reconciliation/OpsShowcaseDarkSection'
import DecisionDataSection from '@/components/landing/sections/services/billing-reconciliation/DecisionDataSection'
import BillingTestimonialSection from '@/components/landing/sections/services/billing-reconciliation/BillingTestimonialSection'
import EverythingSection from '@/components/landing/sections/problems-section/EverythingSection'
import OpsMiniCardsSection from '@/components/landing/sections/services/billing-reconciliation/OpsMiniCardsSection'
import CompareCourierSection from '@/components/landing/sections/services/billing-reconciliation/CompareCourierSection'

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

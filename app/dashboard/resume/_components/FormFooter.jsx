import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

const FormFooter = ({prevStep, nextStep}) => {
  return (
    <div className="flex justify-between mt-4">
        
    <Button
      onClick={prevStep}
      disabled={step === 1}
      className={cn('bg-slate-800',{'bg-slate-300 text-slate-950':step === 1})}

    >
      Previous
    </Button>
    <Button
      onClick={nextStep}
      // disabled={step === totalSteps}
      className={cn('bg-slate-800',{'bg-slate-800 text-white':step === totalSteps})}
    >
      Next
    </Button>
  </div>
  )
}

export default FormFooter

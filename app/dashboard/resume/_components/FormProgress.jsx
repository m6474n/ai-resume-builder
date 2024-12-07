'use client'

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const FormProgress = () => {
  const [steps, setSteps] = useState([
    { id: 1, title: 'Personal Information', link: '/dashboard/resume/create/step-1', is_completed: false },
    { id: 2, title: 'Address Details', link: '/dashboard/resume/create/step-2', is_completed: false },
    { id: 3, title: 'Review & Submit', link: '/dashboard/resume/create/step-3', is_completed: false },
  ]);

  const router = useRouter();

  // Function to handle the step click and mark it as completed
  const handleStepClick = (id, link) => {
    // Mark the clicked step as completed
    const updatedSteps = steps.map(step =>
      step.id === id ? { ...step, is_completed: true } : step
    );
    setSteps(updatedSteps);

    // Navigate to the selected step
    router.push(link);
  };

  return (
    <div className="flex flex-col w-[250px] border-slate-800 h-full">
      {steps.map(({ id, title, link, is_completed }, index) => (
        <React.Fragment key={id}>
          <div
            className="flex flex-row items-start gap-3 justify-start cursor-pointer"
            onClick={() => handleStepClick(id, link)} // Use the updated function here
          >
            <div className="flex flex-col items-center justify-start">
              <div
                className={cn(
                  'rounded-full border w-10 h-10 flex justify-center items-center',
                  {
                    'bg-slate-800 text-white': is_completed, // Mark steps as completed
                    'bg-gray-300 text-gray-700': !is_completed, // Uncompleted steps
                  }
                )}
              >
                {id}
              </div>
              {index < steps.length - 1 && <div className="border-l h-10 w-0" />}
            </div>
            <h3 className="pt-2">{title}</h3>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FormProgress;

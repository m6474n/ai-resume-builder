"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Ensure you have this utility file correctly set up
import React, { useState } from "react";
import UploadImage from "../resume/_components/UploadImage";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Steps for the form, including route paths
  const steps = [
    {
      id: 1,
      title: "Personal Information",
      link: "/step1",
      is_completed: true,
    },
    { id: 2, title: "Address Details", link: "/step2" },
    { id: 3, title: "Review & Submit", link: "/step3" },
    // Add more steps as needed
  ];

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Set the step based on clicking on a step in the navigation
  const goToStep = (stepIndex) => {
    setStep(stepIndex);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        return <StepOne />;
    }
  };

  return (
    <div className="w-full mx-auto p-4 flex flex-col min-h-[80vh] justify-between">
      <div className="w-full mx-auto p-4 flex  gap-8  ">
        {" "}
        {/* Side Navigation (Stepbar) */}
        <div className="flex flex-col w-[250px] border   min-h-96 ">
          {steps.map(({ id, title }, index) => (
            <React.Fragment key={index}>
              <div
                className="flex flex-row items-start gap-3 justify-start cursor-pointer"
                onClick={() => goToStep(id)}
              >
                <div className="flex flex-col items-center justify-start">
                  <div
                    className={cn(
                      "rounded-full border w-10 h-10 flex justify-center items-center",
                      {
                        "bg-slate-800 text-white": id <= step, // Mark steps as completed up to the current step
                        "bg-gray-300 text-gray-700": id > step, // Uncompleted steps
                      }
                    )}
                  >
                    {id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="border-l h-10 w-0" />
                  )}
                </div>
                <h3 className="pt-2">{title}</h3>
              </div>
            </React.Fragment>
          ))}
        </div>
        {/* Main Content Area */}
        <div className="flex-1 pl-4 ">{renderStep()}</div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p>CV Preview</p>
          <div className="w-[300px] h-[400px] border border-dashed rounded-lg border-slate-900"></div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <Button
          onClick={prevStep}
          disabled={step === 1}
          className={cn("bg-slate-800", {
            "bg-slate-300 text-slate-950": step === 1,
          })}
        >
          Previous
        </Button>
        <Button
          onClick={nextStep}
          // disabled={step === totalSteps}
          className={cn("bg-slate-800", {
            "bg-slate-800 text-white": step === totalSteps,
          })}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const StepOne = () => (
  <div className="flex w-full flex-col justify-start  pr-4">
    <h2 className="text-2xl font-bold text-slate-800">
      What&apos;s the best way for employers to contact you?
    </h2>
    <p className=" text-slate-400">
      We suggest including an email and phone number.
    </p>
    <div className="flex flex-row items-center my-4 gap-5">
      <UploadImage />

      {/* Grid container for inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-3/4">
        {/* First Email Input */}
        <div className="flex flex-col items-start gap-1.5 min-w-[150px]">
          <Label htmlFor="f-name">First Name</Label>
          <Input type="f-name" id="f-name" placeholder="First Name" />
        </div>
        <div className="flex flex-col items-start gap-1.5 min-w-[150px]">
          <Label htmlFor="l-name">Last Name</Label>
          <Input type="l-name" id="l-name" placeholder="Last Name" />
        </div>
        <div className="flex flex-col col-span-2 items-start gap-1.5 min-w-[150px]">
          <Label htmlFor="profession">Profession</Label>
          <Input type="profession" id="profession" placeholder="Profession" />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-4 w-full">
      {/* First Row - Two columns, each taking 2 column spans */}
      <div className="col-span-2 flex flex-col items-start gap-1.5 min-w-[150px]">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>

      <div className="col-span-2 flex flex-col items-start gap-1.5 min-w-[150px]">
        <Label htmlFor="phone">Phone</Label>
        <Input type="tel" id="phone" placeholder="Phone" />
      </div>

      {/* Second Row - Two columns, each taking 1 column span */}
      <div className="col-span-2 flex flex-col items-start gap-1.5 min-w-[150px]">
        <Label htmlFor="city">City</Label>
        <Input type="text" id="city" placeholder="City" />
      </div>

      <div className="col-span-1 flex flex-col items-start gap-1.5 min-w-[150px]">
        <Label htmlFor="postal">Postal</Label>
        <Input type="text" id="postal" placeholder="Postal" />
      </div>
      <div className="col-span-1 flex flex-col items-start gap-1.5 min-w-[150px]">
        <Label htmlFor="country">Country</Label>
        <Input type="text" id="country" placeholder="Country" />
      </div>
    </div>
  </div>
);
const StepTwo = () => <div>Step 2: Address Details</div>;
const StepThree = () => <div>Step 3: Review & Submit</div>;

export default MultiStepForm;

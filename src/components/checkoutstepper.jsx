import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
const Checkoutstepper = ({ stepsConfig = [] }) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);

    const [margins, setMargins] = useState({
        left: 0,
        right: 0,
    });

    const stepRef = useRef([]);

    useEffect(() => {
        setMargins({
            left: stepRef.current[0]?.offsetWidth / 2,
            right: stepRef.current[stepRef.current.length - 1]?.offsetWidth / 2
        })
    }, [stepRef, stepsConfig.length]);

    const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

    const handleNext = () => {
        if (currentStep < stepsConfig.length) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsComplete(true);
        }
    }

    if (!stepsConfig.length) {
        return <></>;
    }

    if (stepsConfig.length) {
        return (
            <>
                <div className='stepper'>
                    {stepsConfig.map((step, index) => (
                        <div key={step.name}
                            ref={el => stepRef.current[index] = el}
                            className={`step ${currentStep === index + 1 ? 'active' : ''} ${isComplete || index + 1 < currentStep ? 'completed' : ''}`}>
                            <div className='step-number'>{index + 1 < currentStep ? '✓' : index + 1}</div>
                            <div className="step-name">{step.name}</div>
                        </div>
                    ))}
                    <div className="progress-bar"
                        style={{ width: `calc(100% - ${margins.left + margins.right}px)`, marginLeft: `${margins.left}px`, marginRight: `${margins.right}px` }}
                    >
                        <div className="progress" style={{ width: `${(currentStep - 1) / (stepsConfig.length - 1) * 100}%` }}>

                        </div>
                    </div>
                </div>

                <ActiveComponent />
                {
                    !isComplete && <button className='next-button' onClick={() => handleNext()}>
                        {currentStep < stepsConfig.length ? 'Next' : 'Complete'}
                    </button>
                }
            </>
        )
    }
}

export default Checkoutstepper;

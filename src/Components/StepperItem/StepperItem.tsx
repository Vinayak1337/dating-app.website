import { FC } from 'react'
import { Arrow5Icon } from '../../Assets/Images'

const StepperItem: FC<StepperItemProps> = ({ stepCounter, stepName, isCompleted, isLast }) => {
    return (
        <>
            <div className={`stepper-item ${isCompleted ? 'completed' : ''}`}>
                <div className="step-counter">
                    {
                        stepCounter
                    }
                </div>
                <div className="step-name">
                    <span>
                    {
                        stepName
                    }
                    </span>
                </div>
            </div>
            {
                !isLast && <div className="arrow">
                <Arrow5Icon />
            </div>
            }
        </>
    )
}

export default StepperItem

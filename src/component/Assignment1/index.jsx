import React, { useState } from 'react';
import PopupAnimation from '../Animation/PopupAnimation';
import Buttons from '../Bouttons';
import Contents from './components/contents';

const WorkoutPlan = () => {
    const contents = {
        1: {
            id: 0,
            header: "Today's Workout Plan",
            paragraph: "we're gonna do 3 fundamental exercises."
        },
        2: {
            id: 1,
            header: "First, 10 Push-ups",
            paragraph: "Do 10 reps, Reminder about full rang of motion. Don't rush."
        },
        3: {
            id: 2,
            header: "Next, 20 Squats",
            paragraph: "Squats are important. Remember to keep your back straight."
        },
        4: {
            id: 3,
            header: "Finally, 15 sit-ups",
            paragraph: "Slightly bend your knees. Remember about full range of motion"
        },
        5: {
            id: 4,
            header: "Great job j",
            paragraph: "You made it, have a nice day and see you next time !"
        }
    }
    const [modelContent, setModelContent] = useState(Object.values(contents)[0]);
    const [applyFramerMotion, setApplyFramerMotion] = useState({ x: 20 });
    const buttonName = {
        button1: {
            name: 'Reset',
            style: modelContent.id === 0 ? 'bg-white text-gray-400' : 'bg-green-200 text-green-400'
        },
        button2: {
            name: 'Prev',
            style: modelContent.id === 0 ? 'bg-green-200 text-gray-400' : 'bg-green-600 text-white'
        },
        button3: {
            name: 'Next',
            style: modelContent.id === 4 ? 'bg-green-200 text-gray-400' : 'bg-green-600 text-white'
        }
    }
    const handleButton = (key) => {
        setApplyFramerMotion(applyFramerMotion.x === 20 ? { x: 30 } : { x: 20 });
        switch (key) {
            case 'Reset':
                setModelContent({ ...Object.values(contents)[0] });
                break;
            case 'Prev':
                setModelContent({ ...Object.values(contents)[modelContent.id - 1] })
                break;
            case 'Next':
                setModelContent({ ...Object.values(contents)[modelContent.id + 1] })
                break;
            default:
                break;
        }
    }
    return (
        <div className='mt-20'>
            <PopupAnimation child={<Buttons handleButton={handleButton} buttonName={buttonName} />} />
            <PopupAnimation child={<Contents applyFramerMotion={applyFramerMotion} modelContent={modelContent} />} />
        </div>
    );
}

export default WorkoutPlan;

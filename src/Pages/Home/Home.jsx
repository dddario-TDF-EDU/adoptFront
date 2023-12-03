import HomeQuestions from '../../Components/home/HomeQuestions/HomeQuestions';
import HomeRequirement from '../../Components/home/HomeRequirement/HomeRequirement';
import OldPetsSection from '../../Components/home/OldPetsSection/OldPetsSection';
import InformationSection from '../../Components/home/InformationSection/InformationSection';
import MatchSection from '../../Components/home/MatchSection/MatchSection';
import { useState, useEffect } from 'react';
import './home.css';

const Home = () => {

    const [showSection, setShowSection] = useState(false);

    useEffect(() => {
        const onChange = (entries) => {
            const el = entries[0];
            if (el.isIntersecting) {
                setShowSection(true);
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: "-100px"
        });
        observer.observe(document.querySelector('.questions-container'))
    });

    return (
        <main className='main-container'>
            <HomeRequirement />
            <HomeQuestions />
            {showSection ? (
                <OldPetsSection />
            ) : null}
            <InformationSection />
            <MatchSection />
        </main>
    )
};

export default Home;

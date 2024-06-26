// TutorialsPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTutorials } from '../store/tutorialSlice';
import TutorialCard from '../components/TutorialCard';
import '../styles/TutorialsPage.scss';

const TutorialsPage = () => {
    const dispatch = useDispatch();
    const tutorials = useSelector(state => state.tutorial.tutorials);

    useEffect(() => {
        dispatch(fetchAllTutorials());
    }, [dispatch]);

    return (
        <div className="tutorials-page">
            <h1>Tutorials</h1>
            <div className="tutorials-list">
                {tutorials.map(tutorial => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
            </div>
        </div>
    );
};

export default TutorialsPage;

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';

import UserSchemeComponent from './components/UserSchemeComponent';
import UserNgoComponent from './components/UserNgoComponent';
import UserTraineeComponent from './components/UserTraineeComponent';
import UserTrainingCourseComponent from './components/UserTrainingCourseComponent';
import UserFeedbackComponent from './components/UserFeedbackComponent';

//positive test cases
test('render Data from Scheme Component', () => {
    render(
        <Provider store={store} >
            <UserSchemeComponent />
        </Provider>);
    const linkElement = screen.getByText('Scheme Component');
    expect(linkElement).toBeInTheDocument();
});


// negative test case 
test('render Data from Scheme Component', () => {
    render(
        <Provider store={store} >
            <UserSchemeComponent />
        </Provider>);
    const linkElement = screen.findByText();
    expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

// ------------------------------------------------------

//positive test cases
test('render Data from Ngo Component', () => {
    render(
        <Provider store={store} >
            <UserNgoComponent />
        </Provider>);
    const linkElement = screen.getByText('Ngo Component');
    expect(linkElement).toBeInTheDocument();
});


// negative test case 
test('render Data from Ngo Component', () => {
    render(
        <Provider store={store} >
            <UserNgoComponent />
        </Provider>);
    const linkElement = screen.findByText();
    expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

// ------------------------------------------------------

//positive test cases
test('render Data from Trainee Component', () => {
    render(
        <Provider store={store} >
            <UserTraineeComponent />
        </Provider>);
    const linkElement = screen.getByText('Trainee Component');
    expect(linkElement).toBeInTheDocument();
});


// negative test case 
test('render Data from Trainee Component', () => {
    render(
        <Provider store={store} >
            <UserTraineeComponent />
        </Provider>);
    const linkElement = screen.findByText();
    expect(linkElement).not.toBe('Some other text which is not present in the component.');
});


// ------------------------------------------------------

//positive test cases
test('render Data from Training Course Component', () => {
    render(
        <Provider store={store} >
            <UserTrainingCourseComponent />
        </Provider>);
    const linkElement = screen.getByText('TrainingCourse Component');
    expect(linkElement).toBeInTheDocument();
});


// negative test case 
test('render Data from Training Course Component', () => {
    render(
        <Provider store={store} >
            <UserTrainingCourseComponent />
        </Provider>);
    const linkElement = screen.findByText();
    expect(linkElement).not.toBe('Some other text which is not present in the component.');
});


// ------------------------------------------------------

//positive test cases
test('render Data from Feeback Component', () => {
    render(
        <Provider store={store} >
            <UserFeedbackComponent />
        </Provider>);
    const linkElement = screen.getByText('Feedback Component');
    expect(linkElement).toBeInTheDocument();
});


// negative test case 
test('render Data from Feedback Component', () => {
    render(
        <Provider store={store} >
            <UserFeedbackComponent />
        </Provider>);
    const linkElement = screen.findByText();
    expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

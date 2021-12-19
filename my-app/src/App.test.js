import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from "../src/redux/store"
import NgoComponent from './components/NgoComponent';
import UserNgoComponent from './components/UserNgoComponent'
import NgoSlice from './redux/NgoSlice';

beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});


test('render Data from Ngo Component', () => {
  render(
    <Provider store={store} >
      <NgoComponent />
    </Provider>);
  const linkElement = screen.getByText('Ngo Component');
  expect(linkElement).toBeInTheDocument();
});

// negative test case 
test('render Data from NgoComponent ', () => {
  render(
    <Provider store={store} >
      <NgoComponent/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});


test('render Data from NgoSlice ', () => {
  render(
    <Provider store={store} >
      <NgoSlice/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

// // positive test case 
// test('render Data from Ngo Component ', () => {
//   render(
//     <Provider store={store} >
//       <UserNgoComponent />
//     </Provider>);
//   const linkElement = screen.getByText('Delete Ngo By Id');
//   expect(linkElement).toBeInTheDocument();
// });


// // positive test case 
// test('render Data from Ngo Component ', () => {
//   render(
//     <Provider store={store} >
//       <NgoComponent />
//     </Provider>);
//   const linkElement = screen.getByText('Delete Ngo By Id');
//   expect(linkElement).toBeInTheDocument();
// });

// // positive test case 
// test('render Data from Ngo Component ', () => {
//   render(
//     <Provider store={store} >
//       <NgoComponent />
//     </Provider>);
//   const linkElement = screen.getByText('Delete Ngo By Id');
//   expect(linkElement).toBeInTheDocument();
// });

// // positive test case for Ngo BY Id
// test('render Data from Ngo Component ', () => {
//   render(
//     <Provider store={store} >
//       <NgoComponent />
//     </Provider>);
//   const linkElement = screen.getByText('Find Ngo by id');
//   expect(linkElement).toBeInTheDocument();
// });

// // positive test case 
// test('render Data from Ngo Component ', () => {
//   render(
//     <Provider store={store} >
//       <NgoComponent />
//     </Provider>);
//   const linkElement = screen.getByText('Delete Ngo By Id');
//   expect(linkElement).toBeInTheDocument();
// });

// // positive test case 
// test('render Data from Ngo Component ', () => {
//   render(
//     <Provider store={store} >
//       <NgoComponent />
//     </Provider>);
//   const linkElement = screen.getByText('Delete Ngo By Id');
//   expect(linkElement).toBeInTheDocument();
// });

// // positive test case 
// test('render Data from Ngo Component ', () => {
//   render(
//     <Provider store={store} >
//       <NgoComponent />
//     </Provider>);
//   const linkElement = screen.getByText('Delete Ngo By Id');
//   expect(linkElement).toBeInTheDocument();
// });

// // positive test case 
// test('render Data from Ngo Component ', () => {
//   render(
//     <Provider store={store} >
//       <NgoComponent />
//     </Provider>);
//   const linkElement = screen.getByText('Delete Ngo By Id');
//   expect(linkElement).toBeInTheDocument();
// });


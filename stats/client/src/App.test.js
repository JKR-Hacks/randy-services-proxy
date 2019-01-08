/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { doesNotReject } from 'assert';
import App from './App';
import MainComponent from './components/MainComponent.jsx/';

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('Should update a state in a callback', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ sample: 'new' }, () => {
    expect(wrapper.state()).toEqual({ sample: 'new' });
  });
});

it('Should call componentDidMount', () => {
  const spy = jest.spyOn(App.prototype, 'componentDidMount');
  const wrapper = mount(<App />);
  wrapper.instance().componentDidMount();
  expect(spy).toHaveBeenCalled();
});

it('Should return a div element', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.type()).toEqual('div');
});

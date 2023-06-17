import { render, screen } from '@testing-library/react';
import DetailPanel from './index';
import { HOME_PAGE, PAGE_1, PAGE_2, PROFILE } from 'lib/constants'
import { Provider } from 'react-redux'
import { store } from 'pages/store'
import { useRouter } from 'next/router';
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));
const MockDetailPanel = (id: number) => {
    return (
        <Provider store={store}>
            <DetailPanel selectedId={id} />
        </Provider>
    )
}

describe('HOME', () => {
    it('renders DetailPanel when selectedId is HOME_PAGE', () => {
        const { getByTestId } = render(MockDetailPanel(HOME_PAGE));
        const home = getByTestId('home');
        expect(home).toBeInTheDocument();
    });
    // it('renders DetailPanel when selectedId is PROFILE', () => {
    //     const { getByTestId } = render(MockDetailPanel(PROFILE));
    //     const profile = getByTestId('profile');
    //     expect(profile).toBeInTheDocument();
    // });
    it('renders DetailPanel when selectedId is PAGE_1', () => {
        const { getByTestId } = render(MockDetailPanel(PAGE_1));
        const page1 = getByTestId('page1');
        expect(page1).toBeInTheDocument();
    });
    it('renders DetailPanel when selectedId is PAGE_2', () => {
        const { getByTestId } = render(MockDetailPanel(PAGE_2));
        const page2 = getByTestId('page2');
        expect(page2).toBeInTheDocument();
    });
});
import { render, screen } from '@testing-library/react';
import Header from './index';
import { LOGO_ALT_TEXT } from 'lib/constants/Header';
describe('LOGO', () => {
    render(<Header />);
    const image = screen.getByTestId('logo') as HTMLImageElement;
    it('renders the logo', () => {
        expect(image).toBeInTheDocument();
        expect(image).toBeVisible();
    });
    it('renders the logo with a valid URL', () => {
        const urlRegex = /^http(s)?:\/\/.+$/;
        expect(image.src).toMatch(urlRegex)
    });
    it('renders the logo with a alternative information', () => {
        expect(image.alt).toBeTruthy();
    });
    it('renders the logo with a height/width', () => {
        expect(image.width).toBeGreaterThan(40)
        expect(image.height).toBeGreaterThan(40)
    });
});

describe('NAVIGATION', () => {
    it('renders the navigation', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('navigation')).toBeInTheDocument();
        expect(getByTestId('navigation')).toContainHTML('nav')
    });
    it('renders the navigation with text', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('navigation')).toBeTruthy();
    });
});

describe('SEARCH', () => {
    it('renders the search bar', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('search')).toBeInTheDocument();
    });
    it('renders the search bar with text', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('search')).toBeTruthy();
    });
});


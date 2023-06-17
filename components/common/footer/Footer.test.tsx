import { render, screen } from '@testing-library/react';
import Footer from './index';
describe('FOOTER', () => {
    it('renders the column1', () => {
        render(<Footer />);
        const column1 = screen.getByTestId('column-1');
        expect(column1).toBeInTheDocument();
        expect(column1).toBeVisible();
    });
    it('renders the column2', () => {
        render(<Footer />);
        const column2 = screen.getByTestId('column-2');
        expect(column2).toBeInTheDocument();
        expect(column2).toBeVisible();
    });
    it('renders the column3', () => {
        render(<Footer />);
        const column3 = screen.getByTestId('column-3');
        expect(column3).toBeInTheDocument();
        expect(column3).toBeVisible();
    });
});

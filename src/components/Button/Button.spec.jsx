import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
    it('should render the button with the text', () => {
        render(<Button text="Load More"/>);
        expect.assertions(1);

        const _button = screen.getByRole('button', { name: /load more/i });    
        expect(_button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load More" onClick={fn} />);
        const _button = screen.getByRole('button', { name: /load more/i });

        userEvent.click(_button);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disable when disable is true', () => {
        
        render(<Button text="Load More" disabled={true} />);
        const _button = screen.getByRole('button', { name: /load more/i });

        
        expect(_button).toBeDisabled();
    });

    it('should be enable when disable is false', () => {
        
        render(<Button text="Load More" disabled={false} />);
        const _button = screen.getByRole('button', { name: /load more/i });

        
        expect(_button).toBeEnabled();
    });
});
// __tests__/index.test.jsx

import {render, screen} from '@testing-library/react'
import Home from '../src/pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders correct name in heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /Isai Ramirez/i,
        })

        expect(heading).toBeInTheDocument()
    })

    it('renders Home link in navbar', () => {
        render(<Home />);

        const homeLink = screen.getByRole('link', { name: /Home/i});

        expect(homeLink).toBeInTheDocument();
    })

    it('renders Contact link in navbar', () => {
        render(<Home />);

        const aboutLink = screen.getByRole('link', { name: /Contact/i});

        expect(aboutLink).toBeInTheDocument();
    })

    it('renders the correct title', () => {
        render(<Home />);

        const titleElement = screen.getByText('Home', { exact: false });

        expect(titleElement).toBeInTheDocument();
    })

    it('renders the correct links to Projects', () => {
        render(<Home />);
        const linkElement = screen.getAllByRole('link', { name: /projects/i });
        expect(linkElement[0]).toBeInTheDocument();
        expect(linkElement[1]).toBeInTheDocument();
        expect(linkElement).toHaveLength(2);
    })
})
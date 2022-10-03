import '@testing-library/jest-dom';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import { render } from '@testing-library/svelte';
import { Button } from '../src/lib';

describe('Button', () => {
	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: vi.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: vi.fn(),
				removeListener: vi.fn(),
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
				dispatchEvent: vi.fn()
			}))
		});
	});

	it('should be in the document', async () => {
		const { container } = render(Button, {
			props: {
				label: 'Click Me'
			}
		});
		expect(container).toBeInTheDocument();
	});
});

import { render, screen } from '@testing-library/react';
import { Code } from './Code';

describe('Code', () => {
    it('should be render with content and className', () => {
        const testContent = "class MyPlugin{\n  apply(compiler) {\n   compiler.hooks.run.tap('MyPlugin', (compilation) => ...\n";
        render(<Code className="testClassName" content={testContent} />);

        expect(screen.getByTestId('code_pre_id')).toBeInTheDocument();
        expect(screen.getByTestId('code_pre_id')).toHaveClass('testClassName');
        expect(screen.getByTestId('code_pre_id')).toHaveTextContent(testContent, {
            normalizeWhitespace: false,
        });
    });
});

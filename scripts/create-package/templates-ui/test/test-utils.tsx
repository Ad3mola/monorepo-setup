import { render } from '@testing-library/react';
import * as React from 'react';

export function renderWithTheme(node: React.ReactNode) {
  return render(<>{node}</>);
}

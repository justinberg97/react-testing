/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);
  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

/**
 * Verify button should render
 */
test('Button should render', () => {
  render(<App />);
  expect(screen.getByText('Current theme: light')).toBeInTheDocument();
});

/**
 * Verify clicking button should change theme
 */
test('theme button should update button text', () => {
  render(<App />);
  const themeButton = screen.getByText('Current theme: light');
  fireEvent.click(themeButton);
  expect(screen.getByText('Current theme: dark')).toBeInTheDocument();
});

/**
 * Verify theme button should toggle styles
 */
test('theme button should toggle styles', () => {
  render(<App />);
  const themeButton = screen.getByText('Current theme: light');
  fireEvent.click(themeButton);
  expect(document.body).toHaveStyle('background-color: #333');
  expect(document.body).toHaveStyle('color: #FFF');
  fireEvent.click(themeButton);
  expect(document.body).toHaveStyle('background-color: #FFF');
  expect(document.body).toHaveStyle('color: #333');
});

/**
 * Verify clicking button should toggle hidden content
 */
test('hidden button should toggle hidden content', () => {
  render(<App />);
  const toggleButton = screen.getByText('Show hidden content');
  expect(screen.queryByText('this content is hidden by default')).not.toBeInTheDocument();
  fireEvent.click(toggleButton);
  expect(screen.getByText('this content is hidden by default')).toBeInTheDocument();
  fireEvent.click(toggleButton);
  expect(screen.queryByText('this content is hidden by default')).not.toBeInTheDocument();
});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */

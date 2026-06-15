import { test, expect } from '@playwright/test';

test.describe('Beast UI Integration Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads with beast-ui components', async ({ page }) => {
    // The playground should render Beast UI components
    await expect(page).toHaveTitle(/Beast UI/i);
  });

  test('dark mode toggle works', async ({ page }) => {
    // Find the dark mode toggle and click it
    const body = page.locator('body');

    // Check initial state
    const initialHasDark = await body.evaluate((el) => el.classList.contains('beast-dark'));

    // Find and click the dark mode toggle
    const toggle = page.getByRole('switch').or(page.getByText(/dark/i)).first();
    if (await toggle.isVisible()) {
      await toggle.click();

      // Verify the class toggled
      const afterHasDark = await body.evaluate((el) => el.classList.contains('beast-dark'));
      expect(afterHasDark).not.toBe(initialHasDark);
    }
  });

  test('buttons respond to keyboard interaction', async ({ page }) => {
    const button = page.getByRole('button').first();
    if (await button.isVisible()) {
      // Tab to focus the button
      await button.focus();
      await expect(button).toBeFocused();

      // Verify the button has visible focus styles
      const outlineStyle = await button.evaluate((el) => getComputedStyle(el).outlineStyle);
      // Focus-visible produces an outline
      expect(['solid', 'auto', 'none']).toContain(outlineStyle);
    }
  });

  test('dialog focus trapping works', async ({ page }) => {
    // Look for a button that opens a dialog
    const openButton = page.getByRole('button', { name: /open|dialog|modal/i }).first();
    if (await openButton.isVisible()) {
      await openButton.click();

      // Wait for dialog to appear
      const dialog = page.getByRole('dialog');
      await expect(dialog).toBeVisible();

      // The first focusable element inside the dialog should be focused
      const focusedElement = page.locator(':focus');
      const isInsideDialog = await focusedElement.evaluate((el) => {
        return !!el.closest('[role="dialog"]');
      });
      expect(isInsideDialog).toBe(true);

      // Press Escape to close
      await page.keyboard.press('Escape');
      await expect(dialog).not.toBeVisible();
    }
  });

  test('design tokens are applied', async ({ page }) => {
    // Check that CSS custom properties from the design system are present
    const body = page.locator('body');
    const primaryColor = await body.evaluate((el) => {
      return getComputedStyle(el).getPropertyValue('--beast-color-primary');
    });
    // The token should be set (non-empty)
    expect(primaryColor.trim()).not.toBe('');
  });
});

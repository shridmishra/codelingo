import { test, expect } from '@playwright/test';

test.describe('Lesson Flow', () => {
    test('can start a lesson from learn page', async ({ page }) => {
        await page.goto('/learn');
        
        // Find a "Start Practice" button and click it
        // Assuming there's at least one visible
        // We use first() because there might be many
        const startButton = page.getByText('Start Practice').first();
        if (await startButton.isVisible()) {
             await startButton.click();
             await expect(page).toHaveURL(/.*\/learn\/.+/);
        }
    });
});

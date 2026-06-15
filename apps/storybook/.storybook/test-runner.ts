import type { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    // Each story automatically gets a snapshot test
    // Use page.screenshot() with toMatchSnapshot() for visual regression
    const image = await page.screenshot();
    expect(image).toMatchSnapshot(`${context.id}.png`, {
      maxDiffPixelRatio: 0.01, // 1% threshold
    });
  },
};

export default config;

# @axe-core/puppeteer raw reporter issue

This repo was made to reproduce a bug in @axe-core/puppeteer where the `raw` reporter fails to return results for all axe-core versions >= 4.2.3. I've included 2 folders, one for axe-core 4.2.2 that works properly, and another for axe-core 4.3.2 that fails.

## Build/Run Steps

- `cd` into either directory and run `yarn install` to install dependencies.
- run `yarn run axeReporterTest` to run the app.

## Output

I've included output.txt files for each version. This is the console output when running the app. The app console logs the reporter version and then the axe results. I've also broken out the `v1`, `v2`, and `raw` reporter version outputs into their own separate files.

You can see that the `v1` and `v2` reporters work both in axe-core 4.2.2 and 4.3.2, but the `raw` reporter only returns results for axe-core 4.2.2.

Note: I tested all axe-core versions released between 4.2.3 and 4.3.2. No versions >= 4.2.3 return results for the `raw` reporter.

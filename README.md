# billflow-react
Billflow React is an NPM package that provides easy integration with Billflow Embeds
## Installation
```
npm install --save billflow-react
```
## How to use
1) Get the billing page id from your Billflow Dashboard.
2) Install this Billflow React module.
3) Add the following code in your React App and replace the billing page id.

```
import { useBillflowEmbed } from 'billflow-react'

const settings = {
    billingPageId: 'your-billflow-billing-page-id'
}

useBillflowEmbed({settings})
```
## Resources
[Documentation](https://docs.billflow.io/)
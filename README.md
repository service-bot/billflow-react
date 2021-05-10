# billflow-react
Billflow React is an NPM package that provides easy integration with Billflow Embeds
## How to use
1) Create a billing page on dashboard.billflow.io
2) Install this Billflow React module
3) Add the following code in your React App

```
import { useBillflowEmbed } from 'billflow-react'

const settings = {
    billingPageId: 'your-billflow-billing-page-id'
}

useBillflowEmbed({settings})
```
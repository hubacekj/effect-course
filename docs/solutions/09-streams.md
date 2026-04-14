# Solution 9: Streams

Linked exercise:

- [Exercise 9 · Streams](/exercises/09-streams)

Source tag: `Stable concept`

## Reference Pipeline

```ts
import { Schema, Stream } from "effect"
import { Ndjson } from "effect/unstable/encoding"

class OrderEvent extends Schema.Class<OrderEvent>("OrderEvent")({
  orderId: Schema.String,
  status: Schema.String,
  amountCents: Schema.Number
}) {}

const ndjsonInput =
  "{\"orderId\":\"ord_1\",\"status\":\"paid\",\"amountCents\":1200}\n" +
  "{\"orderId\":\"ord_2\",\"status\":\"payment_failed\",\"amountCents\":900}\n"

export const failedPaymentsOnly = Stream.make(ndjsonInput).pipe(
  Stream.pipeThroughChannel(Ndjson.decodeSchemaString(OrderEvent)()),
  Stream.filter((event) => event.status === "payment_failed"),
  Stream.pipeThroughChannel(Ndjson.encodeSchemaString(OrderEvent)())
)
```

## Why This Is Good

- the input is decoded at the boundary
- filtering is incremental
- the output is ready to write as NDJSON again

## When A Plain Effect Would Be Enough

If you only load one file once and need one final aggregate result, an `Effect`
may be sufficient. Streams pay off when sequencing, incrementality, or ongoing
dataflow matters.

## Testing

### Client

- render and test react components via react testing library (render component, pass in props etc then test for presence of certain elements, suncomponents, textStrings etc) (integration)
- end to end testing via puppeteer

### Server

- move logic for sorting and filter into seperate class and unit test
- automated endpoint tests via postman ot JMeter
- load testing via JMeter

## Error Handling

Server returns appropriate response status code in case of error. sorting and filter functions surreounded by try-catch with appropriate error thrown and error information returned in response.

client uses promises or other async function to fetch API data. Response status code can be used to detect errors. React error boundry pr useErrorHandler hook used to catch errors in react UI components.

## State Management

react hooks (usestate)

state container such as redux

- Data exists in a store which has an initial state
- An action is created and dispatched to the store when state is updated
- The store sends the action to a reducer together with the current state.
- Reducer performs the relevant state updates.
- The store notifies all subscribed UI elements of the state update so they can rerender.
- UI elements rerender if relevant state has changed

## Deleting Personnel (without mutation)

via destructuring

```const doSomething = (obj, prop) => {
  let {[prop]: omit, ...res} = obj
  return res
}
```

## Done differently if there were more Personnel (10k 100k? 10m?)

### 100k

- Need optimised sorting and filtering algos due to possible algorithmic inefficiency of array prototype functions. could us meergeSort, quickSort or others depending on peculiarities of data within the dataset. For filtering and deletion an efficient search algorithm such as binary search.

### 10m+

- Large datasets may not fit into ram so incrementally reading data via a stream and applying custom functions for search and deletion could be necessary.

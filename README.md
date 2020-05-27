# local-storage-form

Updating a Form using the localStorage(k,v) API.

Track the state of editing by implementing the isEditing useState(state, setState) function to tell whether we

isEditing useState conditional that renders either **Form** or **Edit** components

## Behavior

1. Persists refreshes and development restarts.

### Local Storage Mozilla Docs

<https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>

#### Example

The following snippet accesses the current domain's local Storage object and adds a data item to it using **Storage.setItem()**

`localStorage.setItem('myDog', 'Tricit');`
The syntax for reading the localStorage item is as follows:

`var cat = localStorage.getItem('myDog');`
The syntax for removing the localStorage item is as follows:

`localStorage.removeItem('myDog');`
The syntax for removing all the localStorage items is as follows:

Clear all items
`localStorage.clear();`

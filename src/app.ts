function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data})
}
 
sendRequest('Send this!', (response: any) => { 
    console.log(response);

 });
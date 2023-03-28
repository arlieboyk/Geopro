async function GetData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: any = res.json();
  return <div>{data ? <div>{data}</div> : <div>no data</div>}</div>;
}

export default GetData;

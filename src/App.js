import logo from './logo.svg';
import './App.css';

const number = 55555;
const singers = [
  {name: 'Dr. Mahfuz', job:'Singer'},
  {name: 'Eva Rahman', job:'Singer2'},
  {name: 'Agun', job:'Sopno'},
  {name: 'Shuvro', job:'Pathor'}
];

const singerStyle = {
  color:'purple',
  backgroundColor: 'White'
}

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Razzak', 'Anwar'];
  return (
    <div className="App">
      {
        // nayoks.map(nayok => nayok)
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]}nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      <h5>New Component. YAY</h5>
      <p>rock mama React mama.</p>
      <Friend movie="Shingam" phone="017777"></Friend>
      <Friend phone="019999"></Friend>
    </div>
  );
}

function Person(props){
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props){
  console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;

import Header from "./components/Header";


const initialTasks = [
  {
    id: 1,
    text: "Task 1",
    day: "Dec 10th at 2:00 pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Task 2",
    day: "Dec 12th at 6:00 pm",
    reminder: false,
  },
  {
    id: 3,
    text: "Task 3",
    day: "Dec 18th at 3:00 pm",
    reminder: true,
  },
];

function App() {
  return (
    <div className="container">
     <Header/>
    </div>
  );
}

export default App;

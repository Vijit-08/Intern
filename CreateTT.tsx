
import './App.css';

function App() {
  return (
    <div className="box">
      <h1>Create New Timetable</h1>
      <div className='elements'>
        <div className="input-group1">
          <label htmlFor="yearInput">Year / Session :</label>
          <input type="text" id="yearInput" />
        </div>
        <div className="input-group2">
          <label htmlFor="semSelect">Select Session:</label>
          <select id="semSelect">
            <option value="odd">Odd</option>
            <option value="even">Even</option>
          </select>
        </div>
        <button className="create-button">Create</button>
      </div>
    </div>
  );
}

// links for font
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Poly&family=Poppins:wght@100;300;400;800&display=swap" rel="stylesheet"></link>

export default App;

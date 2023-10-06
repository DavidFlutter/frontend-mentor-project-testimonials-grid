import './App.css';
import data from "./data/data";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="tile1">
          <div className="upper">
            <img src={data[0].image} alt="" />
            <div className="text">
              <span>{data[0].name}</span>
              <span>{data[0].status}</span>
            </div>
          </div>
          <div className="content">
            <div className="title">
              {data[0].title}
            </div>
            <div className="story">
              {data[0].content}
            </div>
          </div>
        </div>

        <div className="tile2">
          <div className="upper">
            <img src={data[1].image} alt="" />
            <div className="text">
              <span>{data[1].name}</span>
              <span>{data[1].status}</span>
            </div>
          </div>
          <div className="content">
            <div className="title">
              {data[1].title}
            </div>
            <div className="story">
              {data[1].content}
            </div>
          </div>
        </div>

        <div className="tile3">
          <div className="upper">
            <img src={data[2].image} alt="" />
            <div className="text">
              <span>{data[2].name}</span>
              <span  classname="first">{data[2].status}</span>
            </div>
          </div>
          <div className="content">
            <div className="title">
              {data[2].title}
            </div>
            <div className="story">
              {data[2].content}
            </div>
          </div>
        </div>

        <div className="tile4">
          <div className="upper">
            <img src={data[3].image} alt="" />
            <div className="text">
              <span>{data[3].name}</span>
              <span classname="first">{data[3].status}</span>
            </div>
          </div>
          <div className="content">
            <div className="title">
              {data[3].title}
            </div>
            <div className="story">
              {data[3].content}
            </div>
          </div>
        </div>

        <div className="tile5">
          <div className="upper">
            <img src={data[4].image} alt="" />
            <div className="text">
              <span>{data[4].name}</span>
              <span classname="first">{data[4].status}</span>
            </div>
          </div>
          <div className="content">
            <div className="title">
              {data[4].title}
            </div>
            <div className="story">
              {data[4].content}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;

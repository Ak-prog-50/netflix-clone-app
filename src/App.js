import './App.css';
import Row from './Row'
import Banner from './Banner'
import end_points from './request'




function App() {
  return (
    <div className="app">
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={end_points.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={end_points.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={end_points.fetchTopRated}/>
      <Row title="Action" fetchUrl={end_points.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={end_points.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={end_points.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={end_points.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={end_points.fetchDocumentaries}/>
    </div>
  );
}

export default App;

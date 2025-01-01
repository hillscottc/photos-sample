import { useFetchData } from './hooks';
import { Photo, PhotoProps } from './Photo';
import './App.css'

function App() {
  let { error, data } = useFetchData(`https://picsum.photos/v2/list`);
  
  return (
    <div className="App">
      <div>
      {
        data && data.map((photo: PhotoProps)  => {
          return  <Photo key={photo.id} id={photo.id} download_url={photo.download_url} />
        })
      }
      </div>
      {
        error && <div>Error: {error}</div>
      }
    </div>
  );
}

export default App

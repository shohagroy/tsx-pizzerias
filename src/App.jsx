import "./App.css";
import useFetch from "./utils/FetchData";
import Header from "./shared/Header";
import Banar from "./components/Banar";
import DisplayCard from "./components/Card";

function App() {
  const { data, loading, error } = useFetch("data.json");

  console.log(data, loading, error);

  return (
    <>
      <section>
        <Header />
        <main>
          <Banar />

          <div className="max-w-7xl my-10 mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {data?.map((item) => (
                <DisplayCard key={item?.id} data={item} />
              ))}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default App;

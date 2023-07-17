import vitelogo from '/337712.jpg';

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <img src={vitelogo} className="image" alt="logo" />
    </div>
  );
}

export default Home;

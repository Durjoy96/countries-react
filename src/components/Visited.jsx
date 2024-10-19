const Visited = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>Visited List:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.cca2}>{item.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default Visited;

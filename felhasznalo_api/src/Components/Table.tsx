// display data

export type Column = {
  id: number;
  name: string;
  ip: string;
  location: string;
};

function Table(props: { data: Column[] }) {
  const { data } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>IP</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.ip}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

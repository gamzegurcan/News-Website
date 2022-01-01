import objects from "./object";

function ProjectDetail(props){
  
  return(
    <>
      <h2 className="text-danger text-center">News API Response Object</h2>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          {
          objects.map(item =>
          <tbody>
            <tr>
              <td>{item.title}</td>
              <td>{item.description}</td>
            </tr>
          </tbody>
          )}
        </table>
    </>
  );
}

export default ProjectDetail;
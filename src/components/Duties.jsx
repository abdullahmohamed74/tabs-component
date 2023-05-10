import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';

function Duties({ duties }) {
  const renderedDuties = duties.map((duty, index) => {
    return (
      <div key={uuidv4()}>
        <div className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          <p>{duty}</p>
        </div>
      </div>
    );
  });

  return renderedDuties;
}
export default Duties;

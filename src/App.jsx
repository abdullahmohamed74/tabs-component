import { useCallback, useEffect, useState } from 'react';
import JobInfo from './components/JobInfo';
import Sidebar from './components/Sidebar';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);

  // currentIndex state determine which job object is passed to JobInfo component
  // to be displayed on the screen
  const [currentIndex, setCurrentIndex] = useState(0);
  const job = jobs[currentIndex];

  // handleCompanyClick function updates currentIndex state
  //  with the index of the clicked company in the sidebar
  const handleCompanyClick = (index) => {
    setCurrentIndex(index);
  };

  const fetchJobs = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `error fetching data: ${response.statusText} (${response.status}) `
        );
      }

      const jobs = await response.json();
      setJobs(jobs);
    } catch (error) {
      console.error(error);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="jobs-center">
        <h1>error fetching data</h1>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <Sidebar
        jobs={jobs}
        currentIndex={currentIndex}
        handleCompanyClick={handleCompanyClick}
      />
      <JobInfo job={job} />
    </section>
  );
}
export default App;

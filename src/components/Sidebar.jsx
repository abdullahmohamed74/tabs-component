function Sidebar({ jobs, handleCompanyClick, currentIndex }) {
  const renderedBtns = jobs.map((job, index) => {
    return (
      <button
      key={job.id}
        onClick={() => handleCompanyClick(index)}
        // compare the index of the each company with the currentIndex state to display
        // the "active-btn" class on the button
        className={currentIndex === index ? 'job-btn active-btn' : 'job-btn'}
      >
        {job.company}
      </button>
    );
  });

  return <div className="btn-container">{renderedBtns}</div>;
}
export default Sidebar;

import { useEffect, useState } from 'react';

const Experience = ({setCvData, cvData}: any) => {
  const [name, setName] = useState('');

  useEffect(() => {
    setCvData({...cvData, experience: name})
  }, [name])

  return (
    <div className="personal-info">
      <h2>Experience</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>experience:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Experience;

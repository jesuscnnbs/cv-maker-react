import { useEffect, useState } from 'react';

const Education = ({setCvData, cvData}: any) => {
  const [name, setName] = useState('');

  useEffect(() => {
    setCvData({...cvData, education: name})
  }, [name])
  return (
    <div className="personal-info">
      <h2>Education</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Education:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Education;

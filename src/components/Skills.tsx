import { useEffect, useState } from 'react';

const Skills = ({setCvData, cvData}: any) => {
  const [current, setCurrent] = useState<string>('');
  const [skills, setSkills] = useState<string[]>([]);

  const handleAddSkill = () => {
    setSkills([...skills, current])
    setCurrent('')
  }
  useEffect(() => {
    setCvData({...cvData, skills})
  }, [skills])
  return (
    <div className="personal-info">
      <h2>Skills</h2>
      {!!skills.length && skills.map(skill => (
        <p>{skill}</p>
      ))}
      <form className="flex gap-2 justify-start" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='skill-input' className="form-control w-full max-w-xs">Add skill</label>
        <input
          id='skill-input'
          className="input input-bordered w-full max-w-xs" 
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          type="text" 
          placeholder="Type here" 
        />
        <button className="btn btn-primary" onClick={handleAddSkill}>+</button>
        
      </form>
    </div>
  );
};

export default Skills;

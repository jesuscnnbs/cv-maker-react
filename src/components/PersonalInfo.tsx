import { useEffect, useState } from 'react';

const PersonalInfo = ({setCvData, cvData}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setCvData({
      ...cvData,
      personalInfo: {
        name,
        email,
        phone,
      }
    })
  }, [name, email, phone])

  return (
    <div className="personal-info">
      <h2>Personal Information</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </form>
    </div>
  );
};

export default PersonalInfo;

import jsPDF from 'jspdf';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Preview from './components/Preview';
import { useState } from 'react';

interface CvData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  }; 
  experience: string; 
  education: string; 
  skills: string[]; 
}

function App() {
  const [cvData, setCvData] = useState<CvData>({
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    experience: '',
    education: '',
    skills: []
  });

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(JSON.stringify(cvData.personalInfo.name), 10, 10);
    doc.text(JSON.stringify(cvData.personalInfo.email), 10, 20);
    doc.text(JSON.stringify(cvData.personalInfo.phone), 10, 30);
    doc.save('cv.pdf');
  };
  
  return (
    <div className="cv-maker px-2 mx-auto max-w-lg">
      <header>
        <h1 className="text-3xl font-bold underline">
          CV generator
        </h1>
      </header>
      <main>
        <PersonalInfo setCvData={setCvData} cvData={cvData}/>
        <Experience setCvData={setCvData} cvData={cvData}/>
        <Education setCvData={setCvData} cvData={cvData}/>
        <Skills setCvData={setCvData} cvData={cvData}/>
        <Preview cvData={cvData} />
        <button className='btn btn-primary' onClick={handleDownload}>Download</button>
      </main>
      <footer>
        <p>CV Maker © 2024</p>
      </footer>
    </div>
  );
}

export default App;

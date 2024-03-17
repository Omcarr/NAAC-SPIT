import React, { useState } from "react";
import ExpandableComponent from "../components/ExpandableComponent";

function CriteriaPage() {
  const customContents = [
    {
      mainContent: "1.1.1",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 1/1.1.1/additional Information.pdf" },
  ]},
    {
      mainContent: "1.1.2",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 1/1.1.2/additional information.pdf" },
      ]
    },
    {
      mainContent: "1.2.1",
      linkNames: [
        { name: "Academic Council and Board of Study meeting", pdf: "Criteria 1/1.2.1/Subsequent Academic Council meeting extracts endorsing the decision of BOS (1).pdf" },
         { name: "Relevant Document", pdf: "Criteria 1/1.2.1/Links for any other relevant document to support theclaim.pdf" },
      ]
    },
    {
      mainContent: "1.3.1",
      linkNames: [
        { name: "Sample Activities", pdf: "Criteria 1/1.3.1/additional information-sample of activities.pdf" },
        { name: "SPIT Syllabus", pdf: "Criteria 1/1.3.1/additional information-SPIT-syllabus.pdf" },
        { name: "Humanity and Social Science (HSS)", pdf: "Criteria 1/1.3.1/additional information HSS.pdf" },
        { name: "Massive Open Online Course (MOOC)", pdf: "Criteria 1/1.3.1/Additional information-MOOC Courses.pdf" },
        { name: "Seva Satva/ABL/LLC", pdf: "Criteria 1/1.3.1/additional information-seva-sattva _ABL_LLC-courses.pdf" }
      ]
    },
    {
      mainContent: "1.3.2",
      linkNames: [
        { name: "Value added Program Course Module and Notices", pdf: "Criteria 1/1.3.2/program brochure_notice for Certificate_Value added programs with course modules.pdf" },
        { name: "List of Students and Certificates", pdf: "Criteria 1/1.3.2/List of students and Certificate.pdf" },
        { name: "Relevant Document", pdf: "Criteria 1/1.3.2/Link of relevant document .pdf" }
      ]
    },
    {
      mainContent: "1.3.3",
      linkNames: [
        { name: "Field/Research Project/Internship content", pdf: "Criteria 1/1.3.3/Program and course contents having element of field projects_ research projects _internships.pdf" },
        { name: "Project List and Sample report", pdf: "Criteria 1/1.3.3/Sample Evaluated project list and report_fieldwork report.pdf" },
        { name: "Internship Completion Letters", pdf: "Criteria 1/1.3.3/Sample Internship completion letter provided by host institutions.pdf" },
        { name: "Relevant Document", pdf: "Criteria 1/1.3.3/The relevant information.pdf" }
      ]
    },
    {
      mainContent: "1.4.1",
      linkNames: [
        { name: "Plan of Action", pdf: "Criteria 1/1.4.1/1.4.1 Action taken.pdf" },
        { name: "IQAC Feedback", pdf: "Criteria 1/1.4.1/IQAC feedback.pdf" },
      ]
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const openExpandable = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <>
      <div className="hello h-[37rem] w-[55rem] mt-[2rem] transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 bg-white border border-solid border-blue-900 rounded-lg p-3 overflow-y-auto">
        <h1 className="text-[2rem] text-blue-900 font-extrabold">CRITERIA 1: Curricular Aspects</h1>
        <div className="w-full h-[2px] bg-gradient-to-l from-white via-gray-500 to-black"></div>
        <div className="m-7">
          <div className="flex flex-wrap">
            {customContents.map((content, index) => (
              <div key={index} className="mt-3 mr-3">
                <ExpandableComponent
                  mainContent={content.mainContent}
                  links={content.linkNames}
                  isOpen={index === openIndex}
                  openBar={() => openExpandable(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CriteriaPage;
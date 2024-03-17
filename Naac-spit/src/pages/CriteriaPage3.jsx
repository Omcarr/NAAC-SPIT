import React, { useState } from "react";
import ExpandableComponent from "../components/ExpandableComponent";

function CriteriaPage() {
  const customContents = [
    {
      mainContent: "3.1.1",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 3/3.1.1/Additional_Information.pdf" },
      ]
    },
    {
      mainContent: "3.1.2",
      linkNames: [
        { name: "Audited Income-Expenditure Statement", pdf: "Criteria 3/3.1.2/Audited Income-Expenditure statement highlighting the expenditure.pdf" },
        { name: "Sanction Letters of Seed Money to the Teachers", pdf: "Criteria 3/3.1.2/Sanction letters of seed money to the teachers.pdf" },
        { name: "List of faculty Provided with Seed Money for Research", pdf: "Criteria 3/3.1.2/List of faculty who have been provided with seed money for research.pdf" },
        
      ]
    },
    {
      mainContent: "3.1.3",
      linkNames: [
        { name: "List of Teachers Awarded National International Fellowship", pdf: "Criteria 3/3.1.3/List_of_teachers awarded national_ international fellowship.pdf" },
        { name: "E-copies of the Award Letters", pdf: "Criteria 3/3.1.3/E-copies of the award letters of the teachers.pdf" },
        
      ]
    },
    {
      mainContent: "3.2.1",
      linkNames: [
        { name: "List of Extramural Funding Received", pdf: "Criteria 3/3.2.1/(new) List of Extramural funding received for research.pdf" },
        { name: "Copies of the Letters", pdf: "Criteria 3/3.2.1/(new)Copies of the letters.pdf" },
        
      ]
    },
    {
      mainContent: "3.2.2",
      linkNames: [
        { name: "List of Project titles", pdf: "Criteria 3/3.2.2/(new) List of Project.pdf" },
        { name: "Grant awards letters", pdf: "Criteria 3/3.2.2/(new) Copies of grant award.pdf" },  
      ]
    },
    {
      mainContent: "3.2.3",
      linkNames: [
        { name: "Letter of the University Recognizing Faculty as Research Guides", pdf: "Criteria 3/3.2.3/Copies of the letter of the University recognizing faculty as Research guides.pdf" },   
      ]
    },
    { 
      mainContent: "3.4.1",
      linkNames: [
        { name: "Constitutions of the Research Advisory", pdf: "Criteria 3/3.4.1/(new) Constitutions of the research advisory.pdf" },
        { name: "Bills of Purchase of Licensed Plagiarism Check", pdf: "Criteria 3/3.4.1/Bills of purchase of licensed plagiarism.pdf" },
        { name: "Constitution of the Ethics Committee", pdf: "Criteria 3/3.4.1/3.4.2_Ethics_comitee_and_procedings.pdf" },
        { name: "Syllabus of the Research Methodology", pdf: "Criteria 3/3.4.1/syllabus of the research methodology.pdf" },
      ]
    },
    { 
      mainContent: "3.4.2",
      linkNames: [
        { name: "Ph.D. Registration Letters", pdf: "Criteria 3/3.4.2/Ph.D. registration letters_Joining reports of candidates.pdf" },
      ]
    },

    { 
      mainContent: "3.4.4",
      linkNames: [
        { name: "List of Conference Papers and Book Chapters", pdf: "Criteria 3/3.4.4/List of chapter_bo.pdf" },
        { name: "Conference Papers and Book Chapters", pdf: "Criteria 3/3.4.4/Copy of the Cover page.pdf" },
      ]
    },

    { 
      mainContent: "3.5.1",
      linkNames: [
        { name: "Letter from the Beneficiary of the consultancy", pdf: "Criteria 3/3.5.1/Letter from the beneficiary of the consultancy along with details of the consultancy fee.pdf" },
        { name: "CA certified copy of Statement of Accounts", pdf: "Criteria 3/3.5.1/CA certified copy of statement of accounts as attested by head of the institution.pdf" },
        { name: "Audited Statements of Accounts", pdf: "Criteria 3/3.5.1/Audited statements of accounts indicating the revenue generated through corporate training_consultancy.pdf" },
      
      ]
    },
    { 
      mainContent: "3.6.1",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 3/3.6.1/Merged_Outcomes_of_extension_activities_Index_3.6.1.pdf" },
      ]
    },
    { 
      mainContent: "3.6.2",
      linkNames: [
        { name: "Photographs and any other Supporting Document", pdf: "Criteria 3/3.6.2/Merged_Photographs.pdf" },
        { name: "Report of Extension and Outreach program", pdf: "Criteria 3/3.6.2/Merged_Detailed_Report_Index_Activities_3.6.2.pdf" },
      ]
    },
    { 
      mainContent: "3.7.1",
      linkNames: [
        { name: "Functional MOUs", pdf: "Criteria 3/3.7.1/functional MoUs_linkage_collaborations.pdf" },
        { name: "List of Yearwise Activities", pdf: "Criteria 3/3.7.1/List of yearwise activities.docx.pdf" },
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
        <h1 className="text-[2rem] text-blue-900 font-extrabold">CRITERIA 3: Research, Innovations and Extension</h1>
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






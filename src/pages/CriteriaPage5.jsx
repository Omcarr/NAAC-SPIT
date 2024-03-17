import React, { useState } from "react";
import ExpandableComponent from "../components/ExpandableComponent";

function CriteriaPage() {
  const customContents = [
    {
      mainContent: "5.1.1",
      linkNames: [
        { name: "Year-wise list of Beneficiary Students", pdf: "Criteria 5/5.1.1/Scholarship_Final.pdf" },
        { name: "Sanction Letter of Scholarship and Freeship", pdf: "Criteria 5/5.1.1/Sanction letter of scholarship and free ships (along with English translated version if it is in regional language)..pdf" },
        { name: "Policy Document", pdf: "Criteria 5/5.1.1/Policy Document.pdf" },
      ]
    },
    {
      mainContent: "5.1.2",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 5/5.1.2/Efforts taken by the institution.pdf" },
      ]
    },
    {
      mainContent: "5.1.3",
      linkNames: [
        { name: "Reports for Awareness of Trends in Technology", pdf: "Criteria 5/5.1.3/Awareness in Trends & Technology.pdf" },
        { name: "Reports of Language, Soft Skills, Communication Skills, Life Skills", pdf: "Criteria 5/5.1.3/Languages, Communication Skills, Soft Skills, Life Skills..pdf" },
      ]
    },
    {
      mainContent: "5.1.4",
      linkNames: [
        { name: "Awareness and Undertakings on Policies", pdf: "Criteria 5/5.1.4/1 Proof w.r.t Organisation wide awareness and undertakings on policies with zero tolerance.pdf" },
        { name: "Mechanisms for Submission of Online/Offline Student Greviances", pdf: "Criteria 5/5.1.4/2 Online and Offline Mechanisms.pdf" },
        { name: "Implementation Guidelines of Statutory/Regulatory Bodies", pdf: "Criteria 5/5.1.4/3 Implementation of guidelines of statutory_regulatory bodies.pdf" },
        { name: "Stuatory/Regulatory Committiees", pdf: "Criteria 5/5.1.4/4 statutory_regulatory Committees.pdf" },
        { name: "Annual Report of Committee", pdf: "Criteria 5/5.1.4/5 Annual report of the committee.pdf" },
      ]
    },

    {
      mainContent: "5.2.1",
      linkNames: [
        { name: "Placement and Higher studies summary", pdf: "Criteria 5/5.2.1/Placement and Higher Studies proof(NAAC).docx.pdf" },
        { name: "Placement 2022-23", pdf: "Criteria 5/5.2.1/1 Placement 2022-23.pdf" },
        { name: "Higher studies 2022-23", pdf: "Criteria 5/5.2.1/2 Higher Studies 2022-23.pdf" },
        { name: "Placement 2021-22", pdf: "Criteria 5/5.2.1/3 Placement 2021-22.pdf" },
        { name: "Higher studies 2021-22", pdf: "Criteria 5/5.2.1/4 Higher Studies 2021-22.pdf" },
        { name: "Placement 2020-21", pdf: "Criteria 5/5.2.1/5 Placement 2020-21.pdf" }, 
        { name: "Higher studies 2020-21", pdf: "Criteria 5/5.2.1/6 Higher Studies 2020-21.pdf" },
        { name: "Placement 2019-20", pdf: "Criteria 5/5.2.1/7 Placement 2019-20.pdf" },
        { name: "Higher studies 2019-20", pdf: "Criteria 5/5.2.1/8 Higher Studies 2019-20.pdf" },
        { name: "Placement 2018-19", pdf: "Criteria 5/5.2.1/9 Placement 2018-19.pdf" },
        { name: "Higher studies 2018-19", pdf: "Criteria 5/5.2.1/10 Higher Studies 2018-19.pdf" },
      ]
    },
    {
      mainContent: "5.2.2",
      linkNames: [
        { name: "List of Students Qualified Year-wise", pdf: "Criteria 5/5.2.2/5.2.2 final.pdf" },
      ]
    },
    {
      mainContent: "5.3.1",
      linkNames: [
        { name: "List of E-copies of Award Letters and Certificates", pdf: "Criteria 5/5.3.1/awards.pdf" },
      ]
    },
    {
      mainContent: "5.3.2",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 5/5.3.2/Student Council and other representations.pdf" },
      ]
    },
    {
      mainContent: "5.3.3",
      linkNames: [
        { name: "Report on Sports, Cultural,Technical/Academices Festival ", pdf: "Criteria 5/5.3.3/FESTIVALS.pdf" },
        { name: "List of Participants", pdf: "Criteria 5/5.3.3/List of students participated in the events.pdf" },
        { name: "Copy of Circular/Brochure", pdf: "Criteria 5/5.3.3/Circulars final.pdf" },
      ]
    },
    {
      mainContent: "5.4.1",
      linkNames: [
        { name: "List of Alumni with the Amount Contributed", pdf: "Criteria 5/5.4.1/List of alumnus_alumni with the amount contributed year-wise index.pdf" },
        { name: "Annual Audited Statments", pdf: "Criteria 5/5.4.1/Annual Audited statements.pdf" },
      ]
    },
    {
      mainContent: "5.4.2",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 5/5.4.2/alumni contributions and engagements.pdf" },
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
        <h1 className="text-[2rem] text-blue-900 font-extrabold">CRITERIA 5: Student Support and Progression</h1>
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






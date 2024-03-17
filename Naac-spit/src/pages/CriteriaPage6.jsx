import React, { useState } from "react";
import ExpandableComponent from "../components/ExpandableComponent";

function CriteriaPage() {
  const customContents = [
    {
        mainContent: "6.1.1",
        linkNames: [
          { name: "Additional Information", pdf: "Criteria 6/6.1.1/Additional Information 6.1.1.pdf" },
        ]
      },

      {
          mainContent: "6.2.1",
          linkNames: [
            { name: "Additional Information", pdf: "Criteria 6/6.2.1/Additional Information 6.2.1.pdf" },
          ]
        },
        {
          mainContent: "6.2.2",
          linkNames: [
            { name: "Screenshots of User Intreface", pdf: "Criteria 6/6.2.2/Screenshots of User Intreface.pdf" },
            { name: "Institute Expenditure", pdf: "Criteria 6/6.2.2/6_2_2 Institute Expenditure.pdf" },
            { name: "Annual E-governance Report", pdf: "Criteria 6/6.2.2/6_2_2 Annual e-governance report.pdf" },
          ]
        },
        {
          mainContent: "6.3.1",
          linkNames: [
            { name: "Additional Information", pdf: "Criteria 6/6.3.1/6.3.1 -Additional Information.pdf" },
          ]
        },
        {
          mainContent: "6.3.2",
          linkNames: [
            { name: "Policy Document", pdf: "Criteria 6/6.3.2/Policy document.pdf" },
            { name: "Audited Statement", pdf: "Criteria 6/6.3.2/Audited statement.pdf" },
            { name: "Finacial Letter Year wise", pdf: "Criteria 6/6.3.2/Copy of finacial letter Year wise.pdf" },
          ]
        },
        {
          mainContent: "6.3.3",
          linkNames: [
            { name: "Refresher Course", pdf: "Criteria 6/6.3.3/Refresher course.pdf" },
            { name: "Copy of Certificate ", pdf: "Criteria 6/6.3.3/Copy of Certificate .pdf" },
            { name: "Annual Report", pdf: "Criteria 6/6.3.3/Annal Repot.pdf" },
          ]
        },
        {
          mainContent: "6.4.1",
          linkNames: [
            { name: "Additional Information", pdf: "Criteria 6/6.4.1/6.4.1-Additional Information.pdf" },
          ]
        },
        {
          mainContent: "6.4.2",
          linkNames: [
            { name: "Sanction Letters", pdf: "Criteria 6/6.4.2/6.4.2-Copy of sanction letters.pdf" },
            { name: "Annual Audited Statements", pdf: "Criteria 6/6.4.2/Annual Audited statements.pdf" },
          ]
        },
        {
          mainContent: "6.4.3",
          linkNames: [
            { name: "Additional Information", pdf: "Criteria 6/6.4.3/Additional Information.pdf" },
          ]
        },
        {
          mainContent: "6.5.1",
          linkNames: [
            { name: "Additional Information", pdf: "Criteria 6/6.5.1/6.5.1.-additional Information.pdf" },
          ]
        },
        {
          mainContent: "6.5.2",
          linkNames: [
            { name: "Additional Information", pdf: "Criteria 6/6.5.2/6.5.2.-Additional Informationpdf.pdf" },
          ]
        },
        {
          mainContent: "6.5.3",
          linkNames: [
            { name: "Quality Audit Reports", pdf: "Criteria 6/6.5.3/Quality Audit Reports.pdf" },
            { name: "NIRF AAA Report", pdf: "Criteria 6/6.5.3/NIRF AAA Report.pdf" },
            { name: "List of Collaborative Quality Initiatives with other Institute", pdf: "Criteria 6/6.5.3/List of Collaborative Quality Initiatives with other Institute.pdf" },
            { name: "Relevant Document", pdf: "Criteria 6/6.5.3/Relevant Document.pdf" },
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
        <h1 className="text-[2rem] text-blue-900 font-extrabold">CRITERIA 6: Governance, Leadership and Management</h1>
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







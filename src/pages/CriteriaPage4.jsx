import React, { useState } from "react";
import ExpandableComponent from "../components/ExpandableComponent";

function CriteriaPage() {
  const customContents = [
    {
      mainContent: "4.1.1",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 4/4.1.1/4.1.1_Upload any additional information.pdf" },
      ]
    },
    {
      mainContent: "4.1.2",
      linkNames: [
        { name: "Relevant Expenditure Claimed for Infrastructure Augmentation", pdf: "Criteria 4/4.1.2/Audited income.pdf" },
      ]
    },
    {
      mainContent: "4.2.1",
      linkNames: [

        { name: "Additional Information", pdf: "Criteria 4/4.2.1/Additional information.pdf" },

      ]
    },
    {
      mainContent: "4.2.2",
      linkNames: [
        { name: "Library Books Expenditure", pdf: "Criteria 4/4.2.2/Audited income.pdf"},
      ]
    },
    {
      mainContent: "4.3.1",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 4/4.3.1/Additional information.pdf" },
      ]
    },
    {
      mainContent: "4.3.2",
      linkNames: [
        { name: "Computer Purchase Bills", pdf: "Criteria 4/4.3.2/Purchased BillsCopies highlighting the number of computers purchased.pdf.pdf" },
        { name: "Extract Stock Register", pdf: "Criteria 4/4.3.2/4.3.2.pdf" },
      ]
    },
    {
      mainContent: "4.3.3",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 4/4.3.3/Additional information.pdf" },
      ]
    },
    {
      mainContent: "4.4.1",
      linkNames: [
        { name: "Physical and Academic Expenditure", pdf: "Criteria 4/4.4.1/Audited income and expenditure.pdf" },
      ]
    },
    {
      mainContent: "4.4.2",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 4/4.4.2/Additional information.pdf" },
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
        <h1 className="text-[2rem] text-blue-900 font-extrabold">CRITERIA 4: Infrastructure and Learning Resources</h1>
        <div className="w-full h-[2px] bg-gradient-to-l from-white via-gray-500 to-black"></div>
        <div className="m-7">
          <div className="md:mr-0 -mr-4 flex flex-wrap">
            {customContents.map((content, index) => (
              <div key={index} className="mt-3 md:mr-3 ">
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







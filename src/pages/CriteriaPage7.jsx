import React, { useState } from "react";
import ExpandableComponent from "../components/ExpandableComponent";

function CriteriaPage() {
  const customContents = [
    {
      mainContent: "7.1.1",
      linkNames: [
        { name: "Additonal Information", pdf: "Criteria 7/7.1.1/Additional Information.pdf" },
      ]
    },
    {
      mainContent: "7.1.2",
      linkNames: [
        { name: "Permission for Connecting to Grid", pdf: "Criteria 7/7.1.2/Permission Document for connecting to grid.pdf" },
        { name: "Photographs of Facilities", pdf: "Criteria 7/7.1.2/Photographs of facilities.pdf" },
        { name: "Bills for Purchase of Equipment", pdf: "Criteria 7/7.1.2/Bills for purchase of equipment.pdf" },
      ]
    },  
    {
      mainContent: "7.1.3",
      linkNames: [
        { name: "Relevant Information to Waste Management", pdf: "Criteria 7/7.1.3/Any other relevant information.pdf" },
      ]
    },
    {
      mainContent: "7.1.4",
      linkNames: [
        { name: "Green Audit Report on Water Conservation", pdf: "Criteria 7/7.1.4/Green audit report on water conservation.pdf" },
        { name: "Geotagged Photographs of the Facilities", pdf: "Criteria 7/7.1.4/Geotagged Photographs of the facilities.pdf" },
        { name: "Bills of Purchase", pdf: "Criteria 7/7.1.4/Bills of purchase.pdf" },
      ]
    },
    {
      mainContent: "7.1.5",
      linkNames: [
        { name: "Clean and Green Campus Policy", pdf: "Criteria 7/7.1.5/Clean and Green Campus Policy.pdf" },
        { name: "Geo-tagged photographs", pdf: "Criteria 7/7.1.5/Photographs.pdf" },
        { name: "Circulars and report of activities", pdf: "Criteria 7/7.1.5/Circulars and report of activities.pdf" },
      ]
    },
    {
      mainContent: "7.1.6",
      linkNames: [
        { name: "Report on Beyond Campus Activities", pdf: "Criteria 7/7.1.6/Report on beyond Campus activities.pdf" },
        { name: "Policy on Environment and Energy usage ", pdf: "Criteria 7/7.1.6/Policy on environment and energy usage .pdf" },
        { name: "Green Audit and Environment Audit Reports", pdf: "Criteria 7/7.1.6/Green Energy and Environment Audit reports.pdf" },
        { name: "Certificates of awards Received", pdf: "Criteria 7/7.1.6/Certificates of awards received.pdf" },
      ]
    },
    {
      mainContent: "7.1.7",
      linkNames: [
        { name: "Additional Information", pdf: "Criteria 7/7.1.7/Additional Information.pdf" },
      ]
    },
    {
      mainContent: "7.1.8",
      linkNames: [
        { name: "Supporting Documents for Information Provided", pdf: "Criteria 7/7.1.8/Supporting Documents for information provided.pdf" },
      ]
    },
    {
      mainContent: "7.1.9",
      linkNames: [
        { name: "Details of Activities", pdf: "Criteria 7/7.1.9/Details of activities.pdf" },
        { name: "Any other Relevant Information", pdf: "Criteria 7/7.1.9/Any other relevant information.pdf" },
        
      ]
    },
    {
      mainContent: "7.1.10",
      linkNames: [
        { name: "Report on Student Attributes", pdf: "Criteria 7/7.1.10/Report on student attributes.pdf" },
        { name: "Any Other Relevant Documents to Support the Claim", pdf: "Criteria 7/7.1.10/Any other relevant documents to support the claim.pdf" },
        { name: "Constitution & Proceeding of Monitoring Committee", pdf: "Criteria 7/7.1.10/Constitution & Proceedings of Monitoring Committee.pdf" },
        { name: "Circulars and Geotagged photographs of activities under this metric", pdf: "Criteria 7/7.1.10/Circulars and geotagged photographs of activities under this metric.pdf" },
      ]
    },
    {
      mainContent: "7.2.1",
      linkNames: [
        { name: "Best Practices", pdf: "Criteria 7/7.2.1/Best Practices.pdf" },
      ]
    },
    {
      mainContent: "7.3.1",
      linkNames: [
        { name: "Relevant Information", pdf: "Criteria 7/7.3.1/Any other relevant information.pdf" },
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
        <h1 className="text-[2rem] text-blue-900 font-extrabold">CRITERIA 7: Institutional Values and Best Practices</h1>
        <div className="h-[2px] bg-gradient-to-l from-white via-gray-500 to-black"></div>
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






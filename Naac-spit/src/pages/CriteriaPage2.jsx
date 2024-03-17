import React, { useState } from "react";
import ExpandableComponent from "../components/ExpandableComponent";

function CriteriaPage() {
  const customContents = [
    {
      mainContent: "2.1",
      linkNames: [
        { name: "List of the Faculty Year-wise", pdf: "Criteria 2/2.1/2.1 Percentage of full time teachers working in the institution throughout during the last five years.pdf" },
      ]
    },
    {
      mainContent: "2.2",
      linkNames: [
        { name: "List of the Faculty Year-wise", pdf: "Criteria 2/2.2/2.2.pdf" },
      ]
    },
    {
      mainContent: "2.1.1",
      linkNames: [
        { name: "Admission List as Published by HEI", pdf: "Criteria 2/2.1.1/2.1.1 Final Admission list as published by HEI.pdf" },
        { name: "Sanction of Intake as Approved by Competent Authority", pdf: "Criteria 2/2.1.1/2.1.1 Sanction of Intake as approved by competent authority.pdf" },
      ]
    },
    {
      mainContent: "2.1.2",
      linkNames: [
        { name: "Percentage of Seats Filled against Reserved Categories", pdf: "Criteria 2/2.1.2/Percentage of seats filled against reserved categories.pdf" },
        { name: "Letter Issued by State Gov Indicating Reserved Catagories", pdf: "Criteria 2/2.1.2/2.1.2 Copy of letter issued by State Gov indicating reserved catagories.pdf" },
      ]
    },
    {
      mainContent: "2.2.1",
      linkNames: [
        { name: "Catering to Differential Learning", pdf: "Criteria 2/2.2.1/2.2.1 Catering to differential learning .pdf" },
      ]
    },
    {
      mainContent: "2.2.2",
      linkNames: [
        { name: "Full time teachers in 2022-23", pdf: "Criteria 2/2.2.2/2.2.2 full time teachers 2022-23.pdf" },
        { name: "Number of students in 2022-23", pdf: "Criteria 2/2.2.2/2.2.2 List showing number of students in 22-23.pdf" },
        
      ]
    },
    {
      mainContent: "2.3.1",
      linkNames: [
        { name: "Student Centric Methods", pdf: "Criteria 2/2.3.1/Student centric methods.pdf" },
      ]
    },
    {
      mainContent: "2.3.2",
      linkNames: [
        { name: "Effective Mentor-Mentee Schemes", pdf: "Criteria 2/2.3.2/2.3.2 The institution adopts effective Mentor-Mentee Schemes to address academics and student-psychological issues.pdf" },
        { name: "List of Active mentors", pdf: "Criteria 2/2.3.2/2.3.2_list of active mentors.pdf" },
      ]
    },
    {
      mainContent: "2.3.3",
      linkNames: [
        { name: "Adherence to Academic Calendar", pdf: "Criteria 2/2.3.3/2.3.3 Academic Calendar Adherance.pdf" },
      ]
    },
    {
      mainContent: "2.4.1",
      linkNames: [
        { name: "Sanction Letters Indicating Number of Posts", pdf: "Criteria 2/2.4.1/2.4.1.1 Sanction letters indicating number of posts.pdf" },
      ]
    },
    {
      mainContent: "2.4.2",
      linkNames: [
        { name: "List of faculty with PhD", pdf: "Criteria 2/2.4.2/List of faculty with PhD Yearwise.pdf" },
        { name: "PhD Certificates", pdf: "Criteria 2/2.4.2/Copies of PhD Certificate.pdf" },
      ]
    },
    {
      mainContent: "2.5.1",
      linkNames: [
        { name: "Date of Publication of Results", pdf: "Criteria 2/2.5.1/2.5.1 Average number of days from the date of last semester-end_ year- end examination till the last date of declaration of results during the last five years.pdf" },
        { name: "Policy document", pdf: "Criteria 2/2.5.1/Policy document on Declaration of results.pdf" },
        { name: "Exam timetables", pdf: "Criteria 2/2.5.1/2.5.1 Exam Timetables released by CoE.pdf"},
      ]
    },
    {
      mainContent: "2.5.2",
      linkNames: [
        { name: "Student Complaints Greivances about Evaluation", pdf: "Criteria 2/2.5.2/2.5.2 Percentage of student complaints_greivances about evaluation.pdf" },
        { name: "Additional Document", pdf: "Criteria 2/2.5.2/Any other document-students appered.pdf" },
      ]
    },
    {
      mainContent: "2.5.3",
      linkNames: [
        { name: "IT Integration and Reforms in the Examination Procedures", pdf: "Criteria 2/2.5.3/2.5.3-QLM- IT integration and reforms in the examination procedures.pdf" },
      ]
    },
    {
      mainContent: "2.6.1",
      linkNames: [
        { name: "Learning Outcomes", pdf: "Criteria 2/2.6.1/2.6.1-The Institutation has stated learning outcomes.pdf" },
      ]
    },
    {
      mainContent: "2.6.2",
      linkNames: [
        { name: "Report on Pass Percentage of Students", pdf: "Criteria 2/2.6.2/Certified CoE report of pass percentage.pdf" },
        { name: "Annual Report of COE", pdf: "Criteria 2/2.6.2/Annual Report - Certified by COE.pdf" },
        { name: "Gazette 2022-23", pdf: "Criteria 2/2.6.2/2.6.2 Any other relevant document- 2022-23 Gazette.pdf" },

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
        <h1 className="text-[2rem] text-blue-900 font-extrabold">CRITERIA 2: Teaching-learning and Evaluation</h1>
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







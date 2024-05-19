import React, { useState } from "react";
import ExpandableComponent from "../components/ExpandableComponent";

function CriteriaPage() {
  const customContents = [
    {
      mainContent: "Criteria 1",
      linkNames: [
        
        { name: "Number of students on rolls year wise", pdf: "DVV/Extended Profile/1.1Number of students on rolls year wise during last five years.pdf" },
        { name: "Number of final year outgoing students", pdf: "DVV/Extended Profile/1 .2 Number of final year outgoing students year wise during last five years.pdf" },
       
        { name: "MoM of BOS and AC", pdf: "DVV/1.2.1/1.2.1 MoM of BOS and AC.pdf" },
        { name: "Syllabus Revision", pdf: "DVV/1.2.1/1.2.1 Syllabus Revision.pdf" },
        { name: "List of New Courses", pdf: "DVV/1.2.1/updated 1.2.1 dvv -8524.pdf" },
 
       

        { name: "List of Value added Program", pdf: "DVV/1.3.2/1.3.2List of Value added Program.pdf" },
        { name: "Value added courses content", pdf: "DVV/1.3.2/1.3.2. Value added courses content.pdf" },
        { name: "List of Student and certificate", pdf: "DVV/1.3.2/1.3.2 List of Student and certificate.pdf" },


        { name: "List of Internship students and certificate", pdf: "DVV/1.3.3/1.3.3 List of Internship students and certificate.pdf" },
        { name: "Program and course contents having element of field projects", pdf: "DVV/1.3.3/1.3.3 Program and course contents having element of field projects.pdf" },
        { name: "Subsequent Academic Council meeting", pdf: "DVV/1.3.3/Subsequent Academic Council meeting.pdf" },

       
        { name: "Alumni Feedback", pdf: "DVV/1.4.1/alumni.pdf" },
        { name: "Employer Feedback", pdf: "DVV/1.4.1/employer.pdf" },
        { name: "Parent Feedback", pdf: "DVV/1.4.1/parent.pdf" },
        { name: "Students Feedbck", pdf: "DVV/1.4.1/students feedbck.pdf" },
    
    ]
    },
    {
      mainContent: "Criteria 2",
      linkNames: [
        { name: "Number of Full Time Teachers Year wise", pdf: "DVV/2.1/2.1 Lhead-merged.pdf" },
        { name: "Total No. of Full time teachers worked during the last five years", pdf: "DVV/2.2/1  2.2 Lhead-merged.pdf" },
        { name: "Appoinment Letter", pdf: "DVV/2.2/2 Appoinment Letter merged.pdf" },

        { name: "Sanction of Intake as approved by competent authority", pdf: "DVV/2.1.1/1    2.1.1 Sanction of Intake as approved by competent authority.pdf" },
        { name: "Admission extract", pdf: "DVV/2.1.1/2    Admission extract.pdf" },
        { name: "Admission list as published by HEI", pdf: "DVV/2.1.1/3   2.1.1  Admission list as published by HEI.pdf" },
        { name: "Additional Intake", pdf: "DVV/2.1.1/4   Additional Intake.pdf" },

        { name: "Percentage of seats filled against reserved categories", pdf: "DVV/2.1.2/1   2.1.2 Percentage of seats filled against reserved categories.pdf" },
        { name: "Summary of no. of seats earmarked and admitted", pdf: "DVV/2.1.2/2   2.1.2 DVV Clarification Merged.pdf" },
        { name: "Admission extract", pdf: "DVV/2.1.2/3  Admission extract.pdf" },

        { name: "Sanctioned order of the posts", pdf: "DVV/2.4.1/1    2.4.1_Sanctioned post 2023-2018-merged.pdf" },
        { name: "List of facutlies with PhD and PhD degrees", pdf: "DVV/2.4.2/Copy of 2.4.2 DVV Merged.pdf" },
        { name: "Certified experience of faculties", pdf: "DVV/2.4.3/Copy of 1   2.4.3Nlastest compled acad year.pdf" },

        

        { name: "Number of full time teachers worked in last five years", pdf: "DVV/2.4.4/Copy of 1  2.4.4 final .pdf" },
        { name: "List of full time teachers during first year assessment period", pdf: "DVV/2.4.4/Copy of 2     First Yr of Assessment.pdf" },


        { name: "Exam end date & date of announcement of results", pdf: "DVV/2.5.1/1    Exam n Result Dates-final.pdf" },
        { name: "Exam timetable released by COE", pdf: "DVV/2.5.1/2      2.5.1 Exam Timetables released by CoE.pdf" },
        { name: "Result sheet with date of publication", pdf: "DVV/2.5.1/3    2.5.1Lhead.pdf" },

        { name: "Document of minutes of the griveneces", pdf: "DVV/2.5.2/1   2.5.2 Lhead.pdf" },
        { name: "List of students applied for revaluation", pdf: "DVV/2.5.2/2    2.5.2 Percentage of student complaints_greivances about evaluation.pdf" },


        { name: "Annual report of COE", pdf: "DVV/2.6.2/1 Annual Report - Certified by COE.pdf" },
        { name: "COE report indicating past percentage of students", pdf: "DVV/2.6.2/2 Certified CoE report of pass percentage.pdf" },
      ]
    },  
    {
      mainContent: "Criteria 3",
      linkNames: [
        { name: "Audited Income Expenditure", pdf: "DVV/3.1.2/Audited Income-Expenditure.pdf" },
        { name: "List of faculty seed money for research", pdf: "DVV/3.1.2/List of faculty seed money for research.pdf" },
        { name: "Sanction letters", pdf: "DVV/3.1.2/Sanction letters.pdf" },


        { name: "E-copies of the teachers", pdf: "DVV/3.1.3/E-copies of the teachers.pdf" },
        { name: "List of teachers awarded", pdf: "DVV/3.1.3/List_of_teachers awarded.pdf" },

        { name: "List of grants", pdf: "DVV/3.2.1/List of grantss .pdf" },

        { name: "List of teachers", pdf: "DVV/3.2.2/List of teachers..pdf" },
        { name: "Sanction order", pdf: "DVV/3.2.2/Sanction order.pdf" },

        { name: "Faculty as Research guides", pdf: "DVV/3.2.3/faculty as Research guides.pdf" },

        
        { name: "Bills of purchase", pdf: "DVV/3.4.1/Bills of purchase.pdf" },
        { name: "Constitution of the ethics committee.", pdf: "DVV/3.4.1/Constitution of the ethics committee..pdf" },
        { name: "Copy of the syllabus.", pdf: "DVV/3.4.1/Copy of the syllabus..pdf" },
        { name: "Research advisory committee", pdf: "DVV/3.4.1/research advisory committee.pdf" },


        { name: "Letters Received", pdf: "DVV/3.4.2/letter_received.pdf" },
        { name: "The joining letter Ph.D.", pdf: "DVV/3.4.2/the joining letter Ph.D..pdf" },


        { name: "Link to journal papers", pdf: "DVV/3.4.3/link to journal papers.pdf" },
        { name: "Screenshots of journal papers 2018", pdf: "DVV/3.4.3/journalpapers2018.pdf" },
        { name: "Screenshots of journal papers 2019", pdf: "DVV/3.4.3/journalpapers2019.pdf" },
        { name: "Screenshots of journal papers 2020", pdf: "DVV/3.4.3/journalpapers2020.pdf" },
        { name: "Screenshots of journal papers 2021", pdf: "DVV/3.4.3/screenshots of journal papers 2021.pdf" },
        { name: "Screenshots of journal papers 2022", pdf: "DVV/3.4.3/screenshots of journal papers 2022.pdf" },
        { name: "Screenshots of journal papers 2023", pdf: "DVV/3.4.3/journalpapers2023.pdf" },
        { name: "Data Template", pdf: "DVV/3.4.3/data_template_3.4.3.pdf" },



        { name: "Ecopy of along with ISBN number", pdf: "DVV/3.4.4/Ecopy with ISBN number.pdf" },
  
        { name: "Audited statements", pdf: "DVV/3.5.1/Audited statements.pdf" },
        { name: "Letter from the  beneficiary", pdf: "DVV/3.5.1/Letter from the  beneficiary.pdf" },

        { name: "Activities", pdf: "DVV/3.6.2/3.6.2_ctivities.pdf" },
        { name: "Outreach Activities", pdf: "DVV/3.6.2/outreach activities.xlsx - 3.6.2 .pdf" },


        { name: "Copies of functional MoUs", pdf: "DVV/3.7.1/Copies_of_functional MoUs.pdf" },
        { name: "List of yearwise activities", pdf: "DVV/3.7.1/List of yearwise activities.docx.pdf" },
        { name: "Summary of the functional MOUs", pdf: "DVV/3.7.1/Summary of the functional MOUs.pdf" },

      ]
    },
    {
      mainContent: "Criteria 4",
      linkNames: [
        { name: "Expense Infrastructure", pdf: "DVV/4.1.2/4.1.2_Exp_InfraDA.pdf" },
        { name: "Fund", pdf: "DVV/4.1.2/4.1.2_fund.pdf" },
        { name: "EF Excluding Salary", pdf: "DVV/4.1.2/3.1_EFExcludingSalary.pdf" },
        { name: "Statement salary show", pdf: "DVV/4.1.2/3.1_Statementsalaryshow.pdf" },

        { name: "Purchase Expenditure", pdf: "DVV/4.2.2/4.2.2_Expenditurepurchaseb.pdf" },

        { name: "ESR", pdf: "DVV/4.3.2/4.3.2_ESR.pdf" },
        { name: "PB", pdf: "DVV/4.3.2/4.3.2_PB.pdf" },


        { name: "Physical Expenditure", pdf: "DVV/4.4.1/4.4.1_Expenditurephysicalfaa.pdf" },
      ]
    },
    {
        mainContent: "Criteria 5",
        linkNames: [
          { name: "Government Scholarship Policy document", pdf: "DVV/5.1.1/1 Government Scholarship Policy document.pdf" },
          { name: "Non Government Scholarship Policy document", pdf: "DVV/5.1.1/2 Non Government Scholarship Policy document.pdf" },
          { name: "Sanction letter of scholarship", pdf: "DVV/5.1.1/3 sanction letter of scholarship.pdf" },
          { name: "Year-wise list of beneficiary students in each scheme", pdf: "DVV/5.1.1/4 Year-wise list of beneficiary students in each scheme.pdf" },


          { name: "Capacity Development Programme", pdf: "DVV/5.1.3/1 S.P.I.T._Capacity_Development_Programme.pdf" },
          { name: "Awareness in Trends and Technology", pdf: "DVV/5.1.3/2.1 Awareness in Trends and Technology.pdf" },
          { name: "Language, Life Skills", pdf: "DVV/5.1.3/2.2 Language, Life Skills.pdf" },

          { name: "Minutes of the meetings of student grievances", pdf: "DVV/5.1.4/1 Minutes of the meetings of student grievances.pdf" },
          { name: "Anti Ragging committee", pdf: "DVV/5.1.4/2 Anti Ragging committee.pdf" },
          { name: "Grievance Redressal committee", pdf: "DVV/5.1.4/3 Grievance Redressal committee.pdf" },
          { name: "Internal Complaints committee", pdf: "DVV/5.1.4/4 Internal Complaints committee.pdf" },

          { name: "Year-wise list of students placed details", pdf: "DVV/5.2.1/1 Year-wise list of students placed details.pdf" },
          { name: "Higher Studies 2022-23", pdf: "DVV/5.2.1/2.1 Higher Studies 2022-23.pdf" },
          { name: "Higher Studies 2021-22", pdf: "DVV/5.2.1/2.2 Higher Studies 2021-22.pdf" },
          { name: "Higher Studies 2020-21", pdf: "DVV/5.2.1/2.3 Higher Studies 2020-21.pdf" },
          { name: "Higher Studies 2019-20", pdf: "DVV/5.2.1/2.4 Higher Studies 2019-20.pdf" },
          { name: "Higher Studies 2018-19", pdf: "DVV/5.2.1/2.5 Higher Studies 2018-19.pdf" },


          { name: "List of students qualified yearwise under each head.", pdf: "DVV/5.2.2/1 List of students qualified yearwise under each head..pdf" },
          { name: "Qualifying Certificates", pdf: "DVV/5.2.2/2 Qualifying Certificates.pdf" },

          { name: "E-copies of award letters and certificates", pdf: "DVV/5.3.1/1 E-copies of award letters and certificates.pdf" },
         
          { name: "List of number of students participants in events", pdf: "DVV/5.3.3/1 List of number of students participants in events.pdf" },
          { name: "Report of the events", pdf: "DVV/5.3.3/2 Report of the events.pdf" },
          
          { name: "Alumni Association Registration Certificate", pdf: "DVV/5.4.1/1 Alumni Association Registration Certificate.pdf" },
          { name: "Annual audited statements of account", pdf: "DVV/5.4.1/2 Annual audited statements of account.pdf" },
        ]
      },
    {
      mainContent: "Criteria 6",
      linkNames: [
        { name: "ERP Contract Document", pdf: "DVV/6.2.2/ERP Contract Document.pdf" },
        { name: "Institutional expenditure statements", pdf: "DVV/6.2.2/Institutional expenditure statements.pdf" },
        { name: "Screenshot of UI", pdf: "DVV/6.2.2/screenshots .pdf" },


        { name: "Policy Document", pdf: "DVV/6.3.2/Policy Document.pdf" },
        { name: "Ecopy letters FY-22-23", pdf: "DVV/6.3.2/Ecopy letters FY-22-23.pdf" },
        { name: "Faculty List FY-22-23", pdf: "DVV/6.3.2/Faculty List FY-22-23.pdf" },
        { name: "Ecopy letters FY-21-22", pdf: "DVV/6.3.2/Ecopy letters FY-21-22.pdf" },
        { name: "Faculty List FY-21-22", pdf: "DVV/6.3.2/Faculty List FY-21-22 (1).pdf" },
        { name: "Ecopy letters FY-20-21", pdf: "DVV/6.3.2/Ecopy letters FY-20-21.pdf" },
        { name: "Faculty List FY-20-21", pdf: "DVV/6.3.2/Faculty List FY-20-21.pdf" },
        { name: "Ecopy letters FY-19-20", pdf: "DVV/6.3.2/Ecopy letters FY-19-20.pdf" },
        { name: "Faculty List FY-19-20", pdf: "DVV/6.3.2/Faculty List FY-19-20.pdf" },
        { name: "E-Copy lettersFY-18-19-", pdf: "DVV/6.3.2/E-Copy lettersFY-18-19-.pdf" },
        { name: "Faculty list FY-18-19", pdf: "DVV/6.3.2/Faculty list FY-18-19.pdf" },
        { name: "Audited Statement", pdf: "DVV/6.3.2/Audited Statement.pdf" },


        { name: "Revised DVV", pdf: "DVV/6.3.3/DVV_6.3.3.pdf" },
        { name: "List of teachers 22-23", pdf: "DVV/6.3.3/2022-23-Copy of List_Of_Teacher.pdf" },
        { name: "Ecopy Certificate 22-23", pdf: "DVV/6.3.3/2022-23-Copy of Copy_Of_Certificate.pdf" },
        { name: "List of teachers 21-22", pdf: "DVV/6.3.3/Copy of List of Teachers 21-22.pdf" },
        { name: "Ecopy Certificate 21-22", pdf: "DVV/6.3.3/Copy of Certificate 21-22.pdf" },
        { name: "List of teachers 20-21", pdf: "DVV/6.3.3/2020-21-Copy of List_of_Teacher.pdf" },
        { name: "Ecopy Certificate 20-21", pdf: "DVV/6.3.3/2020-21Copy of Copy_Of_certificate.pdf" },
        { name: "List of teachers 19-20", pdf: "DVV/6.3.3/Copy of List of Faculty2019-20.pdf" },
        { name: "Ecopy Certificate 19-20", pdf: "DVV/6.3.3/Copy of Certificate_2019-20.pdf" },
        { name: "List of teachers 18-19", pdf: "DVV/6.3.3/18-19-List_Of_Teacher.pdf" },
        { name: "Ecopy Certificate 18-19", pdf: "DVV/6.3.3/18-19-copy_Of_Certificate.pdf" },
  

        { name: "Annual audited statements", pdf: "DVV/6.4.2/Annual audited statements.pdf" },
        { name: "Copy of Sanction letter", pdf: "DVV/6.4.2/Copy of Sanction letter.pdf" },


        { name: "Proceedings of AAA", pdf: "DVV/6.5.3/Proceedings of AAA.pdf" },
        { name: "List of Activities ", pdf: "DVV/6.5.3/List of Activities .pdf" },
        { name: "Supporting Document", pdf: "DVV/6.5.3/Supporting Document.pdf" },
        { name: "NIRF Certificates", pdf: "DVV/6.5.3/NIRF Certificates.pdf" },
        { name: "Quality certificate", pdf: "DVV/6.5.3/Quality certificate.pdf" },

      ]
    },
    {
      mainContent: "Criteria 7",
      linkNames: [{ name: "Any other relevant proof", pdf: "DVV/7.1.2/7.1.2 Any other relevant proof for selected options.pdf" },
        { name: "Bills for purchase of equipment under this metric", pdf: "DVV/7.1.2/7.1.2 Bills for purchase of equipment under this metric.pdf" },
        { name: "Geotagged Photographs of facilities", pdf: "DVV/7.1.2/7.1.2 Geotagged Photographs of facilities.pdf" },
        { name: "Permission Document for connecting to grid", pdf: "DVV/7.1.2/7.1.2 Permission Document for connecting to grid.pdf" },
        
        { name: "Bills for purchase of equipment", pdf: "DVV/7.1.4/7.1.4 Bills for purchase of equipment.pdf" },
        { name: "Geotagged Photos of facilities", pdf: "DVV/7.1.4/7.1.4 Geotagged Photos of facilities.pdf" },
        { name: "Green Audit report on water conservation facilties on campus", pdf: "DVV/7.1.4/7.1.4 Green Audit report on water conservation facilties on campus.pdf" },
        { name: "water conservation policy document", pdf: "DVV/7.1.4/7.1.4 water conservation policy document.pdf" },
        
        { name: "Beyond Campus Activities", pdf: "DVV/7.1.6/7.1.6 Beyond Campus Activities.pdf" },
        { name: "Certificates and Awards", pdf: "DVV/7.1.6/7.1.6 Certificates and Awards.pdf" },
        { name: "Green, Energy and Environment Audit Reports (2018-19 to 2022-23)", pdf: "DVV/7.1.6/7.1.6 Green, Energy and Environment Audit Reports (2018-19 to 2022-23).pdf" },
        { name: "Any other relevant proof", pdf: "DVV/7.1.6/7.1.6 Policy Document on Environment and Energy Usage.pdf" },


        { name: "Activities organised under this metric for students", pdf: "DVV/7.1.10/7.1.10 Activities organised under this metric for students.pdf" },
        { name: "Institute Handbook", pdf: "DVV/7.1.10/7.1.10 Institute Handbook.pdf" },
        { name: "Activities organised under this metric for faculty and staff", pdf: "DVV/7.1.10/7.1.10 Activities organised under this metric for faculty and staff.pdf" },
        { name: "Policy Document on Code of Conduct", pdf: "DVV/7.1.10/7.1.10 Policy Document on Code of Conduct.pdf" },
        { name: "Proceedings of Monitoring Committee", pdf: "DVV/7.1.10/7.1.10 Proceedings of Monitoring Committee.pdf" },

        
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
        <h1 className="text-[2rem] text-blue-900 font-extrabold">DVV Clarifications</h1>
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






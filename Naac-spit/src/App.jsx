import Buttons from "./components/Buttons.jsx";
import { motion } from 'framer-motion';

function App() {
  const Btns=[
    "CRITERIA 1",
    "CRITERIA 2",
    "CRITERIA 3",
    "CRITERIA 4",
    "CRITERIA 5",
    "CRITERIA 6",
    "CRITERIA 7",
    "SSR",
  ]
  return (
    <>
    {/* <Header/> */}
    <motion.div className="flex gap-3 justify-center align-center">
    {Btns.map((content, index) => (
        <div key={index}>
          <Buttons Btn={content} />
        </div>
      ))}
      </motion.div>
    {/* <div className="mt-3">
    <CriteriaPage/>
    </div> */}
    </>
  );
} 

export default App

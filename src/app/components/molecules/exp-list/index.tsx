import ExpRow from "@/app/components/atoms/exp-row";
import GlowWrapper from "@/app/components/atoms/glow-wrapper";

export default function ExpList() {
  return (
    <GlowWrapper opacity={0.25}>
      <div className='max-w-4xl mt-8 md:m-0'>
        <ExpRow
          date='Feb 2024 - Present'
          title='Backend Developer Intern'
          location='Bank BRI'
          desc="Developed and maintained BRI's Communication Network CRM backend services"
        />
        <ExpRow
          date='Jan 2024 - Present'
          title='Director of Web Development'
          location='RISTEK Fasilkom UI'
          desc="Managed the technical aspects of all RISTEK's projects"
        />
        <ExpRow
          date='Feb - May 2024'
          title='Teaching Assistant for Advanced Programming'
          location='Fasilkom UI'
          desc='Aided in delivering lessons about more advanced topics of web development and software engineering'
        />
        <ExpRow
          date='Aug - Dec 2023'
          title='Teaching Assistant for Platform-Based Development'
          location='Fasilkom UI'
          desc='Taught the fundamentals of web development using HTML, CSS, and JavaScript'
        />
        <ExpRow
          date='July - Oct 2023'
          title='Mentor Coordinator'
          location='PMB Fasilkom UI'
          desc="Led 112 mentors in the Faculty's study orientation program and mentored a total of 8 students"
        />
      </div>
    </GlowWrapper>
  );
}

import ExpRow from "@/app/components/atoms/exp-row";
import GlowWrapper from "@/app/components/atoms/glow-wrapper";

export default function ExpList() {
  return (
    <GlowWrapper opacity={0.25}>
      <div className='max-w-4xl m-8 md:m-0'>
        <ExpRow
          date='August 2023 - Present'
          title='Teaching Assistant for Platform-based Development'
          location='Fasilkom UI'
          desc='Teaches the fundamentals of web using HTML, CSS, and JavaScript, and modern frameworks using Django and Flutter'
        />
        <ExpRow
          date='July 2023 - Present'
          title='Full Stack Developer'
          location='PMB Fasilkom UI'
          desc='Updating the website to the latest iteration and adding new functionalities both on frontend and backend'
        />
        <ExpRow
          date='Mar 2023 - Present'
          title='Web Development Team'
          location='RISTEK Fasilkom UI'
          desc="Being involved in the development of website projects and participating in Ristek&apos;s internal classes"
        />
        <ExpRow
          date='Feb 2023 - Present'
          title='Vice Head of IT'
          location='KMK Fasilkom UI'
          desc="Responsible for creating organization&apos;s website using T3"
        />
        <ExpRow
          date='Aug - Dec 2022'
          title='Mentor Coordinator'
          location='PMB Fasilkom UI'
          desc="Led 70 mentors in the Faculty&apos;s study orientation program"
        />
      </div>
    </GlowWrapper>
  );
}

import ExpRow from "@/app/components/atoms/exp-row";
import GlowWrapper from "@/app/components/atoms/glow-wrapper";

export default function ExpList() {
  return (
    <GlowWrapper opacity={0.25}>
      <div className='max-w-4xl mt-8 md:m-0'>
        <ExpRow
          date='Mar 2023 - Present'
          title='Web Development Team'
          location='RISTEK Fasilkom UI'
          desc="Being involved in the development of website projects and participating in Ristek&apos;s internal classes"
        />
        <ExpRow
          date='August 2023 - Present'
          title='Teaching Assistant for Platform-based Development'
          location='Fasilkom UI'
          desc='Teaches the fundamentals of web development, including HTML, CSS, JavaScript, Django, and Flutter'
        />
        <ExpRow
          date='July - Nov 2023'
          title='Full Stack Developer'
          location='PMB Fasilkom UI'
          desc='Updated the website visuals added new functionalities both on frontend and backend using Next.js and Express.js'
        />
        <ExpRow
          date='Feb - Oct 2023'
          title='Vice Head of IT'
          location='KMK Fasilkom UI'
          desc="Led a complete website overhaul, replacing the older React/Django codebase with the newer T3 stack (Next.js/tRPC/Prisma)."
        />
        <ExpRow
          date='July - Oct 2023'
          title='Mentor Coordinator'
          location='PMB Fasilkom UI'
          desc="Led 112 mentors in the Faculty&apos;s study orientation program and mentored a total of 8 students"
        />
      </div>
    </GlowWrapper>
  );
}

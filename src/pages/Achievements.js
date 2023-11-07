import React from 'react'
import './Achievement.css'
import ProjectCard from '../components/ProjectCard'

const Achievements = () => {
  // Manually define the project data
  const projectData = [
   
    {
      image_url:
        'https://i.imgur.com/ewJQJM7.jpg',
      project_name: 'International University Carnival on E-Learning (IUCEL) 2022 - Gold Medal Winner',
      description:
        "My passion project, an Augmented Reality mobile application for learning the anatomy and physiology of respiratory system, has earned international recognition and a prestigious Gold Medal at IUCEL 2022! 🌐🏅🧬 What makes this achievement even more special is the invaluable impact it has on medical education. We all know that understanding the human body''s intricacies is a critical foundation for any healthcare professional, and my app aims to make this learning experience not only effective but also engaging and interactive.",
      tech_stack: ['IIDEL', 'IUCEL', 'Gold Medal', 'Adobe XD'],
      source_link:
        'https://www.linkedin.com/posts/hfzkdr_arlearning-medicaleducation-innovation-activity-7125663966193758208-TGvP?utm_source=share&utm_medium=member_desktop',
    },
    {
      image_url: 'https://i.imgur.com/MmBGiz7.jpg',
      project_name: 'PutraLova Trailer Editor - Featured in RTM',
      description:
        'I am immensely proud to have participated in the prestigious Putra Longest Nonstop Volunteerism Activities (PutraLOVA), a remarkable event organized by the Co-curriculum and Student Development Centre, UPM. PutraLOVA is an extraordinary endeavor, setting a record by successfully conducting 40 hours of nonstop volunteerism activities, and earning a well-deserved place in the Malaysia Book of Records. In this event, I had the privilege to serve as the Trailer Volunteerism Editor, which was a challenging and fulfilling role. This experience not only allowed me to contribute to the community but also honed my organizational and communication skills. It is an accomplishment that I hold dear and consider a significant highlight in my portfolio, reflecting my dedication to making a positive impact through volunteerism and my ability to take on responsible roles in noteworthy initiatives.',
      tech_stack: ['Volunteerism', 'MBOR', 'RTM', 'VN'],
      source_link:
        'https://www.youtube.com/watch?v=bFQIHZKmY-s&ab_channel=BeritaRTM',
    },
    
   
    {
      image_url: ' https://media.licdn.com/dms/image/D5622AQFXhnCu56de-Q/feedshare-shrink_800/0/1684408993669?e=1702512000&v=beta&t=ldwLU6rspNM3MupaPMsYOUg-KvAJgy3JHFoy9w61Tco',
      project_name: 'MDEC-PRISMA Top 100 Creative Streamer',
      description:
        "Awarded by Malaysia Digital Economic Corporation (MDEC) in Pakej Rangsangan Industri Kreatif Malaysia (PRISMA) Digital Content Grant",
      tech_stack: ['E-Sport', 'Valorant', 'MASUM'],
      source_link:
        'https://www.linkedin.com/posts/hfzkdr_contentcreator-creative-streaming-activity-7064923382227619840--mof?utm_source=share&utm_medium=member_desktop',
    },
    {
      image_url: 'https://media.licdn.com/dms/image/D562DAQG_snY7mm9S0Q/profile-treasury-image-shrink_800_800/0/1686223113584?e=1699966800&v=beta&t=fyZ9gCfFxzdFyW-n2KxSgJkaon_9tSZv4ExoznlUHuM',
      project_name: 'Inter-University E-Sport Competition (MASUM) - Valorant UPM Team ',
      description:
        "I am incredibly proud to have represented Universiti Putra Malaysia in the interuniversity esports championship organized by Majlis Sukan Universiti Malaysia (MASUM). Through skill, teamwork, and dedication, our team not only made it through the challenging group stage but also secured a spot among the top 16 teams in the competition. This accomplishment is a testament to our hard work and commitment to excellence in Valorant. It's an honor to compete at this level and to showcase the talent and competitive spirit of our university on a national stage. ",
      tech_stack: ['E-Sport', 'Valorant', 'MASUM'],
      source_link:
        'https://www.facebook.com/deARTsa.UPM/videos/1058452658362783/',
    },
    {
      image_url: 'https://i.imgur.com/ogYNneU.jpg',
      project_name: 'E-Sport Forum - Speaker',
      description:
        'The EV Mobile Application is a solution developed for Educity Village (EV) to address the growing demand for a reliable booking system. Traditional booking methods proved fragile and prone to errors, leading to the development of this user-friendly mobile application for space booking. The app caters to the needs of EV residents and guests, offering efficient booking for sports courts, spaces, pool tables, and BBQ pits.',
      tech_stack: ['Flutter', 'Django', 'MySQL', 'Adobe XD'],
      source_link:
        'https://www.youtube.com/watch?v=0SQseOXalc8&ab_channel=KPZtv%21Channel',
    },
    {
      image_url: 'https://media.licdn.com/dms/image/D5622AQFXwG6iwY8rnw/feedshare-shrink_2048_1536/0/1687392903250?e=1702512000&v=beta&t=6DFr-iz0YXcZCT5sXxFAOHv4vhNpc8ze6jeFVsdCMyI',
      project_name: 'Industrial Visit UPM to Innoveam - Presenter',
      description:
        'Industrial Visit',
      tech_stack: ['Adobe XD', 'Canva'],
      source_link:
        'https://xd.adobe.com/view/dfd74d8e-99b2-497e-9184-ccc7c11577be-8a84/',
    },
    
  ]

  return (
    <div className="achievements" id="achievements">
      <h1 className="title projects-title">Achievement Highlights</h1>
      <p className="projects-para">
      During my time at university, I've actively pursued involvement in various aspects of campus life. Academically, I've maintained a strong commitment to my studies, consistently striving to excel in my coursework and achieve second class upper honours. Simultaneously, I've also been highly engaged outside the classroom joining student clubs, organizations and extracurricular activities. My university years have been characterized by a balanced commitment to both academic excellence and active participation in extracurricular activities, fostering personal growth, and a well-rounded education.
      </p>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>
    </div>
  )
}

export default Achievements

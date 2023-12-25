import React from 'react'
import './Achievement.css'
import ProjectCard from '../components/ProjectCard'

const Achievements = () => {
  // Manually define the project data
  const projectData = [
    {
      image_url: 'https://i.imgur.com/ewJQJM7.jpg',
      project_name:
        'International University Carnival on E-Learning (IUCEL) 2022 - Gold Medal Winner',
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
      image_url:
        ' https://i.imgur.com/QYXqttx.jpg',
      project_name: 'MDEC-PRISMA Top 100 Creative Streamer',
      description:
        "Awarded by Malaysia Digital Economic Corporation (MDEC) in Pakej Rangsangan Industri Kreatif Malaysia (PRISMA) Digital Content Grant. Excited to have made it to the Top 100 Creative Streamers, a testament to the power of digital creativity in shaping the future. 🎮💡",
      tech_stack: ['E-Sport', 'Valorant', 'MASUM'],
      source_link:
        'https://www.linkedin.com/posts/hfzkdr_contentcreator-creative-streaming-activity-7064923382227619840--mof?utm_source=share&utm_medium=member_desktop',
    },
    {
      image_url: 'https://i.imgur.com/oF88WvT.jpg',
      project_name: 'Inter-University E-Sport Competition (MASUM) - Valorant UPM Team ',
      description:
        "I am incredibly proud to have represented Universiti Putra Malaysia in the interuniversity esports championship organized by Majlis Sukan Universiti Malaysia (MASUM). Through skill, teamwork, and dedication, our team not only made it through the challenging group stage but also secured a spot among the top 16 teams in the competition. This accomplishment is a testament to our hard work and commitment to excellence in Valorant. It's an honor to compete at this level and to showcase the talent and competitive spirit of our university on a national stage. ",
      tech_stack: ['E-Sport', 'Valorant', 'MASUM'],
      source_link:
        'https://www.facebook.com/deARTsa.UPM/videos/1058452658362783/',
    },
    {
      image_url: 'https://i.imgur.com/GJNXnuL.jpg',
      project_name: 'E-Sport Forum - Speaker',
      description:
        "🎮 Excited to be a part of the Esports Forum organized by KPZ TV during the Za'ba Esport 21 Closing Ceremony! 🌐 As a representative of Universiti Putra Malaysia and having recently competed in the MASUM Interuniversity Esports Championship, I've shared insights into our journey, the challenges we overcame, and the lessons learned in the world of Valorant. 🏆 I bring the audience explore the dynamic landscape of esports, celebrating the spirit of competition, and discussed the future of gaming at this prestigious event! 🚀",
      tech_stack: ['E-Sport','KPZtv', 'Forum'],
      source_link:
        'https://www.youtube.com/watch?v=0SQseOXalc8&ab_channel=KPZtv%21Channel',
    },
    {
      image_url:
        'https://i.imgur.com/PeA07RZ.jpg',
      project_name: 'Industrial Visit UPM to Innoveam - Presenter',
      description:
        "Thrilled to have had the opportunity to showcase the cutting-edge world of 3D simulation and Extended Reality (XR) at Innoveam during the recent industrial visit by the talented juniors from Universiti Putra Malaysia! 🎓I had the privilege of presenting Innoveam's dynamic profile to the bright minds from UPM, giving them a glimpse into our journey of creating immersive digital solutions, fostering deeper connections between academia and industry to create mutually beneficial partnerships that bridge the gap between theory and real-world application.",
      tech_stack: ['Internship', 'AcademiaXIndustry', 'Innoveam'],
      source_link:
        'https://www.linkedin.com/posts/hfzkdr_industrialvisit-digitaltwin-metaverse-activity-7077438812720680960-9TJb?utm_source=share&utm_medium=member_desktop',
    },
  ]

  return (
    <div className="achievements" id="achievements">
      <h1 className="title achievement-title">Achievement Highlights</h1>
      <p className="projects-para">
        During my time at university, I've actively pursued involvement in
        various aspects of campus life. Academically, I've maintained a strong
        commitment to my studies, consistently striving to excel in my
        coursework and achieve second class upper honours. Simultaneously, I've
        also been highly engaged outside the classroom joining student clubs,
        organizations and extracurricular activities. My university years have
        been characterized by a balanced commitment to both academic excellence
        and active participation in extracurricular activities, fostering
        personal growth, and a well-rounded education.
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

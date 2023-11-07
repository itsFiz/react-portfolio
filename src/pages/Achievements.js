import React from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'

const Achievements = () => {
  // Manually define the project data
  const projectData = [
    {
      image_url:
        'https://media.licdn.com/dms/image/D4D22AQH6C2DpGzxVfQ/feedshare-shrink_1280/0/1698890675322?e=1702512000&v=beta&t=OEGEDN3er4hl8yK2bKZfH_Kc22OGDQfRqfVeAX3qZfA',
      project_name: 'International University Carnival on E-Learning (IUCEL) 2022 Gold Medal Winner',
      description:
        "My passion project, an Augmented Reality mobile application for learning the anatomy and physiology of respiratory system, has earned international recognition and a prestigious Gold Medal at IUCEL 2022! 🌐🏅🧬 What makes this achievement even more special is the invaluable impact it has on medical education. We all know that understanding the human body''s intricacies is a critical foundation for any healthcare professional, and my app aims to make this learning experience not only effective but also engaging and interactive.",
      tech_stack: ['Unity', 'Vuforia', 'Blender', 'Adobe XD'],
      source_link:
        'https://www.linkedin.com/posts/hfzkdr_arlearning-medicaleducation-innovation-activity-7125663966193758208-TGvP?utm_source=share&utm_medium=member_desktop',
    },
    {
      image_url: 'https://i.imgur.com/MmBGiz7.jpg',
      project_name: 'PutraLova',
      description:
        'The EV Mobile Application is a solution developed for Educity Village (EV) to address the growing demand for a reliable booking system. Traditional booking methods proved fragile and prone to errors, leading to the development of this user-friendly mobile application for space booking. The app caters to the needs of EV residents and guests, offering efficient booking for sports courts, spaces, pool tables, and BBQ pits.',
      tech_stack: ['Flutter', 'Django', 'MySQL', 'Adobe XD'],
      source_link:
        'https://www.youtube.com/watch?v=LkATF4jqDlU&list=PLX3AEknl3ENJFVaBkrFAJlFyuyBgpo6ZI',
    },
    {
      image_url: 'https://i.imgur.com/ogYNneU.jpg',
      project_name: 'E-Sport Forum Speaker',
      description:
        'The EV Mobile Application is a solution developed for Educity Village (EV) to address the growing demand for a reliable booking system. Traditional booking methods proved fragile and prone to errors, leading to the development of this user-friendly mobile application for space booking. The app caters to the needs of EV residents and guests, offering efficient booking for sports courts, spaces, pool tables, and BBQ pits.',
      tech_stack: ['Flutter', 'Django', 'MySQL', 'Adobe XD'],
      source_link:
        'https://www.youtube.com/watch?v=0SQseOXalc8&ab_channel=KPZtv%21Channel',
    },
    {
      image_url: 'https://i.imgur.com/g4F2ezv.jpg',
      project_name: 'CozyShop',
      description:
        'Cozyshop is an exciting and innovative ecommerce project that aims to redefine the online shopping experience. With a commitment to providing customers with top-quality products, outstanding service, and a seamless user experience.',
      tech_stack: ['Adobe XD', 'Canva'],
      source_link:
        'https://xd.adobe.com/view/dfd74d8e-99b2-497e-9184-ccc7c11577be-8a84/',
    },
    {
      image_url: 'https://i.imgur.com/wPtMnTl.jpg',
      project_name: 'PutraClass',
      description:
        'A proposed web system prototype for SK SERDANG to deal with Covid-19 back to school program. A complete website prototype consist of a classroom, a timetable, and a specified tab for submitting Covid-19 test result. ',
      tech_stack: ['Adobe XD'],
      source_link:
        'https://xd.adobe.com/view/5bd33c80-56bb-4607-9950-eaed180a760c-0e80/?hints=off',
    },

    {
      image_url: 'https://i.imgur.com/M37BH5Q.jpg',
      project_name: 'Aphasia Assist',
      description:
        'Application is developed in a collaboration project with PERKESO for patients that has been diagnosed with aphasia (language disorder). The application has image-to-speech features and is developed as an alternative for aphasia patients to communicate with other people in their daily life.',
      tech_stack: ['Adobe XD', 'Android Studio', 'Kotlin'],
      source_link:
        'https://drive.google.com/file/d/1-1_QVy3umJ7YzCTPjfuyjGcKv9XE389I/view',
    },
    {
      image_url: 'https://i.imgur.com/VkacRVe.jpg',
      project_name: 'Pendekar Jahat',
      description:
        '"Pendekar Jahat" is a menacing 3D warrior character brought to life through meticulous 3D modeling and texturing. This dark and enigmatic character represents the embodiment of evil in a fantasy world. The project showcases an intricately designed evil warrior, featuring sinister armor, menacing weapons, and a foreboding presence."Pendekar Jahat" effectively conveys a character with a dark backstory and a malevolent purpose, adding depth to the character design.',
      tech_stack: ['Blender'],
      source_link: 'https://streamable.com/tzlm44',
    },
    {
      image_url: 'https://i.imgur.com/zSBFJB6.jpg',
      project_name: '3D Donut Oreo',
      description:
        'The "3D Donut Oreo" is a visually delectable 3D modeling project crafted using the powerful Blender software. This artful project takes a delicious spin on the classic donut and Oreo cookie. Careful attention is paid to texturing and lighting, creating an enticing and lifelike appearance. This delightful 3D project offers a visual treat to viewers, celebrating the art of 3D modeling and rendering with a scrumptious twist.',
      tech_stack: ['Blender'],
      source_link:
        'https://hafizkadirwork.wixsite.com/hfzkdr/portfolio-collections/recent-works/animation',
    },
    {
      image_url: 'https://i.imgur.com/5uklNxT.jpg',
      project_name: 'Wedding Montage #HairulFitriah',
      description:
        'The Wedding Montage at Summer Leisure Garden is a creative and heartwarming project that captures the magic and romance of a wedding day set against the lush and enchanting backdrop of Summer Leisure Garden. This project aims to provide newlyweds with a beautifully crafted video montage that encapsulates the most memorable moments of their special day.',
      tech_stack: ['Cinematic Videography', 'Summer Leisure Garden','Filmora X', 'iPhone 13 Pro', ],
      source_link:
        'https://youtu.be/kX58qHrBia0?si=Mzxe8EmELiHA6nOq',
    },
    {
      image_url: 'https://imgur.com/FypSU6k.jpg',
      project_name: 'Pre Convo #Uitm Seremban',
      description:
        'The Pre-Convocation Photoshoot at Tamarind Square is an exciting project that offers graduating students a vibrant urban setting for capturing their achievements and celebrating their upcoming convocation. Set in the modern and creative atmosphere of Tamarind Square, this project aims to provide graduates with a memorable and contemporary photography experience.',
      tech_stack: ['Photography', 'Taman Saujana', 'Canon 1300D'],
      source_link:
        'https://imgur.com/a/rodqhYT',
    },
    {
      image_url: 'https://i.imgur.com/T1mhvjU.jpg',
      project_name: 'Pre Convo #Uitm Penang',
      description:
        'The Pre-Convocation UiTM Photoshoot project is designed to capture the memorable moments of graduating students from Universiti Teknologi MARA (UiTM) in the lead-up to their convocation ceremony. This project aims to provide graduates with a professional and unforgettable photography experience, creating lasting memories of their academic journey and achievements.',
      tech_stack: ['Photography', 'Tamarind Square', 'Canon 1300D'],
      source_link:
        'https://imgur.com/a/GbZR06g',
    },
    {
      image_url: 'https://i.imgur.com/T1vFWvP.jpg',
      project_name: 'Pre Wedding #UnaFarhat',
      description:
        'The Pre-Convocation UiTM Photoshoot project is designed to capture the memorable moments of graduating students from Universiti Teknologi MARA (UiTM) in the lead-up to their convocation ceremony. This project aims to provide graduates with a professional and unforgettable photography experience, creating lasting memories of their academic journey and achievements.',
      tech_stack: ['Photography', 'Tamarind Square', 'Canon 1300D'],
      source_link:
        'https://imgur.com/a/IOl6r5S',
    },
    
    

    // Add more projects as needed
  ]

  return (
    <div className="projects" id="projects">
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

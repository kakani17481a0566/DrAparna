import React from 'react';
import VideoCardsSection from './VideoCardsSection';
import ImageCarouselSection from './ImageCarouselSection';
import JourneyTextSection from './JourneyTextSection';

const JourneySections = () => {
    return (
        <div className="flex flex-col w-full">
            {/* European Business Award */}
            <VideoCardsSection
                title="European Business Award"
                bgClass="bg-white"
                videos={[
                    {
                        title: "Ones To Watch - EBA 2019",
                        youtubeLink: "https://www.youtube.com/watch?v=_4rHe0ijvBA&t=1s"
                    },
                    {
                        title: "European Business Awards-National Winner of ITAY",
                        youtubeLink: "https://www.youtube.com/watch?v=WautPEeOkOw"
                    }
                ]}
            />

            {/* Engage Carousel */}
            <ImageCarouselSection
                title={
                    <>
                        Engage, Enlighten, Encourage And Especially...<br />
                        Be Yourself!
                    </>
                }
                imageBasePath="/image/ENGAGE, ENLIGHTEN, ENCOURAGE AND ESPECIALLY...BE YOURSELF!"
                images={[
                    'slide_01.jpg',
                    'slide_02.jpg',
                    'slide_07.jpg',
                    'slide_10.jpg',
                    'IMG_20191204_234301.jpg',
                    'S20.jpg',
                    'S22.jpg',
                    'S23.jpg',
                    'S24.jpg',
                    'S25.jpg',
                    'S26.jpg',
                    'S27.jpg'
                ]}
            />

            {/* Own Woman */}
            <VideoCardsSection
                title="I'm My Own Woman"
                bgClass="bg-slate-50"
                count={2}
                videos={[
                    {
                        title: "Inspirational Story of Dr Aperna Volluru",
                        youtubeLink: "https://www.youtube.com/watch?v=v-b07V2jQHQ"
                    },
                    {
                        title: "COWE 2019 Award",
                        youtubeLink: "https://www.youtube.com/watch?v=OzRvjPFUWvI"
                    }
                ]}
            />

            {/* Photographs Carousel */}
            <ImageCarouselSection
                title="Freezing a Moment"
                subtitle='"When words become unclear, I shall focus with Photographs."'
                imageBasePath="/image/When words become unclear, I shall focus with Photographs"
                images={[
                    'slide_05.jpg',
                    'slide_07.jpg',
                    'slide_08.jpg',
                    'slide_09.jpg',
                    'S8.jpg',
                    'S10.jpg',
                    'S11.jpg',
                    'S12.jpg',
                    'S13.jpg',
                    'S14.jpg'
                ]}
            />

            {/* Student Section */}
            <JourneyTextSection title="A Student" bgImage="/image/Bg/student_bg.png">
                <p className=" font-woodford text-2xl italic mb-4">
                    My father often said, “I have made you in a hot furnace.” The grit cultivated by my grandmother ensured that I never gave up, no matter how difficult the journey became.
                </p>
                <p>
                    As the daughter of an Army officer, I could have comfortably stayed and studied in India. But an ambition to become “someone someday” took me to the United Kingdom for higher education. When I left home at the age of seventeen, my father told me, “I only have money for your flight ticket, but I know you will never give up and will always uphold our family’s honour.”
                </p>
                <p>
                    My university years were the most testing period of my life. My scholarship covered only my tuition fees, so I worked small jobs to pay for rent and food. I walked 12–16 kilometres every day between my room, workplace, and university, and even worked as a dog walker to sustain myself.
                </p>
                <p>
                    Despite these challenges, perseverance paid off. In my third year, I topped my subject at the University of Sussex, and my achievement was featured on the front page of a local newspaper. Later, I received the UK Queen’s Award for Excellence in Studies, becoming the only non-British recipient of this honour in 27 years.
                </p>
                <p>
                    Looking back, those difficult years taught me the most important lesson of my life: success is built on discipline, resilience, and the courage to continue even when the odds seem overwhelming.
                </p>

            </JourneyTextSection>

            {/* Researcher Section */}
            <JourneyTextSection title="A Researcher">
                <p className="font-bold font-woodford text-2xl italic mb-4 text-dr-accent">
                    “Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world,” said Albert Einstein.
                </p>
                <p>
                    I have always believed that the role of a researcher is to see what everyone else has seen, and think what no one else has thought.
                </p>
                <p>
                    With a PhD in Psychology from the University of Essex (UK) and more than three decades of interdisciplinary research, my work has focused on understanding how human beings think, how environments shape behaviour, and most importantly how children develop cognitively, emotionally, and socially from the earliest years of life.
                </p>
                <p>
                    Over the years, I have studied human development across multiple contexts—examining how biological predispositions, environment, and social structures interact to shape individuals. My research has particularly focused on early childhood development, observing how children grow from birth and how learning environments influence their developmental trajectories.
                </p>
                <p>
                    This long journey of research and real-world application ultimately led to the creation of NeuroPi, a deep-technology platform designed to integrate neuroscience, genetics, epigenetics, and artificial intelligence to better understand and support human development.
                </p>

                <div className="mt-8">
                    <h3 className="font-woodford  text-xl text-dr-accent mb-4">Translating Research into Scalable Systems</h3>
                    <p className="mb-4">
                        My research has not remained confined to academia. Over the past three decades, it has been translated into practical educational frameworks and developmental systems.
                    </p>
                    <p className="mb-4">
                        Working with a multidisciplinary team of psychologists, neuroscientists, educators, and curriculum designers, we developed the foundational learning architecture behind My School ITALY and Ritzy Schools. This included the creation of structured developmental tools such as DECANT, a teaching framework, and MILESTONES, a developmental assessment system.
                    </p>
                    <p>
                        Both frameworks emerged from decades of observation, research, and experimentation in early childhood education, enabling educators to better understand and support children’s cognitive and emotional development.
                    </p>
                </div>

                <div className="mt-8">
                    <h3 className="font-woodford  text-xl text-dr-accent mb-4">Innovation in Early Childhood Education</h3>
                    <p className="mb-4">
                        In 2014, my research papers were accepted by the American University in Washington, D.C., supporting the introduction of Neuro-Linguistic Programming (NLP) principles into Early Childhood Education and Care (ECEC).
                    </p>
                    <p className="mb-4">
                        Following this work, My School ITALY became one of the first preschools globally to integrate NLP principles into early childhood learning environments, creating new approaches to communication, cognitive development, and experiential learning for young children.
                    </p>
                    <p className="mb-4">
                        Today, both My School ITALY and Ritzy Schools operate with strong European operational standards, emphasizing teacher training, structured developmental frameworks, and continuous support systems for educators.
                    </p>
                    <p>
                        Our franchise partners and teaching staff undergo extensive professional training programs, ensuring consistent delivery of high-quality learning environments. In addition, centralized academic and operational support systems allow our teams to provide continuous guidance and support to partner schools.
                    </p>
                </div>

                <div className="mt-8">
                    <h3 className="font-woodford  text-xl text-dr-accent mb-4">From Education Innovation to NeuroPi</h3>
                    <p className="mb-4">
                        While building education ecosystems, one fundamental realization emerged: human development systems globally are still disconnected from modern scientific understanding of the brain.
                    </p>
                    <p className="mb-4">
                        This insight led to the development of NeuroPi.
                    </p>
                    <p className="mb-4">
                        NeuroPi represents the culmination of three decades of research in human development, designed to bridge the gap between scientific knowledge of the brain and the real-world systems responsible for developing human potential.
                    </p>
                    <p className="mb-4">
                        Through NeuroPi, our goal is to create a science-driven human development intelligence platform that can help educators, institutions, and families better understand how individuals learn, grow, and perform.
                    </p>
                    <p>
                        Ultimately, NeuroPi seeks to build the infrastructure for personalized human development in the 21st century.
                    </p>
                </div>

                <div className="mt-8">
                    <h3 className="font-woodford  text-xl text-dr-accent mb-4">Some of my Professional Affiliations:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-base text-dr-text-dark">
                        <li>Member of the Society of Italian Anglistica (AIA)</li>
                        <li>Member of the European Society for the Study of English (THEY)</li>
                        <li>Member of the Italian American Psychological Society</li>
                        <li>Member of European Congress of Psychology</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h3 className="font-woodford  text-xl text-dr-accent mb-4">Some of my Publications</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-dr-text-dark">
                        <li>Dr. Aperna RV and Dr Lipson H "Evolving process of speech in Children’s Language Development" (2013), Journal of Educational Measurement.</li>
                        <li>Dr. Aperna RV and Dr W. Acquino "Insights to the Language Development in Children 0-2 years" (2012), Journal of Educational Measurement.</li>
                        <li>Dr. Aperna RV "Pre operational Stage of Cognitive Development" (2012) - Current Opinion of Psychology.</li>
                        <li>Dr. Aperna RV "Language skill development from infancy and early childhood" (2011), Cognition and Instruction.</li>
                        <li>Dr. Aperna RV "Quality of Life measured and analysed in motherhood" (2011) Psychology of Women Quarterly.</li>
                        <li>Dr. Aperna RV and Dr Bongard C "Reactive Attachment Disorder in first stage in some children aged 3-5 years" (2011), Psychology of Sexual Orientation and Gender Diversity.</li>
                        <li>Dr. Aperna RV "Co-evolutionary variance can guide evolutionary system of father and daughter relationship" (2010), Psychology of Sexual Orientation and Gender Diversity.</li>
                        <li>Dr. Aperna RV "Crisis in Socio-emotional Development of an individual" (2010), Journal of Research in Personality.</li>
                        <li>Dr. Aperna RV "Storytelling helps child development and teach about life"(2009), Current Directions in Psychological Sciences.</li>
                        <li>Dr. Aperna RV "Milestones in Toddler Development" (2008), Annual Review of Psychology.</li>
                        <li>Dr. Aperna RV "Re-inventing the Wheel: children begin to use logic and reasoning in their thinking process" (2007) Journal of Educational Measurement.</li>
                        <li>Dr. Aperna RV Analising Advantages and Disadvantages of Infant Day Care" (2006) - Current Opinion of Psychology.</li>
                    </ul>
                </div>
            </JourneyTextSection>

            {/* Psychologist Section */}
            <JourneyTextSection title="A Neuroscientist">
                <p className="font-bold font-woodford text-2xl italic mb-4 text-dr-accent">
                    Understanding the brain so every human can discover their true potential.
                </p>
                <p >
                    When you study the human brain deeply enough, you begin to understand something profound: people rarely act without reasons. Neuroscience teaches us that behaviour is shaped by complex interactions between biology, experience, and environment.
                </p>
                <p>
                    My journey into neuroscience was not linear. I began my career as a successful IT consultant, but a deeper curiosity about how human beings think and develop led me back to academia. I pursued my Master’s degree in English at Cambridge while simultaneously completing my Doctorate in Child Psychology at the University of Essex (UK). During my doctoral journey, my academic mentor was a neuroscientist, which drew me deeply into the study of brain development and the biological foundations of human behaviour.
                </p>
                <p>
                    For more than three decades, my work has focused on understanding how children think, how environments shape their development, and how early experiences influence cognitive and emotional outcomes. This long journey of research ultimately laid the foundation for NeuroPi, a deep-technology platform integrating neuroscience, genetics, epigenetics, and artificial intelligence to better understand and develop human potential.
                </p>
                <p>
                    Along the way, I learned that vulnerability and uncertainty are not weaknesses but powerful drivers of innovation. Many behaviours that hold individuals back—over-preparation instead of action, excessive dependence on external validation, or self-exclusion from opportunities—are conditioned responses that can be unlearned. True progress comes when we replace perfectionism with courage and action.
                </p>
                <p>
                    Another milestone in my journey came when I was appointed by the Italian Government as a Board Member in the Council for the Integration Program for Foreign Children, where I contributed to initiatives supporting the development and integration of children from diverse cultural backgrounds.
                </p>
                <p>
                    As an Indian woman working internationally, I often felt the need to work harder, study deeper, and constantly update myself with the latest developments in developmental science and neuroscience. Over the years, thousands of my research articles and writings were published, allowing my work to reach educators, researchers, and institutions across different countries.
                </p>
                <p>
                    The resilience that carried me through this journey came from my grandmother. The grit she instilled in me shaped the way I approach both life and work. Her example taught me to treat every day as an opportunity to build something meaningful.
                </p>
                <p>
                    Today, that same spirit of curiosity, resilience, and scientific inquiry drives my work through NeuroPi, where my three decades of research are being translated into a global human development intelligence platform designed to unlock human potential through science and technology.
                </p>
            </JourneyTextSection>

            {/* Brain Wider */}
            <VideoCardsSection
                title="The Brain Is Wider Than The Sky, Deeper Than The Sea, And Within It Lies The Future Of Humanity."
                bgClass="bg-slate-50"
                textClass="text-dr-dark-purple"
                count={2}
                videos={[
                    {
                        title: "Her Excellency Award",
                        youtubeLink: "https://www.youtube.com/watch?v=OBkq7yOkkEA"
                    },
                    {
                        title: "Entrepreneur Development & Training Program",
                        youtubeLink: "https://www.youtube.com/watch?v=OFyH1K4CMVI"
                    }
                ]}
            />

            {/* Inception Carousel */}
            <ImageCarouselSection
                title="The Inception"
                imageBasePath="/image/THE INCEPTION"
                images={[
                    'slide_07.jpg',
                    'slide_06.jpg',
                    'slide_05.jpg',
                    'slide_04.jpg',
                    'slide_03.jpg',
                    'slide_02.jpg',
                    'slide_01.jpg',
                    'S39.jpg',
                    'S40.jpg',
                    'S41.jpg',
                    'S42.jpg',
                    'S43.jpg',
                    'S44.jpg',
                    'S45.jpg'
                ]}
            />

            {/* Entrepreneur Section */}
            <JourneyTextSection title="AN ENTREPRENEUR">
                <p>
                    My beloved Mom, the Naughty Princess, always said, “Entrepreneurship is living a few years of your life like most people won’t, so that you can spend the rest of your life like most people can’t.” She transmitted all her qualities of a successful entrepreneur to me. I always had a clear goal that I worked towards each day. I didn’t let short–term profits, negative feedback, or hectic schedules prevent me from continuing the march towards my vision. I made it a habit of building up the people around me — not just once, but over and over and over again.
                </p>
                <p>
                    I have all along believed that consistent effort is the key to my entrepreneurial success. The people who ‘make it’ don't always have the best ideas or the most resources. Instead, they keep working and making incremental improvements day after day—no matter what gets thrown at them. This is what Grit is all about. 2009 saw the third dimension of my career - THE ENTREPRENEUR. The journey since then has been always an uphill walk. The unfortunate thing about the word 'entrepreneurship' is that it is so closely associated with the drive for financial success and as much as we may not like to admit it, money does play a large part in our entrepreneurial and professional successes. It is one of the most important ingredient.
                </p>
                <p>
                    My ability to sit for hours on end to contemplate, write and bring into practice my ideas has gone a long way to make me go on, amidst all odds and tempests. I always listed the things I wanted to be known for, then took action: What steps taken this year that set me on track to becoming the person I wanted to be? As women we are more vulnerable to many situations: family, friends and work. We live in a male dominated world. So life as an entrepreneur could never be easy. For me this vulnerability always portrayed itself as uncertainty, risk and emotional exposure. These are three elements that every entrepreneur is likely to encounter almost daily, and if the approach is to resist vulnerability, it will only persist. So I familiarised myself with the emotions associated with vulnerability, and tried to become comfortable with the underlying vulnerability in most emotion and action. Ultimately, through embracing vulnerability and imperfection, I got the opportunity to become more courageous and engage in greater work.
                </p>
                <p>
                    In 2014 got one of the world’s most prestigious awards from the House of Nobel Prize in Sweden. The Award was the Open Knowledge Award for Best Business Initiative. And the same year I opened my First Preschool in India and thus becoming the FIRST Italian Preschool Chain to enter into the Franchising World of Preschool Business not ONLY in India, but in the world.. I finally could fulfil my Mom’s dream to bring one of Europe’s best Kindergartens and its facilities to millions of children in my own country. In a short span of five years, Ritzy Schools expanded across nine states in India. Ritzy Schools mission is to reach out to all those who think like them, have a desire to grow with them and cherish the pride of being Edupreneurs and Motherpreneurs.
                </p>
            </JourneyTextSection>

            {/* Philanthropist Section */}
            <JourneyTextSection title="A Philanthropist & A Creator Global Impact" bgImage="/image/Bg/philanthropist_bg.jpg">
                <p className="font-bold font-woodford text-2xl italic  text-dr-accent">
                    The future of humanity will not be decided by machines, but by how well we nurture the human mind.
                </p>

                <p>
                    My humanitarian journey began in some of the most remote regions of Africa, where I accompanied my husband who was working with communities affected by civil and ethnic conflicts. Witnessing children suffering from starvation, lack of medical care, and the trauma of losing their families profoundly transformed my outlook on life. Those experiences ignited a lifelong commitment in me—to work for children who have been denied opportunities simply because of the circumstances into which they were born.
                </p>
                <p>
                    This commitment led to the creation of the Ritzy Foundation, through which we work to bring quality Early Childhood Care and Education (ECCE) to underserved communities. Our initiatives focus on providing children with strong developmental foundations, aligning with the global vision of United Nations Sustainable Development Goals (SDGs), particularly SDG 4: Quality Education and SDG 10: Reduced Inequalities.
                </p>
                <p>
                    Today, our work extends beyond marginalized communities in Telangana to remote tribal regions such as Lahaul and Spiti in Himachal Pradesh, where children live at altitudes of nearly 13,000 feet above sea level. By providing these children with access to international standards of preschool education, along with exposure to activities such as gymnastics, robotics, and experiential learning, we aim to empower them with the confidence and skills needed to thrive in a rapidly changing world.
                </p>
                <p>
                    The smiles and curiosity of these children serve as a constant reminder of the transformative power of education. Each new preschool we establish is not merely a school—it is a gateway to opportunity for children who previously had none.
                </p>
                <p>
                    However, my vision extends far beyond establishing schools. Millions of children between the ages of 0–6 years in small towns and rural communities still lack access to structured early childhood development. Ensuring that every child begins life with strong cognitive, emotional, and social foundations is essential not only for individual wellbeing but also for building resilient societies. This mission contributes to SDG 3: Good Health and Well-Being, SDG 4: Quality Education, and SDG 8: Decent Work and Economic Growth, as early childhood development directly influences lifelong learning and productivity.
                </p>
                <p>
                    To further scale this impact globally, I founded NeuroPi, a deep-technology platform integrating neuroscience, genetics, epigenetics, and artificial intelligence to create science-driven systems that help societies better understand human potential. Through NeuroPi, our goal is to enable educators, families, and institutions to design environments that nurture cognitive development, emotional resilience, and human capability from the earliest years of life.
                </p>
                <p>
                    While the Ritzy Foundation focuses on grassroots educational access, NeuroPi aims to build a global human development intelligence infrastructure, aligning closely with SDG 3 (Good Health & Well-Being), SDG 4 (Quality Education), and SDG 9 (Industry, Innovation and Infrastructure) by applying scientific insights to human development systems.
                </p>
                <p>
                    In 2019, this humanitarian journey was recognized globally when I was honored as the “Most Humanitarian Person of the World” by the Guinness Book of World Records. Yet for me, the most meaningful recognition continues to be the joy and hope reflected in the faces of children who discover that their future can be brighter than their past.
                </p>
                <p>
                    Ultimately, my work—through both philanthropy and innovation—is guided by one simple belief:<br />
                    When we invest in understanding and nurturing human potential, we invest in the future of humanity itself.
                </p>


            </JourneyTextSection>

            {/* Results Beyond Calculation 1 */}
            <ImageCarouselSection
                title="The Results Will Be Beyond Calculation"
                imageBasePath="/image/THE RESULTS WILL BE BEYOND CALCULATION"
                images={[
                    'slide_02.jpg', 'slide_03.jpg', 'slide_04.jpg', 'slide_05.jpg', 'slide_06.jpg', 'slide_07.jpg', 'slide_08.jpg'
                ]}
            />


            {/* Best of Opinion */}
            <VideoCardsSection
                title="Dr. Watson & Peppo Discover the Amazing Brain"
                subtitle="Quiet Strength. Endless Resilience. Boundless Grace."
                bgClass="bg-white"
                count={4}
                videos={[
                    { title: "NeuroPi Logo, Mascot & Character Launch", youtubeLink: "https://www.youtube.com/watch?v=vcRkoX52zlY&feature=youtu.be" },
                    { title: "भारत का भविष्य आज से शुरू होता है - NeuroPi", youtubeLink: "https://www.youtube.com/watch?v=9fOgiMlE3Wo&feature=youtu.be" },
                    { title: "The Mysterious Lamp",  youtubeLink: "https://www.youtube.com/watch?v=wcmNwUNTNOA&feature=youtu.be" },
                    { title: "Muscle Builders",  youtubeLink: "https://www.youtube.com/watch?v=B31VL1-tgvY&feature=youtu.be" }
                ]}
            />



            {/* On Going Projects Section custom split */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-12 animate-fade-up text-center">
                        <h2 className="font-woodford text-4xl md:text-5xl  mb-4 text-dr-dark-purple uppercase">
                            Empowering Human Potential
                        </h2>
                        <div className="w-24 h-1 bg-dr-accent mx-auto rounded-full mb-6"></div>
                        <p className="font-bold font-woodford text-2xl italic text-dr-accent">
                            "Either you run the day or the day runs you."
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Left Side: Projects Text */}
                        <div className="lg:w-1/2 space-y-10 animate-fade-up">
                            <div>
                                <h3 className="text-xl font-bold font-woodford text-dr-dark-purple mb-3 uppercase tracking-wide">
                                    Entrepreneur Training and Development
                                </h3>
                                <p className="text-dr-text-dark leading-relaxed font-woodford">
                                    EMPOWERING PEOPLE & REVITALISING THE COMMUNITY. EDTP created as a powerful engine for encouraging entrepreneurship in economically disadvantaged communities has shown to be the equaliser that allows individuals from variant educational, socio-economic and familial backgrounds to prosper financially.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-woodford text-dr-dark-purple mb-3 uppercase tracking-wide">
                                    Summer Camps
                                </h3>
                                <p className="text-dr-text-dark leading-relaxed font-woodford">
                                    STUDENTS GET STRONGER, BRAVER AND CONFIDENT.The Summer Camps that I organise through Ritzy Schools Educational Society introduce the students to Italian geography, language, culture, traditions, art, music, films, food, fun games apart from Aerial Art and Indo-Italian Folk Fitness.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-woodford text-dr-dark-purple mb-3 uppercase tracking-wide">
                                    Teacher Training and Women Empowerment
                                </h3>
                                <p className="text-dr-text-dark leading-relaxed font-woodford">
                                    EARLY CHILDHOOD EDUCATION AND CARE (ECEC) FACILITIES and JOB OPPORTUNITIES FOR ALL. Striving to give education to children living in most remote parts of the Globe, geographically inaccessible terrains and to generate employment and bread earning opportunities for women and youth.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Simple Carousel for On Going Projects */}
                        <div className="lg:w-1/2 w-full animate-fade-up" style={{ animationDelay: '200ms' }}>
                            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide py-4" style={{ scrollbarWidth: 'none' }}>
                                {['slide_03.jpg', 'slide_02.jpg', 'slide_01.jpg'].map((img, idx) => (
                                    <div key={idx} className="snap-center shrink-0 w-[85%] md:w-[70%] lg:w-[90%] aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                        <img
                                            src={`/image/ON GOING PROJECTS/${img}`}
                                            alt={`Project slide ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Is On */}
            <VideoCardsSection
                title="Purpose. Passion. Progress."
                bgClass="bg-white"
                count={2}
                videos={[
                    { title: "NeuroPi Presentation @ Capital HQ", youtubeLink: "https://www.youtube.com/watch?v=5OaJUbJyge0" },
                    { title: "NeuNeuroPi Lab — Where Innovation Meets Precision", youtubeLink: "https://www.youtube.com/watch?v=7t6D0OGdL0U" }
                ]}
            />

            {/* NeuroPi Section */}
            <section className="py-16 px-6 bg-white text-center">
                <div className="container mx-auto max-w-4xl animate-fade-up">
                    <a href="https://neuropi.ai/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                        <h2 className="font-woodford text-3xl md:text-4xl font-bold mb-6 text-dr-accent">
                            NeuroPi: Bridging The Human Potential
                        </h2>
                        <p className="font-woodford text-lg md:text-xl text-dr-text-dark leading-relaxed">
                            NeuroPi a precision neurogenomic and AI-driven technology suite that helps unlock the full potential of the human brain across every stage of life and every field of performance.
                        </p>
                    </a>
                </div>
            </section>

            {/* Media Press Videos */}
            <VideoCardsSection
                title="MEDIA & PRESS COVERAGE"
                bgClass="bg-slate-50"
                count={2}
                videos={[
                    { title: "Dr Aperna with Mukha MuKhi", youtubeLink: "https://www.youtube.com/watch?v=iSjGV-kIm2o&feature=youtu.be" },
                    { title: "Halloween 2019", youtubeLink: "https://www.youtube.com/watch?v=Mo8UprdGz7o&feature=youtu.be" }
                ]}
            />

            {/* Media Press Images */}
            <ImageCarouselSection

                imageBasePath="/image/THE RESULTS WILL BE BEYOND CALCULATION 2"
                images={[
                    'slide_01.jpg', 'slide_06.jpg', 'slide_05.jpg', 'slide_03.jpg', 'slide_02.jpg', 'slide_04.jpg'
                ]}
            />

        </div>
    );
};

export default JourneySections;

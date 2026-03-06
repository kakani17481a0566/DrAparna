import React from 'react';
import VideoCardsSection from './VideoCardsSection';
import ImageCarouselSection from './ImageCarouselSection';
import JourneyTextSection from './JourneyTextSection';

const JourneySections = () => {
    return (
        <div className="flex flex-col w-full">
            {/* European Business Award */}
            <VideoCardsSection
                title="EUROPEAN BUSINESS AWARD"
                bgClass="bg-white"
                videos={[
                    {
                        title: "European Business Award - 1",
                        description: "Dr. Aparna's remarkable journey and recognition at the European Business Awards.",
                        youtubeLink: "https://www.youtube.com/watch?v=XySHccUU2NY"
                    },
                    {
                        title: "European Business Award - 2",
                        description: "Dr. Aparna's remarkable journey and recognition at the European Business Awards.",
                        youtubeLink: "https://www.youtube.com/watch?v=BdyDktqjdpY"
                    }
                ]}
            />

            {/* Engage Carousel */}
            <ImageCarouselSection
                title="ENGAGE, ENLIGHTEN, ENCOURAGE AND ESPECIALLY...BE YOURSELF!"
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
                title="I'M MY OWN WOMAN"
                bgClass="bg-slate-50"
                count={2}
                videos={[
                    { title: "Dummy Video Title 1", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" },
                    { title: "Dummy Video Title 2", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" }
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
            <JourneyTextSection title="A STUDENT" bgImage="/image/Bg/student_bg.png">
                <p className="font-bold font-lato text-2xl italic mb-4">
                    My Dad made me in a hot furnace and the grit cultivated by my Grandma never let me give up.
                </p>
                <p>
                    We have to develop ways to face and conquer the resistance we face in those moments when we are trying to do something and feel like we can't produce anything even remotely good.
                </p>
                <p>
                    Being an Army Officer’s daughter, I had every luxury to stay, study and settle in India. An ambition to be ‘the some day some one’ made to go to UK for higher education. All my Dad had to say was, “I have money only for your flight ticket. But I have made you in hot furnace and so I know you will never give up come what may and never heed to any action that would bring shame to our family.”
                </p>
                <p>
                    I was 17 years then and I’m 47 years now. Three decades have passed by, and I grew from student to an IT Consultant to a wife to a mother to finally an entrepreneur who has today to share so much with the young budding Entrepreneurs. I take pride in saying that I have never given up. We all have those moments where we are trying to do something and feel like we can't produce anything even remotely good. We have to develop ways to face and conquer the resistance we face in these moments. I have adopted a lot of techniques into my own development process. Like an athlete, I always worked on a schedule, not just when I felt motivated. I approached my work like a pro, not an amateur. I did the most important things first and didn’t shirk responsibilities. All this is like a prayer that I said everyday and with every passing day I got stronger and tougher.
                </p>
                <p>
                    Five years of my University life were the most testing times of my life. My scholarship was just enough for my tuition fee. Besides fee, I had to pay for my room rent and food. I never bought a set of clothes for myself in the first three years of my university. I walked everyday over 12 to 16 kms. From my room to workplace to University and back. I worked as a dog walker for three years and I always prayed God to keep the old lady and the old dog alive at least until I finished my university as both of them were gentle, kind and paid her enough to stay back in UK and finish my studies. It was not until third year of my university that when I topped my subject in the University of Sussex (UK) and my name was on the front page of the local newspaper that I got a bigger room, a bicycle presented by my house owner and a decent job in the university campus. This was the first milestone of my life in Europe.
                </p>
                <p>
                    Those three years all I had was just a sandwich to eat and a sleeping bag to sleep. No bed and no food. I even forgot how a kitchen looked but those were the years when my Grandma’s stories had their maximum impact on me. The grit cultivated by my Grandma never let me give up. When Mother Sita from the royal palace could live for 14 years in Ashok Vatika, why not me... There was nothing to complain. I never ever thought what my peers had to say or think about me. I continued to work and study. The next milestone was when I got the UK Queen’s Award for Excellence in my studies. I have been the only non Brit to have received this Award in last 27 years.
                </p>
            </JourneyTextSection>

            {/* Researcher Section */}
            <JourneyTextSection title="A RESEARCHER">
                <p className="font-bold font-lato text-2xl italic mb-4 text-dr-accent">
                    “Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world,” said Albert Einstein.
                </p>
                <p>
                    I ‘m a researcher and my job is to see what everybody else has seen, and think what nobody else has thought. Having a PhD in Psychology from University of Essex (UK), I have been doing research for more than three decades now on how humans think and why they act the way they do, how criminals think, but mainly how children think. I study some children from birth and see how society and human nature shapes them. I am a dedicated Clinical Child Psychologist as well. My patients are my top priority, and I do whatever I can to ensure their well-being.
                </p>
                <p>
                    My team of Psychologists, experts of Neurosciences, especially in developing the Right Brain, educationists and content writers, under my tutelage developed the Curriculum which is the backbone of My School ITALY and RITZY SCHOOLS and the teaching methodologies that are par excellence. The teaching tool, DECANT and Assessment System, MILESTONES is the result of my 30 years of experience in the Early Childhood Education and Care (ECEC) sector and my research as Child Psychologist.
                </p>
                <p>
                    In 2014, when the American University in Washington D.C. accepted my papers to introduce Neuro Linguistic Programming (NLP) in ECEC sector and My School ITALY became the FIRST Preschool in the WORLD to introduce NLP in its teaching methodology. Both My School ITALY and RITZY SCHOOLS have very high European standards of running and managing the Preschools. Hence, our Franchisees and our teaching staff are trained for 250 hours. The RITZY GROUP staff are available 24/7 for the teaching staff and to the management of Franchised Schools via their Back Office to help them and resolve any rising queries or issues.
                </p>

                <div className="mt-8">
                    <h3 className="font-lato font-bold text-xl text-dr-dark-purple mb-4">Some of my Professional Affiliations:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
                        <li>Member of the Society of Italian Anglistica (AIA)</li>
                        <li>Member of the European Society for the Study of English (THEY)</li>
                        <li>Member of the Italian American Psychological Society</li>
                        <li>Member of European Congress of Psychology</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h3 className="font-lato font-bold text-xl text-dr-dark-purple mb-4">Some of my Publications</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>Dr Aperna RV and Dr Lipson H "Evolving process of speech in Children’s Language Development" (2013), Journal of Educational Measurement.</li>
                        <li>Dr Aperna RV and Dr W. Acquino "Insights to the Language Development in Children 0-2 years" (2012), Journal of Educational Measurement.</li>
                        <li>Dr Aperna RV "Pre operational Stage of Cognitive Development" (2012) - Current Opinion of Psychology.</li>
                        <li>Dr Aperna RV "Language skill development from infancy and early childhood" (2011), Cognition and Instruction.</li>
                        <li>Dr Aperna RV "Quality of Life measured and analysed in motherhood" (2011) Psychology of Women Quarterly.</li>
                        <li>Dr Aperna RV and Dr Bongard C "Reactive Attachment Disorder in first stage in some children aged 3-5 years" (2011), Psychology of Sexual Orientation and Gender Diversity.</li>
                        <li>Dr Aperna RV "Co-evolutionary variance can guide evolutionary system of father and daughter relationship" (2010), Psychology of Sexual Orientation and Gender Diversity.</li>
                        <li>Dr Aperna RV "Crisis in Socio-emotional Development of an individual" (2010), Journal of Research in Personality.</li>
                        <li>Dr Aperna RV "Storytelling helps child development and teach about life"(2009), Current Directions in Psychological Sciences.</li>
                        <li>Dr Aperna RV "Milestones in Toddler Development" (2008), Annual Review of Psychology.</li>
                        <li>Dr Aperna RV "Re-inventing the Wheel: children begin to use logic and reasoning in their thinking process" (2007) Journal of Educational Measurement.</li>
                        <li>Dr Aperna RV Analising Advantages and Disadvantages of Infant Day Care" (2006) - Current Opinion of Psychology.</li>
                    </ul>
                </div>
            </JourneyTextSection>

            {/* Psychologist Section */}
            <JourneyTextSection title="A PSYCHOLOGIST">
                <p className="font-bold font-lato text-2xl italic mb-4 text-dr-accent">
                    You know too much psychology. When you can’t get mad because you understand everyone’s reasons for doing everything.
                </p>
                <p>
                    From a successful IT Consultant to getting back to University to complete my Master’s in English from Cambridge and simultaneously Doctorate in Child Psychology from University of Essex , was a different saga of my life. Women we are more vulnerable to situations that demand change. But I have always admired my ability to embrace and be comfortable with vulnerability — a state of being we often shy away from or perceive as weak.
                </p>
                <p>
                    Behaviours like over-preparation instead of action, seeking too much feedback from others at the cost of our decision-making, and self-exclusion/self-selection (declining from compliments and opportunities because we feel we lack merit) are all conditioned behaviours that we can unlearn, hopefully transcending perfectionism in favour of courage and action.
                </p>
                <p>
                    Getting appointed by the Italian Government as one of the Board Members in the Council for the Integration Program for Foreign Children was one another Milestone in my life. Being an Indian, being coloured, being woman always made me work hard, study more and keep myself updated with the latest developments in child psychology. My thousands of articles got published year on year and I was soon second to none. I grew above and over the differentiation of sex, colour, creed, race and religion. I could do all this because of GRIT injected into my blood stream by my Grandma. The way she lived day by day, years and years always inspired me to make everyday of my life as special as it could be.
                </p>
            </JourneyTextSection>

            {/* Brain Wider */}
            <VideoCardsSection
                title="BRAIN IS WIDER THAN THE SKY"
                bgClass="bg-slate-50"
                textClass="text-dr-dark-purple"
                count={2}
                videos={[
                    { title: "Dummy Video Title 1", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" },
                    { title: "Dummy Video Title 2", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" }
                ]}
            />

            {/* Inception Carousel */}
            <ImageCarouselSection
                title="THE INCEPTION"
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
            <JourneyTextSection title="A PHILANTHROPIST" bgImage="/image/Bg/philanthropist_bg.jpg">
                <p>
                    I followed my husband to the most remote parts of Africa to work with civil war and ethnic war injured people. Hundreds and hundreds of dying children due to starvation, lack of medical facilities and pain of losing parents, all made me mould myself into a new person that I'm today. I am a person with passion to work for children across the globe.
                </p>
                <p>
                    And now through Ritzy Foundation, I’m able to reach children in India with my most modern methodologies and tools in Early Childhood Education and Care sector. Today I’m working not only with marginalised community children in Telangana, but with the tribal children of Lahaul and Spiti in Himachal Pradesh at the altitude of 13000 ft above sea level. And to be honest, giving them these International Standards of Preschool Education along with Gymnastics and Robotics, gives me more happiness and pleasure than I ever had.
                </p>
                <p>
                    The joy in the faces of these kids and the sense of satisfaction I get when I open a new Preschool for these children, keeps my motivation levels high. Setting up Preschools for marginalised classes is just a humble beginning. When I will be able to reach the children in every small town and village, where still a huge population of 0-6 years don’t have access to ECCE, I’d say I’m close to my vision. 2019 has been another Milestone in my life as I was declared by Guinness Book of World Records as the Most Humanitarian Person of the World.
                </p>
            </JourneyTextSection>

            {/* Results Beyond Calculation 1 */}
            <ImageCarouselSection
                title="THE RESULTS WILL BE BEYOND CALCULATION"
                imageBasePath="/image/THE RESULTS WILL BE BEYOND CALCULATION"
                images={[
                   'slide_02.jpg', 'slide_03.jpg', 'slide_04.jpg', 'slide_05.jpg', 'slide_06.jpg', 'slide_07.jpg', 'slide_08.jpg'
                ]}
            />

            {/* Media Press */}
            <VideoCardsSection
                title="MEDIA & PRESS COVERAGE"
                bgClass="bg-slate-50"
                count={2}
                videos={[
                    { title: "Dummy Video Title 1", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" },
                    { title: "Dummy Video Title 2", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" }
                ]}
            />

            {/* Best of Opinion */}
            <VideoCardsSection
                title="HAVE BEST OF THE OPINION"
                bgClass="bg-white"
                count={4}
                videos={[
                    { title: "Dummy Video Title 1", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" },
                    { title: "Dummy Video Title 2", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" },
                    { title: "Dummy Video Title 3", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" },
                    { title: "Dummy Video Title 4", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" }
                ]}
            />

            {/* Results Beyond Calculation 2 */}
            <ImageCarouselSection
                title="THE RESULTS WILL BE BEYOND CALCULATION"
                imageBasePath="/image/THE RESULTS WILL BE BEYOND CALCULATION 2"
                images={[
                    'slide_01.jpg', 'slide_06.jpg', 'slide_05.jpg', 'slide_03.jpg', 'slide_02.jpg', 'slide_04.jpg'
                ]}
            />

            {/* On Going Projects Section custom split */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-12 animate-fade-up text-center">
                        <h2 className="font-lato text-4xl md:text-5xl font-bold mb-4 text-dr-dark-purple uppercase">
                            ON GOING PROJECTS
                        </h2>
                        <div className="w-24 h-1 bg-dr-accent mx-auto rounded-full mb-6"></div>
                        <p className="font-bold font-lato text-2xl italic text-dr-accent">
                            "Either you run the day or the day runs you."
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Left Side: Projects Text */}
                        <div className="lg:w-1/2 space-y-10 animate-fade-up">
                            <div>
                                <h3 className="text-xl font-bold font-lato text-dr-dark-purple mb-3 uppercase tracking-wide">
                                    Entrepreneur Training and Development
                                </h3>
                                <p className="text-gray-700 leading-relaxed font-lato">
                                    EMPOWERING PEOPLE & REVITALISING THE COMMUNITY. EDTP created as a powerful engine for encouraging entrepreneurship in economically disadvantaged communities has shown to be the equaliser that allows individuals from variant educational, socio-economic and familial backgrounds to prosper financially.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-lato text-dr-dark-purple mb-3 uppercase tracking-wide">
                                    Summer Camps
                                </h3>
                                <p className="text-gray-700 leading-relaxed font-lato">
                                    STUDENTS GET STRONGER, BRAVER AND CONFIDENT.The Summer Camps that I organise through Ritzy Schools Educational Society introduce the students to Italian geography, language, culture, traditions, art, music, films, food, fun games apart from Aerial Art and Indo-Italian Folk Fitness.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-lato text-dr-dark-purple mb-3 uppercase tracking-wide">
                                    Teacher Training and Women Empowerment
                                </h3>
                                <p className="text-gray-700 leading-relaxed font-lato">
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
                title="THE ACTION IS ON!"
                bgClass="bg-white"
                count={2}
                videos={[
                    { title: "Dummy Video Title 1", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" },
                    { title: "Dummy Video Title 2", description: "Dummy Description for this video.", youtubeLink: "https://dummy-link.com" }
                ]}
            />

        </div>
    );
};

export default JourneySections;

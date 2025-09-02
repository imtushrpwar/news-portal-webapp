const newsData = [
    {
        id: 1,
        title: "New AI Tool Changes Everything",
        content: "A new breakthrough in AI has changed the way we think...",
        category: "Technology",
        author: "Jane Doe",
        date: "2025-08-17",
        image: "/assets/news1.jpg",
        isFeatured: true
    },

    {
         id: 2,
        title: "Election Results Are In",
        content: "The election results for 2025 are finally in and show...",
        category: "Politics",
        author: "John Smith",
        date: "2025-08-15",
        image: "/assets/news2.jpg",
        isFeatured: false
    },

    {
        id: 3 ,
        title: "AI Breakthrough in Healthcare",
        content: "Researchers have developed an AI tool that can diagnose rare diseases faster than traditional methods.",
        date: "2025-08-18",
        author: "Dr. Jane Smith",
        image: "/assets/news3.jpg",
        category: "Technology",
        isFeatured: true
    },
    {
        id: 4,
        title: "National Elections 2025: What to Expect",
        content: "The upcoming national elections are set to reshape the political landscape. Here’s what voters should know.",
        date: "2025-08-15",
        author: "Mark Thompson",
        image: "/assets/news4.jpg",
        category: "Politics",
        isFeatured: true
    },
    {
        id: 5,
        title: "Champions League Final: A Night to Remember",
        content: "An unforgettable final match saw Manchester City edge out Real Madrid in a dramatic penalty shootout.",
        date: "2025-08-10",
        author: "Alex Morgan",
        image: "/assets/news5.jpg",
        category: "Sports",
        isFeatured: false
    },
    {
        id: 6,
        title: "5G Expansion Boosts Remote Areas",
        content: "5G networks are expanding to rural regions, improving access to high-speed internet and digital services.",
        date: "2025-08-12",
        author: "Nina Patel",
        image: "/assets/news6.jpg",
        category: "Technology",
        isFeatured: false
    },
    {
        id: 7,
        title: "Local Health Officials Urge Vaccination Ahead of Flu Season",
        content: "With flu season approaching, local health authorities encourage timely vaccinations to reduce hospital strain.",
        date: "2025-08-05",
        author: "Rachel Green",
        image: "/assets/news7.jpg",
        category: "Health",
        isFeatured: false
    },
    {
        id: 8,
        title: "Hollywood’s Summer Blockbusters Hit Record Sales",
        content: "Box office numbers soar as moviegoers return to cinemas for this year's most anticipated releases.",
        date: "2025-08-07",
        author: "Michael Roberts",
        image: "/assets/news8.jpg",
        category: "Entertainment",
        isFeatured: false
    },
    {
        id: 9,
        title: "Green Energy Investments Surge Globally",
        content: "More countries are investing in solar and wind energy, signaling a major shift away from fossil fuels.",
        date: "2025-08-02",
        author: "Leila Hassan",
        image: "/assets/news9.jpg",
        category: "Politics",
        isFeatured: false
    },
    {
        id: 10,
        title: "Star Athlete Announces Retirement After 20-Year Career",
        content: "In an emotional press conference, the Olympic gold medalist shared their decision to step away from the sport.",
        date: "2025-08-14",
        author: "Chris Evans",
        image: "/assets/news10.jpg",
        category: "Sports",
        isFeatured: true
    },
    {
        id: 11,
        title: "New Tech Startup Raises $50M in Seed Funding",
        content: "The startup aims to revolutionize remote collaboration tools with cutting-edge AI and AR technologies.",
        date: "2025-08-09",
        author: "Samantha Lin",
        image: "/assets/news11.jpg",
        category: "Technology",
        isFeatured: false
    },
    {
        id: 12,
        title: "Music Festival Lights Up the City",
        content: "Tens of thousands gathered this weekend for the annual summer music festival featuring over 50 artists.",
        date: "2025-08-13",
        author: "Jordan Lee",
        image: "/assets/news12.jpg",
        category: "Entertainment",
        isFeatured: false
    },

    {
        id: 13,
        title: "Breakthrough in Quantum Computing",
        content: "Scientists reveal a new quantum processor capable of solving complex problems in seconds.",
        date: "2025-08-16",
        author: "Elena Park",
        image: "/assets/news13.jpg",
        category: "Technology",
        isFeatured: true
    },
    {
        id: 14,
        title: "Global Summit on Climate Change Begins",
        content: "World leaders gather to discuss urgent measures against climate change and carbon emissions.",
        date: "2025-08-17",
        author: "David Kim",
        image: "/assets/news14.jpg",
        category: "Politics",
        isFeatured: false
    },
    {
        id: 15,
        title: "Rising Star Wins Wimbledon Title",
        content: "A 19-year-old tennis sensation stunned the world by winning the Wimbledon Championship.",
        date: "2025-08-11",
        author: "Sophia Turner",
        image: "/assets/news15.jpg",
        category: "Sports",
        isFeatured: true
    },
    {
        id: 16,
        title: "New Study Links Diet to Mental Health",
        content: "Researchers find strong connections between healthy eating habits and improved mental well-being.",
        date: "2025-08-08",
        author: "Dr. Alan White",
        image: "/assets/news16.jpg",
        category: "Health",
        isFeatured: false
    },
    {
        id: 17,
        title: "Streaming Platforms Compete for Viewers",
        content: "Major streaming services roll out new features and shows to dominate the entertainment industry.",
        date: "2025-08-06",
        author: "Lisa Wong",
        image: "/assets/news17.jpg",
        category: "Entertainment",
        isFeatured: false
    },
    {
        id: 18,
        title: "Mars Rover Sends Stunning New Images",
        content: "NASA’s rover captured breathtaking landscapes from the Red Planet, sparking global excitement.",
        date: "2025-08-04",
        author: "Tom Richards",
        image: "/assets/news18.jpg",
        category: "Technology",
        isFeatured: true
    },
    {
        id: 19,
        title: "New Policies Aim to Reduce Air Pollution",
        content: "Governments introduce stricter laws to curb industrial emissions and promote clean energy.",
        date: "2025-08-03",
        author: "Amira Khan",
        image: "/assets/news19.jpg",
        category: "Politics",
        isFeatured: false
    },
    {
        id: 20,
        title: "Legendary Actor Honored at Film Festival",
        content: "The international film festival paid tribute to a legendary actor’s decades-long contribution to cinema.",
        date: "2025-08-01",
        author: "Olivia Martinez",
        image: "/assets/news20.jpg",
        category: "Entertainment",
        isFeatured: true
    },

    {
    id: 21,
    title: "Breakthrough in Battery Technology Promises Longer EV Range",
    content: "Engineers have developed a new solid-state battery that could double the range of electric vehicles while reducing charging time.",
    date: "2025-08-18",
    author: "Hiroshi Tanaka",
    image: "/assets/news21.jpg",
    category: "Technology",
    isFeatured: true
},

{
    id: 22,
    title: "Broadway Musical Breaks Box Office Records",
    content: "The latest Broadway hit has smashed previous records, drawing huge crowds and rave reviews from critics.",
    date: "2025-08-16",
    author: "Emily Carter",
    image: "/assets/news22.jpg",
    category: "Entertainment",
    isFeatured: true
},
{
    id: 23,
    title: "Streaming Giant Announces New Fantasy Series",
    content: "A major streaming platform has announced a big-budget fantasy series set to rival Game of Thrones in scale and storytelling.",
    date: "2025-08-18",
    author: "Daniel Perez",
    image: "/assets/news23.jpg",
    category: "Entertainment",
    isFeatured: false
},

{
    id: 24,
    title: "World’s First AI-Powered City Unveiled",
    content: "A futuristic smart city powered entirely by AI systems has been unveiled, showcasing autonomous transport, energy efficiency, and digital governance.",
    date: "2025-08-19",
    author: "Victor Zhang",
    image: "/assets/news24.jpg",
    category: "Technology",
    isFeatured: true
},
{
    id: 25,
    title: "Tech Giants Collaborate on Cybersecurity Initiative",
    content: "Leading tech companies announced a joint initiative to tackle rising global cyber threats using advanced AI security protocols.",
    date: "2025-08-17",
    author: "Sarah Johnson",
    image: "/assets/news25.jpg",
    category: "Technology",
    isFeatured: false
},
{
    id: 26,
    title: "Global Trade Agreement Reached After Lengthy Negotiations",
    content: "World leaders have finalized a historic trade deal aimed at boosting international cooperation and reducing tariffs.",
    date: "2025-08-19",
    author: "Clara Mitchell",
    image: "/assets/news26.jpg",
    category: "Politics",
    isFeatured: true
},
{
    id: 30,
    title: "Breakthrough Cancer Therapy Shows Promising Results",
    content: "A new experimental treatment has shown remarkable success in early trials, offering hope for patients with aggressive cancers.",
    date: "2025-08-20",
    author: "Dr. Laura Bennett",
    image: "/assets/news30.jpg",
    category: "Health",
    isFeatured: false
}

]

export default newsData;
const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Bikaner Technical University',
                degree: 'Master in Computer Application',
                detail: "Post Degree in Computer Science",
                year: '2019- 2021'
            },
            {
                id: 1,
                title: 'Pandeet Deendayal Shekhawati University',
                degree: 'Bachelor’s of Computer Application',
                detail: "Graduation Degree in Computer Science",
                year: '2015-2017'
            },
           
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'TweakHere Technocrat Pvt Ltd',
                role: 'Frontend Developer',
                url: '',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: 'Aug 2023 – Sep 2024',
                location: ''
            },
            {
                id: 2,
                title: 'Cyber Cuboid',
                role: 'Internee',
                url: '',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: 'Sep 2022 -Jun 2023',
                location: ''
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
